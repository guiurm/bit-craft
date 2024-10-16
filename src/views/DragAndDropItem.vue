<script lang="ts" setup>
import type { TCss } from '@/composables/cssClassTranslator';
import type { useDragAndDropItem } from '@/composables/dragAndDrop';
import { computed } from 'vue';

type V = ReturnType<typeof useDragAndDropItem>;
type P = { dragBinds: V; selected?: boolean; css?: TCss };

const props = withDefaults(defineProps<P>(), { selected: false });
const isSelected = computed(() => (props.selected ? true : undefined));
</script>
<template>
    <span v-bind="dragBinds" class="drag-item" :data-hs-drag-active="isSelected">
        <slot />
    </span>
</template>
