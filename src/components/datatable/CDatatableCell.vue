<script setup lang="ts">
import { noop } from '@/globals';
import { computed, watch } from 'vue';
import useCssClassTranslator from '../cssClassTranslator';
import type { TCellProps } from './datatableTypes';

const props = withDefaults(defineProps<TCellProps>(), {
    cell: () => ({ value: '' }),
    class: '',
    binds: () => ({}),
    events: () => ({ onCellClick: noop, onCellAuxclick: noop, onCellDblclick: noop })
});

const styleBind = computed(() =>
    props.colSpan && props.colSpan > 0 ? { 'grid-column-start': `span ${props.colSpan}` } : {}
);
const { css, ...modifyCss } = useCssClassTranslator(props.class);
watch(
    () => props.class,
    n => modifyCss.setCss(n)
);

const emits = defineEmits<{
    cellClick: [e: MouseEvent];
    cellAuxclick: [e: MouseEvent];
    cellDblclick: [e: MouseEvent];
}>();
const events = {
    onClick: (e: MouseEvent) => {
        if (props.events.onCellClick) props.events.onCellClick(e);
        emits('cellClick', e);
    },
    onAuxclick: (e: MouseEvent) => {
        if (props.events.onCellAuxclick) props.events.onCellAuxclick(e);
        emits('cellAuxclick', e);
    },
    onDblclick: (e: MouseEvent) => {
        if (props.events.onCellDblclick) props.events.onCellDblclick(e);
        emits('cellDblclick', e);
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
