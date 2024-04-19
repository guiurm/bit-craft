<script lang="ts" setup>
import { ref, watch, type Component, type Ref } from 'vue';

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
const props = withDefaults(defineProps<{ list?: Component[] }>(), { list: () => [] });
const data: Ref<Component[]> = ref(props.list);
watch(
    () => props.list,
    n => {
        data.value.length = 0;
        console.log(n);

        data.value.push(...n);
    }
);
const seleted: Component = ref();
const dragStart = (eve: DragEvent, item: Component) => {
    if (!eve.dataTransfer) return;
    eve.dataTransfer.dropEffect = 'move';
    eve.dataTransfer.effectAllowed = 'move';
    //console.log('qqq');
    seleted.value = item;
};
const dragEnd = () => {
    seleted.value = -1;
};
const dragOverItem = (eve: DragEvent, item: Component) => {
    eve.preventDefault();
    if (seleted.value === item) return;

    const oldIndex = data.value.indexOf(seleted.value);
    const newIndex = data.value.indexOf(item);

    data.value.splice(oldIndex, 1);
    data.value.splice(newIndex, 0, seleted.value);
};
</script>

<template>
    {{ data.length }}
    <div class="container">
        <div
            @drop="drop"
            @dragexit="dragExit"
            @dragleave="dragLeave"
            @dragover="dragOverContainer"
            class="flex flex-col drag px-10 bg-slate-500 text-white">
            <span
                v-for="(cComponent, index) in data"
                :key="index"
                @drag="drag"
                @dragend="dragEnd"
                @dragenter="e => dragOverItem(e, cComponent)"
                @dragstart="e => dragStart(e, cComponent)"
                @dragover="() => {}"
                :draggable="true"
                class="drag-item bg-custom-orange-dark px-3 py-2 mb-2">
                <component :is="cComponent"></component>
            </span>
        </div>
    </div>
</template>
