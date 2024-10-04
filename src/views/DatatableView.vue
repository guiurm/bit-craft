<script lang="ts" setup>
import CDatatable from '@/components/datatable/CDatatable.vue';
import CDatatableCell from '@/components/datatable/CDatatableCell.vue';
import CDatatableCellHeader from '@/components/datatable/CDatatableCellHeader.vue';
import CDatatableHeader from '@/components/datatable/CDatatableHeader.vue';
import CDatatableRow from '@/components/datatable/CDatatableRow.vue';
import { buildDatatableCell, buildDatatableRow, buildDatatableRows } from '@/components/datatable/datatableBuilders';
import type { THeaderProps } from '@/components/datatable/datatableTypes';
import MainLayout from '@/layouts/MainLayout.vue';
import { nextTick, ref, type Ref } from 'vue';

const head = ref({
    cols: 2,
    onHeaderClick: () => console.log('header'),
    cells: [
        {
            value: 'cell head',
            events: {
                onCellClick: _e => {
                    // _e.stopPropagation();
                    console.log('header cell');
                }
            }
        }
    ]
}) as Ref<THeaderProps>;

const row = ref(
    buildDatatableRows([
        buildDatatableRow({
            cols: 3,
            cells: [
                buildDatatableCell({ value: 'cell_1', events: { onCellClick: () => console.log('cell_1') } }),
                buildDatatableCell({ value: 'cell_2', events: { onCellClick: () => console.log('cell_2') } }),
                buildDatatableCell({ value: 'cell_3', events: { onCellClick: () => console.log('cell_3') } })
            ],
            events: {
                onRowClick: () => {
                    console.log('row click');
                }
            }
        }),
        buildDatatableRow({
            //cols: 2,
            cells: [
                buildDatatableCell({ value: 'cell_4' }),
                buildDatatableCell({ value: 'cell_5' }),
                buildDatatableCell({ value: 'cell_6' })
            ],
            events: {
                onRowClick: () => {
                    console.log('row click');
                }
            }
        })
    ])
);

setTimeout(() => {
    row.value.push({ cols: 2, cells: [{ value: 'new value', events: { onCellClick: () => {} } }] });
    row.value[0].css = 'c';
    row.value[0].cells?.push({ value: 'new cell' });
    nextTick();
}, 3000);
</script>
<template>
    <main-layout>
        <c-datatable :cols="2">
            <template #header>
                <c-datatable-header :cols="3">
                    <c-datatable-cell-header>header</c-datatable-cell-header>
                </c-datatable-header>
            </template>
            <template #body>
                <c-datatable-row :cols="3">
                    <c-datatable-cell identifier="test">cell 1</c-datatable-cell>
                    <c-datatable-cell>cell 2</c-datatable-cell>
                    <c-datatable-cell>cell 3</c-datatable-cell>
                </c-datatable-row>

                <c-datatable-row :cols="3">
                    <c-datatable-cell>cell 4</c-datatable-cell>
                    <c-datatable-cell>cell 5</c-datatable-cell>
                    <c-datatable-cell>cell 6</c-datatable-cell>
                </c-datatable-row>
            </template>
        </c-datatable>
        <!--
        -->
        <div class="my-4 bg-slate-300 py-1"></div>

        <c-datatable :cols="2" :head="head" :rows="row" />
        <!--
        -->
    </main-layout>
</template>
