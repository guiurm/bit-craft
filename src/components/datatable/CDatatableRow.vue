<script setup lang="ts">
import { noop } from '@/globals';
import { computed, watch } from 'vue';
import useCssClassTranslator from '../cssClassTranslator';
import CDatatableCell from './CDatatableCell.vue';
import type { TRowProps } from './datatableTypes';

const props = withDefaults(defineProps<TRowProps>(), {
    cells: () => [],
    class: '',
    events: () => ({ onRowClick: noop, onRowAuxclick: noop, onRowDblclick: noop })
});

const colsComp = computed(() => `repeat(${props.cols}, minmax(0, 1fr))`);
const { css, ...modifyCss } = useCssClassTranslator(props.class);
watch(
    () => props.class,
    n => modifyCss.setCss(n)
);

const emits = defineEmits<{ rowClick: [e: MouseEvent]; rowAuxclick: [e: MouseEvent]; rowDblclick: [e: MouseEvent] }>();
const events = {
    onClick: (e: MouseEvent) => {
        if (props.events.onRowClick) props.events.onRowClick(e);
        emits('rowClick', e);
    },
    onAuxclick: (e: MouseEvent) => {
        if (props.events.onRowAuxclick) props.events.onRowAuxclick(e);
        emits('rowAuxclick', e);
    },
    onDblclick: (e: MouseEvent) => {
        if (props.events.onRowDblclick) props.events.onRowDblclick(e);
        emits('rowDblclick', e);
    }
};
</script>
<template>
    <div
        v-bind="events"
        class="w-full grid"
        :class="css"
        :style="{ 'grid-template-columns': customTemplateColumn ?? colsComp }">
        <slot>
            <c-datatable-cell v-for="(cell, i) in cells" :key="`rh-${i}`" v-bind="cell" />
        </slot>
    </div>
</template>
