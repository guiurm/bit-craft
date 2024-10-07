<script lang="ts" setup>
import type { TNoppNoArgs } from '@/globals';
import { onMounted, provide } from 'vue';
import { useCarousel } from './carouselComposable';
import { CARROUSEL_ACTIONS, type TCarrouselProvideCard } from './carouselConstants';

defineSlots<{
    default(): void;
    prev(props: { prev: TNoppNoArgs }): void;
    next(props: { next: TNoppNoArgs }): void;
}>();
const props = withDefaults(defineProps<{ infinite?: boolean }>(), { infinite: true });

const { currentIndex, distpachListeners, height, itemsList, next, prev } = useCarousel({ infinite: props.infinite });

provide(CARROUSEL_ACTIONS, {
    addCard: data => {
        itemsList.value.push(data);
    },
    setContainerHeight: v => {
        height.value.height = `${v}px`;
    }
} as TCarrouselProvideCard);

onMounted(() => {
    if (itemsList.value.length === 0 || itemsList.value.length === 1) return;
    distpachListeners(0, itemsList.value.length - 1, 1);
});
</script>

<template>
    <div class="flex justify-end">
        <span class="text-primary-500">
            <span class="mr-1">{{ currentIndex + 1 }}</span>
            /
            <span class="ml-1">{{ itemsList.length }}</span>
        </span>
    </div>
    <div class="flex justify-between itemsList-center w-full mx-auto">
        <slot name="prev" v-bind="{ prev }">
            <button @click="prev" class="bg-white p-2 rounded-full shadow-md">&lt;</button>
        </slot>
        <div class="flex flex-row w-full relative overflow-hidden" :style="height">
            <slot />
        </div>
        <slot name="next" v-bind="{ next }">
            <button @click="next" class="bg-white p-2 rounded-full shadow-md">&gt;</button>
        </slot>
    </div>
</template>
