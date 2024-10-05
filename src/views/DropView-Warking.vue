<script lang="ts" setup>
import { useDragAndDropItem } from '@/composables/drag&drop';
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';

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

const itemDrag = useDragAndDropItem({ dragend: dragEnd }, true);
console.log(itemDrag);

const containerDrag = useDragAndDropItem({}, false);
</script>

<template>
    <main-layout>
        {{ seleted }}<br />
        <pre>
            {{ items }}
        </pre>
        <div class="container">
            <div v-bind="containerDrag" class="flex flex-col drag px-10 text-white">
                <span
                    v-for="item in items"
                    :key="item"
                    v-bind="{
                        ...itemDrag,
                        onDragenter: e => dragOverItem(e, item),
                        onDragstart: e => dragStart(e, item)
                    }"
                    class="drag-item bg-slate-500 px-3 py-2 mb-2">
                    {{ item }}
                </span>
            </div>
        </div>
    </main-layout>
</template>
