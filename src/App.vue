<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavbarComponent from './components/NavbarComponent.vue';
</script>

<template>
    <navbar-component />
    <router-view #default="{ Component }">
        <transition name="fade">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
