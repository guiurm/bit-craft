<script lang="ts" setup>
import { ref, watch } from 'vue';

type TProps = {
    // true to hide
    modelValue?: boolean;
    header?: string;
};

// definitions
const props = withDefaults(defineProps<TProps>(), { modelValue: false });
defineSlots<{ header(): void; default(): void }>();
const emits = defineEmits<{ 'update:model-value': [status: boolean]; open: []; close: [] }>();

// values
const isOpen = ref(props.modelValue);

// watchers
watch(
    () => props.modelValue,
    n => {
        isOpen.value = n;
        if (n) emits('open');
        else emits('close');
    }
);

// actions
const toogle = () => {
    isOpen.value = !isOpen.value;
    emits('update:model-value', isOpen.value);
    if (isOpen.value) emits('open');
    else emits('close');
};
</script>
<template>
    <div class="hs-collapse">
        <div class="hs-collapse-header" @click="toogle">
            <slot name="header">
                {{ header }}
            </slot>
        </div>

        <div v-show="isOpen">
            <slot />
        </div>
    </div>
</template>
