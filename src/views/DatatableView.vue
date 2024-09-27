<script lang="ts" setup>
import CDatatable from '@/components/datatable/CDatatable.vue';
import CDatatableCell from '@/components/datatable/CDatatableCell.vue';
import CDatatableHeader from '@/components/datatable/CDatatableHeader.vue';
import CDatatableRow from '@/components/datatable/CDatatableRow.vue';
import type { THeaderProps, TRowProps } from '@/components/datatable/datatableTypes';
import MainLayout from '@/layouts/MainLayout.vue';
import { ref, type Ref } from 'vue';

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

const row = ref([
    {
        cols: 2,
        events: {
            onRowClick: () => {
                console.log('row click');
            }
        },
        cells: [
            {
                value: 'cell body',
                events: {
                    onCellClick: _e => {
                        // _e.stopPropagation();
                        console.log('cell body');
                    }
                }
            }
        ]
    }
]) as Ref<TRowProps[]>;
</script>
<template>
    <main-layout>
        <!--
        -->
        <c-datatable :cols="2">
            <template #header>
                <c-datatable-header :cols="2">
                    <c-datatable-cell>header</c-datatable-cell>
                </c-datatable-header>
            </template>
            <template #body>
                <c-datatable-row :cols="2">
                    <c-datatable-cell>cell</c-datatable-cell>
                </c-datatable-row>
            </template>
        </c-datatable>
        <c-datatable :cols="2" :head="head" :rows="row" />
    </main-layout>
</template>
