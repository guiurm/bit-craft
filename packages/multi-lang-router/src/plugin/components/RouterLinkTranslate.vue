<script setup lang="ts">
import { computed, defineProps, toRefs } from "vue";
import { RouterLink } from "vue-router";
import { useMultiLangRouter } from "..";
import type { RouterLinkTranslateProps } from "../types";
import { getRouterToValue } from "../utils/internalUtils";

const props = defineProps<RouterLinkTranslateProps>();

type TMouseEvents = {
    onClick: [e: MouseEvent];
    onAuxclick: [e: MouseEvent];
    onDblclick: [e: MouseEvent];
    onMousedown: [e: MouseEvent];
    onMouseenter: [e: MouseEvent];
    onMouseleave: [e: MouseEvent];
    onMousemove: [e: MouseEvent];
    onMouseout: [e: MouseEvent];
    onMouseover: [e: MouseEvent];
    onMouseup: [e: MouseEvent];
};

const emit = defineEmits<TMouseEvents>();
const mouseEvents = {
    onClick: (e: MouseEvent) => {
        emit("onClick", e);
    },
    onAuxclick: (e: MouseEvent) => {
        emit("onAuxclick", e);
    },
    onDblclick: (e: MouseEvent) => {
        emit("onDblclick", e);
    },
    onMousedown: (e: MouseEvent) => {
        emit("onMousedown", e);
    },
    onMouseenter: (e: MouseEvent) => {
        emit("onMouseenter", e);
    },
    onMouseleave: (e: MouseEvent) => {
        emit("onMouseleave", e);
    },
    onMousemove: (e: MouseEvent) => {
        emit("onMousemove", e);
    },
    onMouseout: (e: MouseEvent) => {
        emit("onMouseout", e);
    },
    onMouseover: (e: MouseEvent) => {
        emit("onMouseover", e);
    },
    onMouseup: (e: MouseEvent) => {
        emit("onMouseup", e);
    },
};

const {
    lang,
    to: propTo,
    activeClass,
    ariaCurrentValue,
    class: css,
    custom,
    exactActiveClass,
    replace,
    style,
} = toRefs(props);

defineOptions({ inheritAttrs: false });

const to = computed(() => {
    return getRouterToValue({ lang: lang.value, router: useMultiLangRouter(), to: propTo.value });
});
</script>

<template>
    <router-link
        :to="to"
        v-bind="{
            activeClass,
            ariaCurrentValue,
            class: css,
            custom,
            exactActiveClass,
            replace,
            style,
            ...mouseEvents,
        }"
    >
        <slot />
    </router-link>
</template>
