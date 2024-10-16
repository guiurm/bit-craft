<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { CheckCircleIcon } from '@heroicons/vue/24/solid';
import { onMounted, ref, watch } from 'vue';
import useCssClassTranslator from '../cssClassTranslator';
import type { TToastEmits, TToastItemProps } from './ToastTypes';

// props
const props = withDefaults(defineProps<TToastItemProps>(), {
    liveTime: -1,
    showLifeTime: true,
    modelValue: true,
    css: () => []
});

// emits
const emits = defineEmits<TToastEmits>();

// data
const visibleR = ref(props.modelValue);
const { css: cssR, ...modifyCss } = useCssClassTranslator(props.css);
const progress = ref('100%');
let counter = 0;
let startTime = 0;

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
    startCounter();
});
</script>
<template>
    <transition name="fade">
        <div
            class="relative overflow-hidden flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            :class="cssR"
            role="alert"
            v-if="visibleR"
            v-bind="mouseEvents">
            <div
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <check-circle-icon class="size-5" />
            </div>
            <div class="mx-3 text-sm font-normal">
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
                class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-success"
                aria-label="Close"
                @click="close">
                <x-mark-icon class="size-5" />
            </button>
            <div
                v-if="showLifeTime"
                :style="{ width: progress }"
                class="absolute bottom-0 left-0 h-1 bg-primary-500"></div>
        </div>
    </transition>
</template>
