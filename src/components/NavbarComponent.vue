<script lang="ts" setup></script>
<template>
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

            <router-link
                to="/dt"
                class="mx-2 transition duration-300 ease-in-out transform hover:scale-110 hover:text-custom-orange-bright">
                Datatable
            </router-link>
            <router-link
                to="toast"
                class="mx-2 transition duration-300 ease-in-out transform hover:scale-110 hover:text-custom-orange-bright">
                Toast
            </router-link>
        </nav>
    </header>
</template>
