<script lang="ts" setup>
import type { TCollapseItem } from "@/components/accordion/AccordionComponent.vue";
import type { TCss } from "@/composables/cssClassTranslator";
import useCssClassTranslator from "@/composables/cssClassTranslator";
import { noop } from "@guiurm/utility-types";
import { v6 } from "uuid";
import { computed, inject, onMounted, ref, watch } from "vue";

type TProps = {
    // true to hide
    modelValue?: boolean;
    header?: string;
    class?: TCss;
};

// definitions
const props = withDefaults(defineProps<TProps>(), { modelValue: false, class: "" });
defineSlots<{ header(): void; default(): void }>();
const emits = defineEmits<{ "update:model-value": [status: boolean]; open: []; close: [] }>();

// values
const collapseInfo = ref({ isOpen: props.modelValue, uuid: v6() });
const { css, addCss } = useCssClassTranslator(props.class);
addCss({ "hs-collapse--open": computed(() => collapseInfo.value.isOpen) });

const registerCollapse = (inject("registerCollapse") ?? noop) as (item: TCollapseItem) => void;
const manageToggleCollapse = (inject("manageToggleCollapse") ?? noop) as (item: TCollapseItem) => void;

// watchers
watch(
    () => props.modelValue,
    (n) => {
        collapseInfo.value.isOpen = n;
        if (n) emits("open");
        else emits("close");
    }
);

watch(collapseInfo, (newVal) => (collapseInfo.value = newVal), { deep: true });

// actions
const toggle = () => {
    collapseInfo.value.isOpen = !collapseInfo.value.isOpen;
    emits("update:model-value", collapseInfo.value.isOpen);
    if (collapseInfo.value.isOpen) emits("open");
    else emits("close");
    manageToggleCollapse(collapseInfo);
};

// life-circle
onMounted(() => {
    registerCollapse(collapseInfo);
});
</script>
<template>
    <div class="hs-collapse" :class="css">
        <div class="hs-collapse-header" @click="toggle">
            <slot name="header">
                {{ header }}
            </slot>
        </div>

        <div class="hs-collapse-body" :class="{}" v-show="collapseInfo.isOpen">
            <slot />
        </div>
    </div>
</template>
