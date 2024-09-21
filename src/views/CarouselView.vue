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
            <template #default>
                <carrousel-card>1</carrousel-card>
                <carrousel-card>2</carrousel-card>
                <carrousel-card>3</carrousel-card>
                <carrousel-card>4</carrousel-card>
            </template>
        </carrousel-container>
    </main-layout>
</template>
