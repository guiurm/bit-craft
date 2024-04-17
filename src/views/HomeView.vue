<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
    <main-layout>
        <h1 class="text-3xl font-bold mb-4 text-custom-brown">Welcome to the Vue 3 Library</h1>
        <p class="text-lg text-custom-gray">You are in a testing environment of the library. Explore our catalog!</p>

        <div class="mt-8">
            <p class="text-lg text-custom-gray">
                Discover more about our books:
                <a href="#" class="text-custom-orange font-bold hover:underline">Book 1</a>,
                <a href="#" class="text-custom-orange font-bold hover:underline">Book 2</a>,
                <a href="#" class="text-custom-orange font-bold hover:underline">Book 3</a>
            </p>
        </div>

        <div class="mt-8">
            <h2 class="text-xl font-bold text-custom-brown mb-2">Functions of the Vue 3 Library</h2>
            <p class="text-lg text-custom-gray">
                Our Vue 3 library provides a wide range of components, utilities, and composables that can streamline
                your work in web development. Some of the key features include:
            </p>
            <ul class="list-disc mt-4 text-custom-gray">
                <li>Reusable and customizable components for building user interfaces efficiently.</li>
                <li>
                    Built-in utilities that simplify common tasks such as state management, routing, and animations.
                </li>
                <li>Composables that allow sharing logic between components in a modular and scalable way.</li>
                <li>Compatibility with Vue 3 and the latest frontend development practices.</li>
            </ul>
        </div>
    </main-layout>
</template>
