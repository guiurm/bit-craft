<script lang="ts" setup>
import { onClickOutside } from '@/composables/onClickOutside';
import type { TNoppNoArgs } from '@/globals';
import { onMounted, onUnmounted, ref, watch, type Ref, type StyleValue } from 'vue';
import useCssClassTranslator from '../../composables/cssClassTranslator';

export type TBaseModalProps = {
    visible?: boolean;
    target?: HTMLElement;
    beforeAccept?: () => boolean;
    afterAccept?: TNoppNoArgs;
    closeOnClickOutside?: boolean;
    outsideClickHandler?: (event: MouseEvent) => boolean;
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
        closeOnClickOutside: true,
        outsideClickHandler: () => true,
        visible: false,
        modalCss: 'w-[48rem] h-[24rem] bg-white'
    }
);

//values
const modalDOM = ref() as Ref<HTMLDivElement>;
const visibleRef = ref(props.visible);
//const isVisible = computed(() => visibleRef.value === true);
const { css, ...modifyCss } = useCssClassTranslator(props.modalCss);

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
let clearOutclick = (): void => void 0;

//slots
const slotData = { close, accept, cancel, open, isVisible: visibleRef };
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
        visibleRef.value = n;
        if (n) emit('open');
        else emit('close');
    },
    { immediate: true }
);
watch(
    () => props.target,
    (n, o) => {
        o?.removeEventListener('click', open);
        n?.addEventListener('click', open);
    }
);
watch(
    () => props.modalCss,
    n => modifyCss.addCss(n)
);

//life-cicle
onMounted(() => {
    props.target?.addEventListener('click', open);
    clearOutclick = onClickOutside(modalDOM.value, e => {
        if (props.closeOnClickOutside && props.outsideClickHandler(e)) close();
    });
});
onUnmounted(() => {
    clearOutclick();
});
</script>
<template>
    <div v-if="visibleRef" :class="css" ref="modalDOM">
        <slot v-bind="slotData" name="header" />
        <slot v-bind="slotData" name="body" />
        <slot v-bind="slotData" name="footer" />
    </div>
</template>
