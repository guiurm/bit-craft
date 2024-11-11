<script lang="ts" setup>
import { onClickOutside } from '@/composables/onClickOutside';
import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import useCssClassTranslator from '../../composables/cssClassTranslator';

type TProps = {
    // true to hide
    modelValue?: boolean;
    header?: string;
    closeOutSiceClick?: boolean;
};

// definitions
const props = withDefaults(defineProps<TProps>(), { modelValue: false });
defineSlots<{ header(): void; default(): void }>();
const emits = defineEmits<{ 'update:model-value': [status: boolean] }>();

// composables
const { css, ...modifyCss } = useCssClassTranslator({ hidden: false });

// values
const isOpen = ref(props.modelValue);
const container = ref() as Ref<HTMLDivElement>;
const dropdown = ref() as Ref<HTMLDivElement>;

// watchers
watch(
    () => props.modelValue,
    n => {
        isOpen.value = n;
        modifyCss.addCss({ hidden: !isOpen.value });
    }
);

// actions
const toogle = () => {
    isOpen.value = !isOpen.value;
    modifyCss.addCss({ hidden: !isOpen.value });
    emits('update:model-value', isOpen.value);
};
const checkDropdownPosition = () => {
    const dropdownRect = dropdown.value.getBoundingClientRect();
    const parentRect = container.value.parentElement?.getBoundingClientRect();

    if (!parentRect) return;

    if (dropdownRect.right > parentRect.right) modifyCss.addCss({ 'right-0': true, 'left-0': false });

    modifyCss.addCss({ hidden: !isOpen.value });
};

// life-cicle
let clear = (): void => void 0;
onMounted(() => {
    checkDropdownPosition();
    if (props.closeOutSiceClick)
        clear = onClickOutside(container.value, () => {
            isOpen.value = false;
            modifyCss.addCss({ hidden: isOpen.value });
            emits('update:model-value', isOpen.value);
        });
});
onUnmounted(clear);
</script>
<template>
    <div ref="container" class="relative bg-slate-300 w-fit">
        <div class="cursor-pointer select-none" @click="toogle">
            <slot name="header">
                {{ header }}
            </slot>
        </div>

        <div ref="dropdown" class="absolute" :class="css">
            <slot />
        </div>
    </div>
</template>
