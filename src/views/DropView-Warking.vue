<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';

const drag = (eve: DragEvent) => {};
const drop = (eve: DragEvent) => {};

const dragLeave = (eve: DragEvent) => {};
const dragExit = (eve: DragEvent) => {};
const dragOverContainer = (eve: DragEvent) => {
    eve.preventDefault();
    //console.log(eve);
};

const dragEnter = (eve: DragEvent) => {
    eve.preventDefault();
};

//items
const items = ref([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const seleted = ref(-1);
const dragStart = (eve: DragEvent, item: (typeof items)['value'][number]) => {
    if (!eve.dataTransfer) return;
    eve.dataTransfer.dropEffect = 'move';
    eve.dataTransfer.effectAllowed = 'move';
    //console.log('qqq');
    seleted.value = item;
};
const dragEnd = () => {
    seleted.value = -1;
};
const dragOverItem = (eve: DragEvent, item: (typeof items)['value'][number]) => {
    eve.preventDefault();
    if (seleted.value === item) return;

    const oldIndex = items.value.indexOf(seleted.value);
    const newIndex = items.value.indexOf(item);

    items.value.splice(oldIndex, 1);
    items.value.splice(newIndex, 0, seleted.value);
};
</script>

<template>
    <main-layout>
        {{ seleted }}<br />
        <pre>
            {{ items }}
        </pre>
        <div class="container">
            <div
                @drop="drop"
                @dragexit="dragExit"
                @dragleave="dragLeave"
                @dragover="dragOverContainer"
                class="flex flex-col drag px-10 bg-slate-500 text-white">
                <span
                    v-for="item in items"
                    :key="item"
                    @drag="drag"
                    @dragend="dragEnd"
                    @dragenter="e => dragOverItem(e, item)"
                    @dragstart="e => dragStart(e, item)"
                    @dragover="() => {}"
                    :draggable="true"
                    class="drag-item bg-custom-orange-dark px-3 py-2 mb-2">
                    {{ item }}
                </span>
            </div>
        </div>
    </main-layout>
</template>
