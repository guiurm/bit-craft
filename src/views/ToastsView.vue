<script lang="ts" setup>
import ToastItem from '@/components/toast/ToastItem.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';

const show = ref(true);
const toggle = () => {
    show.value = true;
};
</script>
<template>
    <main-layout>
        {{ show }}
        <div class="btn" @click="toggle">toggle</div>
        <toast-item :live-time="3000" :show-life-time="true" v-model="show"> Some message in toast</toast-item>
    </main-layout>
</template>
