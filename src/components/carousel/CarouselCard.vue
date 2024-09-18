<script lang="ts" setup>
import { inject, onUnmounted, ref, watch, type Ref } from 'vue';
import { CARROUSEL_ACTIONS, type TCarrouselCardInjection } from './carouselConstants';
import CarrouselSubscriber, { type TCarrouselCardPosition } from './CarouselSubscriber';

type TCarouselCardEmits = { [K in TCarrouselCardPosition]: [] } & { change: [position: TCarrouselCardPosition] };
const emits = defineEmits<TCarouselCardEmits>();

const { addCard, setContainerHeight } = inject(CARROUSEL_ACTIONS) as TCarrouselCardInjection;
const subscriber = new CarrouselSubscriber();

const name = ref('');
const root = ref() as Ref<HTMLDivElement>;
const position = ref('hidden' as TCarrouselCardPosition);
const id = parseInt(Date.now() * 0.01 * Math.random() + '').toString(16);

subscriber.on(newPosition => {
    const isVisible = position.value === 'visible';
    const isLeft = isVisible ? newPosition === 'left' : position.value === 'left';
    const isRight = isVisible ? newPosition === 'right' : position.value === 'right';

    if (isVisible) {
        name.value = isLeft ? 'rl' : isRight ? 'lr' : name.value;
    } else {
        if (newPosition === 'hidden') {
            name.value = 'rl';
        } else {
            name.value = isLeft ? 'lr' : isRight ? 'rl' : name.value;
        }
    }

    position.value = newPosition;
    emitNewPosition(newPosition);
});

const emitNewPosition = (newPosition: TCarrouselCardPosition) => {
    emits('change', newPosition);
    switch (newPosition) {
        case 'hidden':
            emits('hidden');
            break;
        case 'left':
            emits('left');
            break;
        case 'right':
            emits('right');
            break;
        case 'visible':
            emits('visible');
            break;
    }
};

watch(position, v => {
    if (v === 'visible') {
        setTimeout(() => {
            setContainerHeight(root.value.clientHeight);
        }, 0);
    }
});

addCard({ id, subscriber });
onUnmounted(() => subscriber.clear());
</script>
<template>
    <transition :name="name">
        <div ref="root" v-show="position === 'visible'" class="w-full flex-shrink-0 absolute">
            <slot />
        </div>
    </transition>
</template>
