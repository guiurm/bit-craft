<script setup lang="ts">
import { noop } from '@/globals';
import { computed, watch } from 'vue';
import useCssClassTranslator from '../cssClassTranslator';
import type { TCellProps } from './datatableTypes';

const props = withDefaults(defineProps<TCellProps>(), {
    cell: () => ({ value: '' }),
    class: '',
    onCellClick: noop,
    onCellAuxclick: noop,
    onCellDblclick: noop,
    binds: () => ({})
});

const styleBind = computed(() =>
    props.colSpan && props.colSpan > 0 ? { 'grid-column-start': `span ${props.colSpan}` } : {}
);
const { css, ...modifyCss } = useCssClassTranslator(props.class);
watch(
    () => props.class,
    n => modifyCss.setCss(n)
);

const emits = defineEmits<{ click: [e: MouseEvent]; auxclick: [e: MouseEvent]; dblclick: [e: MouseEvent] }>();
const events = {
    onClick: (e: MouseEvent) => {
        props.onCellClick(e);
        emits('click', e);
    },
    onAuxclick: (e: MouseEvent) => {
        props.onCellAuxclick(e);
        emits('auxclick', e);
    },
    onDblclick: (e: MouseEvent) => {
        props.onCellDblclick(e);
        emits('dblclick', e);
    }
};
</script>
<template>
    <span v-bind="events" class="w-full" :class="css" :style="styleBind">
        <slot>
            <template v-if="typeof value === 'string' || typeof value === 'number'">
                {{ value }}
            </template>
            <template v-else>
                <component v-bind="binds" :is="value" />
            </template>
        </slot>
    </span>
</template>
