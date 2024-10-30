<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { CheckCircleIcon, ExclamationCircleIcon, XCircleIcon } from '@heroicons/vue/24/solid';
import type { VNode } from 'vue';
import { h, onMounted, ref, watch } from 'vue';
import useCssClassTranslator from '../../composables/cssClassTranslator';
import type { TToastEmits, TToastItemProps } from './ToastTypes';

// props
const props = withDefaults(defineProps<TToastItemProps>(), {
    liveTime: -1,
    showLifeTime: true,
    modelValue: true,
    css: () => [],
    showIcon: true,
    type: 'success'
});

// emits
const emits = defineEmits<TToastEmits>();

// data
const visibleR = ref(props.modelValue);
const { css: cssR, ...modifyCss } = useCssClassTranslator(props.css);
const progress = ref('100%');
let counter = 0;
let startTime = 0;

const icon = () => {
    let node = {} as VNode;
    if (props.type === 'success') node = h(CheckCircleIcon, { class: 'size-5 ' });
    if (props.type === 'warning') node = h(ExclamationCircleIcon, { class: 'size-5 ' });
    if (props.type === 'error') node = h(XCircleIcon, { class: 'size-5 ' });

    return h(
        'div',
        {
            class: 'toast-item-icon'
        },
        [node]
    );
};

// actions
const close = () => {
    visibleR.value = false;
    emits('update:modelValue', false);
    emits('close');
    clearInterval(counter as number);
    counter = -1;
};
const startCounter = (datetimeStart: number = Date.now()) => {
    if (props.liveTime > 0) {
        startTime = datetimeStart;

        counter = setInterval(() => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - (startTime as number);
            const currentLifeTime = Math.min(elapsedTime, props.liveTime);

            progress.value = `${(currentLifeTime / props.liveTime) * 100}%`;

            if (currentLifeTime >= props.liveTime) {
                close();
            }
        }, 1) as unknown as number;
    }
};
const mouseEvents = {
    onmouseenter: () => {
        clearInterval(counter);
    },
    onMouseleave: () => {
        const diff = (props.liveTime * parseInt(progress.value.replace('%', ''))) / 100;
        startCounter(Date.now() - diff);
    }
};

defineSlots<{
    default: () => {};
    icon: () => {};
}>();

// watchers
watch(
    () => props.modelValue,
    (n, o) => {
        visibleR.value = n;

        if (n !== o) {
            clearInterval(counter);
            startCounter();
        }
    }
);
watch(
    () => props.css,
    n => modifyCss.addCss(n)
);

// life-cicle
onMounted(() => {
    modifyCss.addCss('toast-item');

    if (props.type === 'success') modifyCss.addCss('toast-item--success');
    if (props.type === 'warning') modifyCss.addCss('toast-item--warning');
    if (props.type === 'error') modifyCss.addCss('toast-item--error');

    startCounter();
});
</script>
<template>
    <transition name="fade">
        <div class="toast-item" :class="cssR" role="alert" v-if="visibleR" v-bind="mouseEvents">
            <template v-if="showIcon">
                <slot name="icon">
                    <icon />
                </slot>
            </template>

            <div class="toast-item-body">
                <slot>
                    <template v-if="typeof message === 'string'">
                        {{ message }}
                    </template>
                    <template v-else>
                        <component :is="message" />
                    </template>
                </slot>
            </div>
            <button
                type="button"
                class="toast-item-close"
                data-dismiss-target="#toast-success"
                aria-label="Close"
                @click="close">
                <x-mark-icon class="size-5" />
            </button>
            <div v-if="showLifeTime" :style="{ width: progress }" class="toast-item-progress"></div>
        </div>
    </transition>
</template>
