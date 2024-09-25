<script setup lang="ts">
import { noop } from '@/globals';
import { computed, watch } from 'vue';
import useCssClassTranslator from '../cssClassTranslator';
import CDatatableCell from './CDatatableCell.vue';
import type { TRowProps } from './datatableTypes';

const props = withDefaults(defineProps<TRowProps>(), {
    cells: () => [],
    class: '',
    onRowClick: noop,
    onRowAuxclick: noop,
    onRowDblclick: noop
});

const colsComp = computed(() => `repeat(${props.cols}, minmax(0, 1fr))`);
const { css, ...modifyCss } = useCssClassTranslator(props.class);
watch(
    () => props.class,
    n => modifyCss.setCss(n)
);

const emits = defineEmits<{ click: [e: MouseEvent]; auxclick: [e: MouseEvent]; dblclick: [e: MouseEvent] }>();
const events = {
    onClick: (e: MouseEvent) => {
        props.onRowClick(e);
        emits('click', e);
    },
    onAuxclick: (e: MouseEvent) => {
        props.onRowAuxclick(e);
        emits('auxclick', e);
    },
    onDblclick: (e: MouseEvent) => {
        props.onRowDblclick(e);
        emits('dblclick', e);
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
