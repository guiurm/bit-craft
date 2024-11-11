<script lang="ts" setup>
import DraggableSortableContainer, { type TItem } from '@/components/dragable/DraggableSortableContainer.vue';
import DraggableSortableOld from '@/components/dragable/DraggableSortableOld.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { h, ref } from 'vue';

//items
const items = ref([1, 2, 3, 4, 5, () => h('div', 'some text'), 6, 7, 8, 9]);
const seleted = ref(-1);

const items2 = ref<TItem[]>([
    { dragging: false, id: 1, node: 'item1' },
    { dragging: false, id: 2, node: 'item2' },
    { dragging: false, id: 3, node: () => h('div', {}, 'item 3 from h') }
]);
</script>

<template>
    <main-layout>
        <draggable-sortable-old :data="items" />
        <draggable-sortable-container v-model="items2" />
    </main-layout>
</template>
