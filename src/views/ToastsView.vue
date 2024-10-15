<script lang="ts" setup>
import ToastContainer from '@/components/toast/ToastContainer.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';

const v = ref('v');
const add = () => {};
</script>
<template>
    <main-layout>
        <div class="flex my-1">
            <input v-model="v" type="text" />
            <div class="btn" @click="add">Añadir</div>
        </div>
        <div class="relative">
            <toast-container position="top-right" />
        </div>
    </main-layout>
</template>
