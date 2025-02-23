<script setup lang="ts">
import { provide, type Ref, ref } from "vue";

export type TCollapseItem = Ref<{ uuid: string; isOpen: boolean }>;
const props = withDefaults(defineProps<{ unique?: boolean }>(), { unique: false });
const items = ref([]) as Ref<TCollapseItem[]>;

provide("registerCollapse", (item: TCollapseItem) => {
    items.value.push(item);
});
provide("manageToggleCollapse", (item: TCollapseItem) => {
    let list = [] as TCollapseItem[];
    if (props.unique) list = items.value.filter((i) => i.value.isOpen && item.value.uuid !== i.value.uuid);
    if (list.length > 0) list.forEach((i) => (i.value.isOpen = false));
});
</script>

<template>
    <div class="hs-accordion">
        <slot />
    </div>
</template>
