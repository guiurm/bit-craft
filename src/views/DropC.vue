<script lang="ts" setup>
import type { useDragAndDropItem } from '@/composables/drag&drop';

type V = ReturnType<typeof useDragAndDropItem>;

defineProps<{ dragBinds: V }>();
</script>
<template>
    <span v-bind="dragBinds" class="drag-item bg-slate-500 px-3 py-2 mb-2">
        <slot />
    </span>
</template>
