<script setup lang="ts">
import { type ToastItemVNodeList } from "@/composables/toastGenerator";
import { v6 } from "uuid";
import { onMounted, ref, watch } from "vue";
import useCssClassTranslator from "../../composables/cssClassTranslator";
import type { TToastContainerPosition, TToastContainerProps } from "./ToastTypes";
import useToastStore from "./toastStore";

// props
const props = withDefaults(defineProps<TToastContainerProps>(), {
    position: "top-right",
    css: () => [],
    target: "document",
});

// data
const { css: cssR, ...modifyCss } = useCssClassTranslator(props.css);
const uuid = props.id ?? v6();
const items = ref([]) as ToastItemVNodeList;

// actions
const checkPositionValue = (p: string): p is TToastContainerPosition => {
    const regex = /^(top|bottom)-(right|center|left)$/;
    return regex.test(p);
};
const translatePosition = (p: string) => {
    if (!checkPositionValue(p)) throw new Error(`Invalid prop type for 'position' as '${p}'`);
    return `toast-container--${p}` as `toast-container--${TToastContainerPosition}`;
};

// watchers
watch(
    () => props.position,
    (n, o) => modifyCss.addCss({ [translatePosition(o)]: false, [translatePosition(n)]: true })
);

// life-cicle
onMounted(() => {
    modifyCss.addCss({
        [props.target === "document" ? "toast-container--fixed" : "toast-container--absolute"]: true,
        [translatePosition(props.position)]: true,
        "toast-container": true,
    });
    useToastStore().registerContainer(uuid, items);
});
</script>
<template>
    <div :class="cssR">
        <component :is="toastItem" v-for="[uuid, toastItem] in items" :key="uuid" />
    </div>
</template>
