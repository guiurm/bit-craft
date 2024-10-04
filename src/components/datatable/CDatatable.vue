<script setup lang="ts">
import { v6 } from 'uuid';
import { provide, ref, watch, type Ref } from 'vue';
import useCssClassTranslator from '../cssClassTranslator';
import CDatatableHeader from './CDatatableHeader.vue';
import CDatatableRow from './CDatatableRow.vue';
import {
    tableProvide,
    tableProvideHeader,
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
const parse = (r: TRowProps[]): TRowProps[] => {
    return r.map(r => ({ identifier: v6(), ...r }));
};

// data
const refRows = ref(parse(props.rows)) as Ref<TRowProps[]>;
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
        refRows.value.push(...parse(props.rows));
    },
    { deep: true }
);
watch(
    () => props.css,
    n => modifyCss.setCss(n)
);
</script>
<template>
    <div class="w-full h-full" :class="cssRef">
        <slot name="header">
            <c-datatable-header v-bind="{ ...head }" :cols="cols" :custom-template-column="customTemplateColumn" />
        </slot>

        <slot name="body">
            <c-datatable-row
                v-for="(cRow, i) in refRows"
                :key="i"
                v-bind="cRow"
                v-model:cells="cRow.cells"
                :cols="cRow.cols ?? cols"
                :custom-template-column="customTemplateColumn" />
        </slot>
    </div>
</template>
