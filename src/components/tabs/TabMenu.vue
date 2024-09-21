<script setup lang="ts">
import { onMounted, provide, ref, watch, type Ref } from 'vue';
import {
    TAB_ADD,
    TAB_DIRECTION_COL,
    TAB_DIRECTION_LINE,
    TAB_REMOVE,
    TAB_SET_ACTIVE,
    type TTabInjections,
    type TTabMenuDirection,
    type TTabSlideData
} from './TabGlobals';

//props
const props = withDefaults(defineProps<{ direction?: TTabMenuDirection; allHidden?: boolean }>(), {
    direction: TAB_DIRECTION_LINE,
    allHidden: false
});

//data
const tabs = ref([]) as Ref<Ref<TTabSlideData>[]>;
const lastActive = ref(null) as Ref<null | TTabSlideData>;
const directionR = ref(props.direction);
const allHiddenR = ref(props.allHidden);

//actions
const addTab: TTabInjections[typeof TAB_ADD] = data => {
    data.active = data.active === undefined ? false : data.active;
    const d = ref(data) as Ref<TTabSlideData>;
    tabs.value.push(d);
    return d;
};
const removeTab: TTabInjections[typeof TAB_REMOVE] = (tabId: string) => {
    tabs.value = tabs.value.filter(data => data.value.id !== tabId);
};
const setActiveTab: TTabInjections[typeof TAB_SET_ACTIVE] = tabId => {
    const tab = tabs.value.find(cTab => cTab.value.id === tabId);
    if (!tab) return;
    lastActive.value = tab.value;
    if (allHiddenR.value) return;
    tabs.value.forEach(cTab => {
        if (cTab.value.id === tabId && cTab.value.active === false) cTab.value.emit.show();
        if (cTab.value.id !== tabId && cTab.value.active === true) cTab.value.emit.hide();
        cTab.value.active = cTab.value.id === tabId ? true : false;
    });
};
const closeAll = () =>
    tabs.value.forEach(cTab => {
        if (cTab.value.active) lastActive.value = cTab.value;
        cTab.value.active = false;
    });
const reOpen = () => {
    const activeFounded = lastActive.value !== null ? lastActive : tabs.value[0];
    if (activeFounded.value !== null)
        tabs.value.forEach(cTab => (cTab.value.active = cTab.value.id === activeFounded.value?.id));
};
const clickTab = (tab: Ref<TTabSlideData>) => {
    setActiveTab(tab.value.id);
    tab.value.emit.clickTab();
};

//provide
provide(TAB_ADD, addTab);
provide(TAB_REMOVE, removeTab);
provide(TAB_SET_ACTIVE, setActiveTab);

//life cycle
onMounted(() => {
    if (allHiddenR.value) {
        closeAll();
        return;
    }
    const active = tabs.value.filter(cTab => cTab.value.active);
    if (active.length > 1) throw new Error('[TabMenu] - there are more than one tabs set as active, error expected');
    else if (active.length === 0 && tabs.value.length !== 0) tabs.value[0].value.active = true;
});

//watchers
watch(
    () => props.direction,
    n => (directionR.value = n)
);
watch(
    () => props.allHidden,
    n => {
        if (n) closeAll();
        else reOpen();

        allHiddenR.value = n;
    }
);
</script>

<template>
    <div class="flex" :class="{ 'flex-wrap': directionR === TAB_DIRECTION_LINE }">
        <div
            class="flex flex-wrap border-0 border-b border-primary-500 flex-row"
            :class="{
                'flex-col border-b-0 w-fit': directionR === TAB_DIRECTION_COL,
                'min-w-full': directionR === TAB_DIRECTION_LINE
            }">
            <div
                class="tab-btn flex-grow flex justify-center items-center"
                v-for="cTab in tabs"
                :key="cTab.value.id"
                :class="{
                    'tab-btn--active': cTab.value.active,
                    'h-[50px] border-r-0 border-b': directionR === TAB_DIRECTION_COL
                }"
                @click="() => clickTab(cTab)">
                <template v-if="typeof cTab.value.header === 'string'">{{ cTab.value.header }}</template>
                <template v-else>
                    <component
                        :is="cTab.value.header.component"
                        v-bind="cTab.value.header.binds"
                        :key="`cH-${cTab.value.id}`" />
                </template>
            </div>
        </div>
        <div class="w-full relative">
            <slot />
        </div>
    </div>
</template>
