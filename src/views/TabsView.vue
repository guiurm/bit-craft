<script lang="ts" setup>
import TabMenu from '@/components/tabs/TabMenu.vue';
import TabSlide from '@/components/tabs/TabSlide.vue';
import MainLayout from '@/layouts/MainLayout.vue';
</script>
<template>
    <main-layout>
        <tab-menu :direction="'line'">
            <tab-slide :header="'User'">
                <ul>
                    <li>Manu</li>
                    <li>Juan</li>
                </ul>
            </tab-slide>

            <tab-slide :header="'Cars'">
                <ul>
                    <li>BMW</li>
                    <li>Mercedes</li>
                </ul>
                <div class="btn">btn</div>
            </tab-slide>
        </tab-menu>
    </main-layout>
</template>
