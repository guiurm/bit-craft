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
