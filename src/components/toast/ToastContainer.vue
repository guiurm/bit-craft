<script setup lang="ts">
import { createToast, type ToastItemVNodeList } from '@/composables/toastGenerator';
import { v6 } from 'uuid';
import { onMounted, ref, watch } from 'vue';
import useCssClassTranslator from '../cssClassTranslator';
import type { TToastContainerPosition, TToastContainerProps } from './ToastTypes';
import useToastStore from './toastStore';

// props
const props = withDefaults(defineProps<TToastContainerProps>(), {
    position: 'top-right',
    css: () => [],
    target: 'document'
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
        [props.target === 'document' ? 'toast-container--fixed' : 'toast-container--absolute']: true,
        [translatePosition(props.position)]: true,
        'toast-container': true
    });
    useToastStore().registerContainer(uuid, items);

    let counter = 1;
    setInterval(() => {
        createToast({ message: 'Some toast message' + counter, liveTime: 1000 });
        counter++;
    }, 500);
});
</script>
<template>
    <div :class="cssR">
        <component :is="toastItem" v-for="(toastItem, index) in items" :key="index" />
    </div>
</template>
