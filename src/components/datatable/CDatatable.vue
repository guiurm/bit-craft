<script setup lang="ts">
import { v6 } from 'uuid';
import { computed, provide, ref, watch, type Ref } from 'vue';
import useCssClassTranslator from '../../composables/cssClassTranslator';
import CDatatableHeader from './CDatatableHeader.vue';
import CDatatableRow from './CDatatableRow.vue';
import {
    tableProvide,
    tableProvideHeader,
    type TCellProps,
    type THeaderProps,
    type TRowProps,
    type TTableProps
} from './datatableTypes';

// props
const props = withDefaults(defineProps<TTableProps>(), {
    head: () => ({}),
    rows: () => [],
    css: ''
});

// actions
const fillRowIdIfEmpty = (r: TRowProps[]): TRowProps[] => {
    return r.map(r => ({ identifier: v6(), ...r }));
};

const col = ref(null as null | number);
const reverse = ref(false);
const manageHeaderCellClick = (column: number, cellId: string) => {
    console.log(column, cellId);
    if (col.value === column) {
        //col.value = null;
        reverse.value = !reverse.value;
        return;
    }
    col.value = column;
};

const order = computed(() => {
    if (col.value === null) return refRows.value;
    else
        return refRows.value.slice().sort((a, b) => {
            // Compara los valores de las celdas en el índice 2
            const cellA = (a.cells as TCellProps[])[col.value as number] as Required<TCellProps>;

            const cellB = (b.cells as TCellProps[])[col.value as number] as Required<TCellProps>;
            console.log(cellA);
            console.log(cellB);
            const cellAV =
                typeof cellA.value === 'string' || typeof cellA.value === 'number'
                    ? cellA.value.toString()
                    : cellA.value.filterValue ?? '';
            const cellBV =
                typeof cellB.value === 'string' || typeof cellB.value === 'number'
                    ? cellB.value.toString()
                    : cellB.value.filterValue ?? '';

            // Ordena en orden ascendente (puedes cambiar a descendente si necesitas)

            return reverse.value ? cellBV.localeCompare(cellAV) : cellAV.localeCompare(cellBV);
        });
});

// data
const refRows = ref(fillRowIdIfEmpty(props.rows)) as Ref<TRowProps[]>;
const refHeader = ref(props.head) as Ref<THeaderProps>;
const { css: cssRef, ...modifyCss } = useCssClassTranslator(props.css);

// providers
tableProvide(provide, (row: TRowProps) => {
    if (undefined === refRows.value.find(cR => cR.identifier === row.identifier)) {
        refRows.value.push(row);
    }
});
tableProvideHeader(provide, row => {
    refHeader.value = row;
});

// watchers
watch(
    () => props.rows,
    () => {
        refRows.value.length = 0;
        refRows.value.push(...fillRowIdIfEmpty(props.rows));
    },
    { deep: true }
);
watch(
    () => props.css,
    n => modifyCss.setCss(n)
);
</script>
<template>
    <div class="bc-datatable-container" :class="cssRef">
        <slot name="header">
            <c-datatable-header
                @cell-click="manageHeaderCellClick"
                v-bind="{ ...head }"
                :cols="cols"
                :custom-template-column="customTemplateColumn" />
        </slot>

        <slot name="body">
            <c-datatable-row
                v-for="(cRow, i) in order"
                :key="i"
                v-bind="cRow"
                v-model:cells="cRow.cells"
                :cols="cRow.cols ?? cols"
                :custom-template-column="customTemplateColumn" />
        </slot>
    </div>
    {{ order }}
</template>
