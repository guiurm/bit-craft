<script setup lang="ts">
import { noop } from '@/globals';
import { ChevronUpDownIcon } from '@heroicons/vue/24/outline';
import { v6 } from 'uuid';
import { computed, inject, onMounted, watch } from 'vue';
import useCssClassTranslator from '../../composables/cssClassTranslator';
import { cellInjectFromHeader, type TCellProps } from './datatableTypes';

// props
const props = withDefaults(defineProps<TCellProps>(), {
    cell: () => ({ value: '' }),
    css: '',
    binds: () => ({}),
    events: () => ({ onCellClick: noop, onCellAuxclick: noop, onCellDblclick: noop })
});

// emits
const emits = defineEmits<{
    cellClick: [e: MouseEvent];
    cellAuxclick: [e: MouseEvent];
    cellDblclick: [e: MouseEvent];
}>();

// actions
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

// data
const styleBind = computed(() =>
    props.colSpan && props.colSpan > 0 ? { 'grid-column-start': `span ${props.colSpan}` } : {}
);
const { css: cssRef, ...modifyCss } = useCssClassTranslator(props.css);
const identifier = props.identifier ?? v6();

// injections
const addCell2Row = cellInjectFromHeader(inject);

// watchers
watch(
    () => props.css,
    n => modifyCss.setCss(n)
);

// life cicle
onMounted(() => {
    addCell2Row({ ...props, identifier } as TCellProps);
});
</script>
<template>
    <span v-bind="events" class="w-full" :class="cssRef" :style="styleBind">
        <slot>
            <template v-if="typeof value === 'string' || typeof value === 'number'">
                {{ value }}
            </template>
            <template v-else>
                <component v-bind="binds" :is="value?.node" />
            </template>
            <ChevronUpDownIcon class="size-4 inline-block ml-1" />
        </slot>
    </span>
</template>
