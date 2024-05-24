<script lang="ts" setup>
import { computed, onMounted, ref, watch, type StyleValue } from 'vue';

export type TBaseModalProps = {
    visible?: boolean;
    target?: HTMLElement;
    beforeAccept?: () => boolean;
    afterAccept?: () => void;
};
export type TBaseModalEmits = {
    'update:visible': [n: boolean];
    close: [];
    open: [];
    accept: [];
    cancel: [];
};

//props
const props = withDefaults(
    defineProps<TBaseModalProps & { modalCss?: string | Record<string, boolean>; modalStyle?: StyleValue }>(),
    {
        beforeAccept: () => true,
        afterAccept: () => {},
        visible: false,
        modalCss: 'w-[48rem] h-[24rem] bg-white'
    }
);

//values
const visibleRef = ref(props.visible);
const isVisible = computed(() => visibleRef.value === true);

//emits
const emit = defineEmits<TBaseModalEmits>();

//actions
const close = () => {
    visibleRef.value = false;
    emit('close');
    emit('update:visible', false);
};
const accept = () => {
    if (!props.beforeAccept()) return;
    close();
    emit('accept');
    props.afterAccept();
};
const cancel = () => {
    close();
    emit('cancel');
};
const open = () => {
    visibleRef.value = true;
    emit('open');
    emit('update:visible', true);
};

//slots
const slotData = { close, accept, cancel, open, isVisible };
export type TBaseModalActions = typeof slotData;
defineSlots<{
    header: (data: TBaseModalActions) => {};
    body: (data: TBaseModalActions) => {};
    footer: (data: TBaseModalActions) => {};
}>();

//watch
watch(
    () => props.visible,
    n => {
        if (n) emit('open');
        else emit('close');
    }
);
watch(
    () => props.target,
    (n, o) => {
        o?.removeEventListener('click', open);
        n?.addEventListener('click', open);
    }
);

//life-cicle
onMounted(() => {
    props.target?.addEventListener('click', open);
});
</script>
<template>
    <div v-if="isVisible" :class="modalCss">
        <slot v-bind="slotData" name="header" />
        <slot v-bind="slotData" name="body" />
        <slot v-bind="slotData" name="footer" />
    </div>
</template>
