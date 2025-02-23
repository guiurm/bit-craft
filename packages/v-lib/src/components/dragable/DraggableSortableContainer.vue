<script setup lang="ts">
import type { TRenderComponent } from "@/@core/types";
import DI, { type TDragStartEvent } from "@/components/dragable/DraggableSortableItem.vue";
import { DEventManager } from "@guiurm/doom-kit";
import { h, onMounted, ref, type VNode, watch } from "vue";

export type TItem = {
    id: number;
    node: string | TRenderComponent;
    dragging: boolean;
};

const props = withDefaults(
    defineProps<{
        modelValue?: TItem[];
        targetContainer?: boolean;
    }>(),
    {
        modelValue: () => [],
        targetContainer: false,
    }
);
watch(
    () => props.modelValue,
    (n) => {
        itemsRef.value.length = 0;
        itemsRef.value.push(...n);
    }
);
const emits = defineEmits<{ "update:modelValue": [items: TItem[]] }>();

const itemsRef = ref<TItem[]>(props.modelValue);
const dragContainer = ref<HTMLDivElement>();
const style = ref({
    height: "0px",
    width: "0px",
    top: "0px",
    left: "0px",
});
const domManager = new DEventManager(document.body);
let offsetX = 0;
let offsetY = 0;

const draggingItemClone = ref<VNode | null>(null);

const onDragOver = (e: MouseEvent) => {
    const newLeft = e.clientX - offsetX;
    const newTop = e.clientY - offsetY;
    style.value.left = `${newLeft}px`;
    style.value.top = `${newTop}px`;
};

const selectedItemIndex = ref<TItem | null>(null);
const manageDragEnter = (item: TItem, eve: DragEvent) => {
    eve.preventDefault();
    if (!selectedItemIndex.value || selectedItemIndex.value === item) return;

    const oldIndex = itemsRef.value.indexOf(selectedItemIndex.value);
    const newIndex = itemsRef.value.indexOf(item);

    itemsRef.value.splice(oldIndex, 1);
    itemsRef.value.splice(newIndex, 0, selectedItemIndex.value);
    emits("update:modelValue", itemsRef.value);
};
const manageDragStart = ({ sizing, target, domEvent, item }: TDragStartEvent) => {
    style.value = sizing.style;
    const clone = target.cloneNode(true) as HTMLElement;
    offsetX = domEvent.clientX - target.offsetLeft;
    offsetY = domEvent.clientY - target.offsetTop;

    draggingItemClone.value = h("div", {
        innerHTML: clone.outerHTML,
        class: "absolute z-50 bottom-0 right-0",
    });

    selectedItemIndex.value = item;

    domManager.on("dragover", onDragOver);
};
const manageDragEnd = () => {
    draggingItemClone.value = null;
    domManager.remove("dragover", onDragOver);
};

const updateItem = (item: TItem, newValue: TItem) => {
    item = { ...newValue };
};

onMounted(() => {
    if (props.targetContainer && draggingItemClone.value) domManager.migrate(dragContainer.value as HTMLElement);
});
</script>

<template>
    <div ref="dragContainer" class="hs-draggable-sortable-container">
        <template v-for="item in itemsRef" :key="item.id">
            <d-i
                :model-value="item"
                @update:model-value="(n: TItem) => updateItem(item, n)"
                @dragend="manageDragEnd"
                @dragstart="manageDragStart"
                @dragenter="manageDragEnter"
            />
        </template>
        <template v-if="draggingItemClone">
            <component v-bind="{ style }" :is="() => draggingItemClone" />
        </template>
    </div>
</template>
