<script lang="ts" setup>
import { computed } from "vue";
import BaseModal from "./BaseModal.vue";

import type { TBaseModalActions, TBaseModalEmits, TBaseModalProps } from "./BaseModal.vue";

//props
const props = withDefaults(defineProps<TBaseModalProps>(), {
    beforeAccept: () => true,
    afterAccept: () => {},
    visible: false,
});

//emits
const emit = defineEmits<TBaseModalEmits>();

//slots
defineSlots<{
    header: (data: TBaseModalActions) => {};
    body: (data: TBaseModalActions) => {};
    footer: (data: TBaseModalActions) => {};
}>();

//value
const isVisible = computed({
    get() {
        return props.visible ?? false;
    },
    set(n: boolean) {
        emit("update:visible", n);
    },
});
const domTarget = computed(() => props.target);
</script>
<template>
    <div class="fixed top-0 left-0 w-screen h-screen bg-stone-800/75" :class="{ hidden: !isVisible }">
        <div class="flex justify-center items-center h-full w-full">
            <base-modal v-model:visible="isVisible" :target="domTarget" modal-css="p-4 w-[48rem] bg-white rounded-md">
                <template #header="actions">
                    <slot v-bind="actions" name="header">
                        <div class="flex justify-between items-center mb-4">
                            <h2 class="text-2xl font-bold text-custom-brown">Modal Title</h2>
                            <button @click="actions.close" class="text-custom-gray hover:text-custom-orange-bright">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </slot>
                </template>
                <template #body="actions">
                    <slot v-bind="actions" name="body">
                        <p class="text-custom-gray mb-4">Modal content goes here...</p>
                    </slot>
                </template>
                <template #footer="actions">
                    <slot v-bind="actions" name="footer">
                        <div class="flex justify-end">
                            <button @click="actions.close" class="btn-sm">Close</button>
                            <button @click="actions.accept" class="btn-primary">Accept</button>
                        </div>
                    </slot>
                </template>
            </base-modal>
        </div>
    </div>
</template>
