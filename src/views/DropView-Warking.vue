<script lang="ts" setup>
import { useDragAndDropItem } from '@/composables/dragAndDropop';
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
import DropC from './DropC.vue';

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
            <div v-bind="useDragAndDropItem()" class="flex flex-col drag px-10 text-white">
                <drop-c
                    v-for="item in items"
                    :key="item"
                    :dragBinds="{
                        ...useDragAndDropItem(
                            {
                                dragend: dragEnd,
                                dragenter: e => dragOverItem(e, item),
                                dragstart: e => dragStart(e, item)
                            },
                            true
                        )
                    }">
                    {{ item }}
                </drop-c>
            </div>
        </div>
    </main-layout>
</template>
