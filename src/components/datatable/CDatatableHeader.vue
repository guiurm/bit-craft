<script setup lang="ts">
import { noop } from '@/globals';
import { computed, watch } from 'vue';
import useCssClassTranslator from '../cssClassTranslator';
import CDatatableCell from './CDatatableCell.vue';
import type { THeaderProps } from './datatableTypes';

const props = withDefaults(defineProps<THeaderProps>(), {
    //row: () => ({ cells: [] }),
    cells: () => [],
    class: '',
    events: () => ({ onHeaderClick: noop, onHeaderAuxclick: noop, onHeaderDblclick: noop })
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
        if (props.events.onHeaderClick) props.events.onHeaderClick(e);
        emits('click', e);
    },
    onAuxclick: (e: MouseEvent) => {
        if (props.events.onHeaderAuxclick) props.events.onHeaderAuxclick(e);
        emits('auxclick', e);
    },
    onDblclick: (e: MouseEvent) => {
        if (props.events.onHeaderDblclick) props.events.onHeaderDblclick(e);
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
