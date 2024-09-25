<script setup lang="ts">
import { watch } from 'vue';
import useCssClassTranslator from '../cssClassTranslator';
import CDatatableHeader from './CDatatableHeader.vue';
import CDatatableRow from './CDatatableRow.vue';
import type { TTableProps } from './datatableTypes';

const props = withDefaults(defineProps<TTableProps>(), {
    head: () => ({}),
    rows: () => [],
    class: ''
});

/*const checkSize = () => {
    if (props.cols !== props.head.length)
        throw new TypeError(`Invalid size of head related to columns, head:${props.head.length} cols:${props.cols}`);
};*/
// checkSize();

const { css, ...modifyCss } = useCssClassTranslator(props.class);
watch(
    () => props.class,
    n => modifyCss.setCss(n)
);
</script>
<template>
    <div class="w-full h-full" :class="css">
        <slot name="header">
            <c-datatable-header v-bind="{ ...head }" :cols="cols" :custom-template-column="customTemplateColumn" />
        </slot>

        <slot name="body">
            <c-datatable-row
                v-for="(cRow, i) in rows"
                :key="i"
                v-bind="{ ...cRow }"
                :cols="cols"
                :custom-template-column="customTemplateColumn" />
        </slot>
    </div>
</template>
