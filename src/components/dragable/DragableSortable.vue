<script lang="ts" setup>
import { useDragAndDropItem } from '@/composables/dragAndDrop';
import DragAndDropItem from '@/views/DragAndDropItem.vue';
import { type Component, ref, type VNode } from 'vue';

type V = number | string | Component | (() => VNode);

//items
const props = defineProps<{ data: V[] }>();
const items = ref(props.data);
const seleted = ref(-1 as V);
const dragStart = (eve: DragEvent, item: V) => {
    if (!eve.dataTransfer) return;
    eve.dataTransfer.dropEffect = 'move';
    eve.dataTransfer.effectAllowed = 'move';
    //console.log('qqq');
    seleted.value = item;
};
const dragEnd = () => {
    seleted.value = -1;
};
const dragOverItem = (eve: DragEvent, item: V) => {
    eve.preventDefault();
    if (seleted.value === item) return;

    const oldIndex = items.value.indexOf(seleted.value);
    const newIndex = items.value.indexOf(item);

    items.value.splice(oldIndex, 1);
    items.value.splice(newIndex, 0, seleted.value);
};
</script>

<template>
    {{ seleted }}
    <br />
    <pre>
            {{ items }}
        </pre
    >
    <div class="container">
        <div v-bind="useDragAndDropItem()" class="drag-container">
            <drag-and-drop-item
                v-for="(item, index) in items"
                :key="index"
                :dragBinds="{
                    ...useDragAndDropItem(
                        {
                            dragend: dragEnd,
                            dragenter: e => dragOverItem(e, item),
                            dragstart: e => dragStart(e, item)
                        },
                        true
                    )
                }"
                :selected="item === seleted">
                <template v-if="typeof item === 'string' || typeof item === 'number'">
                    {{ item }}
                </template>
                <template v-else>
                    <component :is="item" />
                </template>
            </drag-and-drop-item>
        </div>
    </div>
</template>
