<script lang="ts" setup>
import { inject, onMounted, ref, watch } from 'vue';
import { v6 } from 'uuid';
import type { TCollapseItem } from '@/components/accordion/AccordionComponent.vue';
import { noop } from "@/globals";

type TProps = {
    // true to hide
    modelValue?: boolean;
    header?: string;
};

// definitions
const props = withDefaults(defineProps<TProps>(), { modelValue: false });
defineSlots<{ header(): void; default(): void }>();
const emits = defineEmits<{ 'update:model-value': [status: boolean]; open: []; close: [] }>();

// values
const collapseInfo = ref({ isOpen: props.modelValue, uuid: v6() });

const registerCollapse = (inject('registerCollapse')??noop) as (item: TCollapseItem) => void;
const manageToggleCollapse = (inject('manageToggleCollapse')??noop) as (item: TCollapseItem) => void;

// watchers
watch(
    () => props.modelValue,
    n => {
        collapseInfo.value.isOpen = n;
        if (n) emits('open');
        else emits('close');
    }
);

watch(collapseInfo, newVal => (collapseInfo.value = newVal), { deep: true });

// actions
const toggle = () => {
    collapseInfo.value.isOpen = !collapseInfo.value.isOpen;
    emits('update:model-value', collapseInfo.value.isOpen);
    if (collapseInfo.value.isOpen) emits('open');
    else emits('close');
    manageToggleCollapse(collapseInfo);
};

// life-circle
onMounted(() => {
    registerCollapse(collapseInfo);
});
</script>
<template>
    <div class="hs-collapse">
        {{ collapseInfo }}
        <div class="hs-collapse-header bg-primary-500" @click="toggle">
            <slot name="header">
                {{ header }}
            </slot>
        </div>

        <div v-show="collapseInfo.isOpen">
            <slot />
        </div>
    </div>
</template>
