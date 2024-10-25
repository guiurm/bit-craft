<script lang="ts" setup>
import CarrouselCard from '@/components/carousel/CarouselCard.vue';
import CarrouselContainer from '@/components/carousel/CarouselContainer.vue';
import MainLayout from '@/layouts/MainLayout.vue';
</script>
<template>
    <main-layout>
        <carrousel-container>
            <template #next="{ next }">
                <div class="btn" @click="next">next</div>
            </template>
            <template #prev="{ prev }">
                <div class="btn" @click="prev">prev</div>
            </template>
            <template #default="{ currentIndex, totalSize }">
                <carrousel-card>
                    <div class="h-24">1</div>
                </carrousel-card>
                <carrousel-card>
                    <div class="h-24 mb-4">2</div>
                </carrousel-card>
                <carrousel-card>
                    <div class="h-40 mb-4">3</div>
                </carrousel-card>
                <carrousel-card>
                    <div class="h-24 mb-4">4</div>
                </carrousel-card>
                <div class="w-full absolute bottom-0 text-center">{{ currentIndex }} / {{ totalSize }}</div>
            </template>
        </carrousel-container>

        <carrousel-container>
            <template #default>
                <carrousel-card>
                    <div class="h-24">1</div>
                </carrousel-card>
                <carrousel-card>
                    <div class="h-24">2</div>
                </carrousel-card>
                <carrousel-card>
                    <div class="h-24">3</div>
                </carrousel-card>
                <carrousel-card>
                    <div class="h-24">4</div>
                </carrousel-card>
            </template>
        </carrousel-container>
    </main-layout>
</template>
