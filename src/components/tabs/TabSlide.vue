<script setup lang="ts">
import type { TRenderComponent } from '@/@core/types';
import { inject, onBeforeMount, onBeforeUnmount, ref, watch, type Ref } from 'vue';
import useCssClassTranslator, { type TCss } from '../../composables/cssClassTranslator';
import { TAB_ADD, TAB_REMOVE, TAB_SET_ACTIVE, type TTabInjections, type TTabSlideData } from './TabGlobals';

const props = withDefaults(
    defineProps<{
        header: string | { component: TRenderComponent; binds: Record<string, any> };
        id?: string;
        active?: boolean;
        //transitionName?: string;
        class?: TCss;
    }>(),
    { active: false, /*transitionName: 'fade',*/ class: '' }
);
const emits = defineEmits<{ clickTab: []; show: []; hide: [] }>();

const id = props.id ?? parseInt(`${Date.now() * Math.random()}`).toString(16);
const tabR = ref({}) as Ref<TTabSlideData>;

const { css, ...modifyCss } = useCssClassTranslator(props.class);
modifyCss.addCss('overflow-y-auto flex flex-col grow min-w-full');
watch(
    () => props.class,
    n => modifyCss.addCss(n)
);

const setTab = inject(TAB_SET_ACTIVE) as TTabInjections[typeof TAB_SET_ACTIVE];

const addTab = inject(TAB_ADD) as TTabInjections[typeof TAB_ADD];
const removeTab = inject(TAB_REMOVE) as TTabInjections[typeof TAB_REMOVE];

onBeforeMount(() => {
    tabR.value = addTab({
        header: props.header,
        id,
        active: props.active,
        emit: { clickTab: () => emits('clickTab'), show: () => emits('show'), hide: () => emits('hide') }
    }).value;
});
onBeforeUnmount(() => removeTab(id));

watch(
    () => props.active,
    n => {
        if (n) setTab(id);
    }
);
// const transition = computed(() => props.transitionName);
</script>
<template>
    <!--
        <transition :name="transition" class="absolute top-0">
            <transition :name="transition"> </transition>
    -->
    <div v-if="tabR.active" :class="css">
        <slot />
    </div>
</template>
