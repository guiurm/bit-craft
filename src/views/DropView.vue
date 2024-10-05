<script lang="ts" setup>
import DragableSortable from '@/components/dragable/DragableSortable.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { h, ref } from 'vue';

//items
const items = ref([1, 2, 3, 4, 5, () => h('div', 'some text'), 6, 7, 8, 9]);
const seleted = ref(-1);
</script>

<template>
    <main-layout>
        <dragable-sortable :data="items" />
    </main-layout>
</template>
