<script setup lang="ts">
import StyledModal from '@/components/modal/StyledModal.vue';
import { ref, type Ref } from 'vue';
const visible = ref(true);
const target = ref() as Ref<HTMLElement>;

import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
    <main-layout>
        <pre>
        {
            visible {{ visible }}
        }
    </pre
        >
        <button ref="target" class="btn-xs">Open</button>
        <!--

            <base-modal :target="target">
            <template #header="{ close }">
                <div class="px-2 py-1 bg-red-500 text-white w-min rounded cursor-pointer" @click="close">close</div>
            </template>
            
            <template #body>body</template>
            <template #footer>footer</template>
        </base-modal>
    -->
        <styled-modal v-model:visible="visible" :target="target"></styled-modal>
    </main-layout>
</template>
