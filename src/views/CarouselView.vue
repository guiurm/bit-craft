<script lang="ts" setup>
import CarrouselCard from '@/components/carousel/CarrouselCard.vue';
import CarrouselContainer from '@/components/carousel/CarrouselContainer.vue';
import MainLayout from '@/layouts/MainLayout.vue';
</script>
<template>
    <main-layout>
        <carrousel-container>
            <carrousel-card>1</carrousel-card>
            <carrousel-card>2</carrousel-card>
            <carrousel-card>3</carrousel-card>
            <carrousel-card>4</carrousel-card>
        </carrousel-container>
    </main-layout>
</template>
