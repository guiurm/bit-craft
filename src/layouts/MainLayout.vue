<script lang="ts" setup></script>

<template>
    <div class="bg-custom-white text-custom-gray font-sans">
        <header class="bg-custom-gray text-custom-white p-4">
            <nav class="flex justify-center">
                <router-link
                    to="/"
                    class="mx-2 transition duration-300 ease-in-out transform hover:scale-110 hover:text-custom-orange-bright">
                    Home
                </router-link>
                <router-link
                    to="/modal"
                    class="mx-2 transition duration-300 ease-in-out transform hover:scale-110 hover:text-custom-orange-bright">
                    Modals
                </router-link>
                <router-link
                    to="/d&d"
                    class="mx-2 transition duration-300 ease-in-out transform hover:scale-110 hover:text-custom-orange-bright">
                    D&D
                </router-link>
            </nav>
        </header>

        <main class="container mx-auto mt-8">
            <slot />
        </main>
    </div>
</template>
