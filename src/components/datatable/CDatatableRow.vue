<script setup lang="ts">
import { noop } from '@/globals';
import { v6 } from 'uuid';
import { computed, inject, onMounted, provide, ref, watch, type Ref } from 'vue';
import useCssClassTranslator from '../cssClassTranslator';
import CDatatableCell from './CDatatableCell.vue';
import { rowInjectFromTable, rowProvide, type TCellProps, type TRowProps } from './datatableTypes';

// props
const props = withDefaults(defineProps<TRowProps>(), {
    cells: () => [],
    css: '',
    events: () => ({ onRowClick: noop, onRowAuxclick: noop, onRowDblclick: noop })
});

// emits
const emits = defineEmits<{
    rowClick: [e: MouseEvent];
    rowAuxclick: [e: MouseEvent];
    rowDblclick: [e: MouseEvent];
    'update:cells': [cells: TCellProps[]];
}>();

// actions
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
const parse = (cells: TCellProps[]): TCellProps[] => {
    return cells.map(c => ({ identifier: v6(), ...c }));
};

// data
const identifier = props.identifier ?? v6();
const cellsRef = ref(parse(props.cells)) as Ref<TCellProps[]>;
const { css: cssRef, ...modifyCss } = useCssClassTranslator(props.css);
const colsComp = computed(() => `repeat(${props.cols}, minmax(0, 1fr))`);

// providers
rowProvide(provide, (cell: TCellProps) => {
    if (undefined === cellsRef.value.find(c => c.identifier === cell.identifier)) {
        cellsRef.value = [...cellsRef.value, cell];
        emits('update:cells', cellsRef.value);
    }
});

// injections
const addRow2Table = rowInjectFromTable(inject);

// watchers
watch(
    () => props.css,
    n => modifyCss.setCss(n)
);
watch(
    () => props.cells,
    () => {
        cellsRef.value.length = 0;
        cellsRef.value.push(...parse(props.cells));
    },
    { deep: true }
);

// life cicle
onMounted(() => {
    addRow2Table({ ...props, identifier, cells: cellsRef.value });
});
</script>
<template>
    <div
        v-bind="events"
        class="w-full grid"
        :class="cssRef"
        :style="{ 'grid-template-columns': customTemplateColumn ?? colsComp }">
        <slot>
            <c-datatable-cell v-for="(cell, i) in cellsRef" :key="`r-${i}`" v-bind="cell" />
        </slot>
    </div>
</template>
