<script lang="ts" setup>
import { onMounted, provide, ref, type Ref } from 'vue'
import { CARROUSEL_ACTIONS, type TCarrouselProvideCard } from './carrouselConstants'
import type CarrouselSubscriber from './CarrouselSubscriber'

const items = ref([]) as Ref<{ id: string; subscriber: CarrouselSubscriber }[]>

const currentIndex = ref(0)
const height = ref({ height: '0px' })

const distpachListeners = (visible: number, left: number, right: number) => {
    items.value.forEach((item, index) => {
        switch (index) {
            case visible:
                item.subscriber.distpach('visible')
                break
            case left:
                item.subscriber.distpach('left')
                break
            case right:
                item.subscriber.distpach('right')
                break
            default:
                item.subscriber.distpach('hidden')
                break
        }
    })
}

const next = () => {
    const visible = currentIndex.value + 1 >= items.value.length ? 0 : currentIndex.value + 1
    const left = currentIndex.value
    const right = visible + 1 >= items.value.length ? 0 : visible + 1

    currentIndex.value = visible

    distpachListeners(visible, left, right)
}

const prev = () => {
    const visible = currentIndex.value - 1 < 0 ? items.value.length - 1 : currentIndex.value - 1
    const right = currentIndex.value
    const left = visible - 1 < 0 ? items.value.length - 1 : visible - 1

    currentIndex.value = visible

    distpachListeners(visible, left, right)
}

provide(CARROUSEL_ACTIONS, {
    addCard: (data) => {
        items.value.push(data)
    },
    setContainerHeight: (v) => {
        height.value.height = `${v}px`
    }
} as TCarrouselProvideCard)

onMounted(() => {
    if (items.value.length === 0 || items.value.length === 1) return

    distpachListeners(0, items.value.length - 1, 1)
})
</script>

<template>
    <div class="flex justify-end">
        <span class="text-primary-500">
            <span class="mr-1">{{ currentIndex + 1 }}</span>
            /
            <span class="ml-1">{{ items.length }}</span>
        </span>
    </div>
    <div class="flex justify-between items-center w-full mx-auto">
        <button @click="prev" class="bg-white p-2 rounded-full shadow-md">&lt;</button>
        <div class="flex flex-row w-full relative overflow-hidden" :style="height">
            <slot />
        </div>
        <button @click="next" class="bg-white p-2 rounded-full shadow-md">&gt;</button>
    </div>
</template>
