<script lang="ts" setup>
import type { TNoppNoArgs } from '@/globals';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';
import { onMounted, provide } from 'vue';
import { useCarousel } from './carouselComposable';
import { CARROUSEL_ACTIONS, type TCarrouselProvideCard } from './carouselConstants';

defineSlots<{
    default(props: { currentIndex: number; totalSize: number; prev: TNoppNoArgs; next: TNoppNoArgs }): void;
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
    <div class="bc-carousel-container">
        <slot name="prev" v-bind="{ prev }">
            <chevron-left-icon @click="prev" class="bc-carousel-btn" />
        </slot>
        <div class="bc-carousel-content" :style="height">
            <slot v-bind="{ currentIndex, totalSize: itemsList.length, prev, next }" />
        </div>
        <slot name="next" v-bind="{ next }">
            <chevron-right-icon @click="next" class="bc-carousel-btn" />
        </slot>
    </div>
</template>
