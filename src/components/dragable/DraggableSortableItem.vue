<script setup lang="ts">
import { getDOMItemSizing, type TDOMSizing } from '@/@core/dom-manager/DOMUtils';
import type { TItem } from '@/components/dragable/DraggableSortableContainer.vue';
import DraggingItem from '@/components/dragable/DraggableSortableItemShadow';
import { useDragAndDropItem } from '@/composables/dragAndDrop';
import { computed, ref } from 'vue';

export type TDragStartEvent = { sizing: TDOMSizing; domEvent: DragEvent; target: HTMLDivElement; item: TItem };

defineOptions({ inheritAttrs: false });
const props = defineProps<{ modelValue: TItem /*width: string; height: string */ }>();
const emits = defineEmits<{
    dragend: [item: TItem, event: MouseEvent];
    dragenter: [item: TItem, domeEvent: DragEvent];
    dragstart: [event: TDragStartEvent];
    'update:model-value': [item: TItem];
}>();

const sizing = ref<TDOMSizing>(getDOMItemSizing(document.createElement('div')));

const itemCom = computed({
    get() {
        return props.modelValue;
    },
    set(n: TItem) {
        emits('update:model-value', n);
    }
});

//

const dragEvents = useDragAndDropItem({
    dragend: e => {
        itemCom.value.dragging = false;
        itemCom.value = { ...itemCom.value };
        emits('dragend', itemCom.value, e);
    },
    dragenter: e => {
        emits('dragenter', itemCom.value, e);
    },
    dragstart: e => {
        const target = (e.target ?? null) as HTMLDivElement | null;
        if (!target) return;

        sizing.value = getDOMItemSizing(target);
        itemCom.value.dragging = true;

        emits('dragstart', {
            sizing: sizing.value,
            domEvent: e,
            target,
            item: itemCom.value
        });

        itemCom.value = { ...itemCom.value };
    }
});
</script>

<template>
    <div class="w-full">
        <div
            v-bind="dragEvents"
            class="w-full bg-primary-500 rounded-sm"
            :class="{ hidden: itemCom.dragging }"
            :draggable="true">
            <template v-if="typeof itemCom.node === 'string'">
                {{ itemCom.node }}
            </template>
            <template v-else>
                <component :is="itemCom.node" />
            </template>
        </div>
        <dragging-item v-if="itemCom.dragging" :height="sizing.style.height" :width="sizing.style.width" />
    </div>
</template>
