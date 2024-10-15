<script setup lang="ts">
import { computed, ref } from 'vue';
import ToastItem from './ToastItem.vue';

const positions = ['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'] as const;
const positionIndex = ref(0);
const position = computed(() => positions[positionIndex.value]);

let a = setInterval(() => {
    if (positionIndex.value === positions.length - 1) clearInterval(a);
    positionIndex.value = positionIndex.value === positions.length - 1 ? 0 : positionIndex.value + 1;
}, 2000);
</script>
<template>
    <div class="relative">
        {{ position }}
        <toast-item target="document" :position="position" />
        <toast-item target="document" :position="position" />
    </div>
</template>
