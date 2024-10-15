<script setup lang="ts">
import { v6 } from 'uuid';
import { onMounted, watch } from 'vue';
import type { TCss } from '../cssClassTranslator';
import useCssClassTranslator from '../cssClassTranslator';
import ToastItem from './ToastItem.vue';

// props
type TToastPosition = `${'top' | 'bottom'}-${'right' | 'center' | 'left'}`;
type TProps = {
    css?: TCss;
    position?: TToastPosition;
    target?: 'document' | 'parent';
    id?: string;
};
const props = withDefaults(defineProps<TProps>(), {
    position: 'top-right',
    css: () => [],
    target: 'document'
});

// data
const { css: cssR, ...modifyCss } = useCssClassTranslator(props.css);
const uuid = props.id ?? v6();

// actions
const checkPositionValue = (p: string): p is TToastPosition => {
    const regex = /^(top|bottom)-(right|center|left)$/;
    return regex.test(p);
};
const translatePosition = (p: string) => {
    if (!checkPositionValue(p)) throw new Error(`Invalid prop type for 'position' as '${p}'`);
    return `toast-container--${p}` as `toast-container--${TToastPosition}`;
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
});
</script>
<template>
    <div :class="cssR">
        <toast-item target="document" />
        <toast-item target="document" />
    </div>
</template>
