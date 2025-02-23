<script lang="ts" setup>
import TabMenu from "@/components/tabs/TabMenu.vue";
import TabSlide from "@/components/tabs/TabSlide.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { ref } from "vue";

const dir = ref<"col" | "line">("col");
const toggle = () => (dir.value = dir.value === "col" ? "line" : "col");
</script>
<template>
    <main-layout>
        <tab-menu class="gap-20 tab-about-us" direction="col">
            <tab-slide header="header">
                <div class="bg-gray-300 w-80 h-64 mb-12"></div>
                <div class="font-semibold text-4xl">Texto 1</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat id massa bibendum
                    facilisis. Etiam risus tortor, accumsan et dui id, semper porta nibh. Aliquam erat volutpat. Proin
                    id nibh eu ex semper efficitur a vitae lectus. In accumsan, sem eu cursus auctor, mauris urna
                    malesuada dolor, in hendrerit turpis tortor ac quam. Donec rutrum leo eget augue fermentum, eget
                    molestie magna luctus. Proin mattis blandit ex nec facilisis.
                </p>
            </tab-slide>
            <tab-slide header="header2">
                <div class="bg-gray-300 w-80 h-64 mb-12"></div>
                <div class="font-semibold text-4xl">Texto 2</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat id massa bibendum
                    facilisis. Etiam risus tortor, accumsan et dui id, semper porta nibh. Aliquam erat volutpat. Proin
                    id nibh eu ex semper efficitur a vitae lectus. In accumsan, sem eu cursus auctor, mauris urna
                    malesuada dolor, in hendrerit turpis tortor ac quam. Donec rutrum leo eget augue fermentum, eget
                    molestie magna luctus. Proin mattis blandit ex nec facilisis.
                </p>
            </tab-slide>
        </tab-menu>

        <!--  -->
        <hr />
        <!--  -->

        <tab-menu direction="col">
            <tab-slide header="header">
                <div class="bg-gray-300 w-80 h-64 mb-12"></div>
                <div class="font-semibold text-4xl">Texto 1</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat id massa bibendum
                    facilisis. Etiam risus tortor, accumsan et dui id, semper porta nibh. Aliquam erat volutpat. Proin
                    id nibh eu ex semper efficitur a vitae lectus. In accumsan, sem eu cursus auctor, mauris urna
                    malesuada dolor, in hendrerit turpis tortor ac quam. Donec rutrum leo eget augue fermentum, eget
                    molestie magna luctus. Proin mattis blandit ex nec facilisis.
                </p>
            </tab-slide>

            <tab-slide header="header2">
                <div class="bg-gray-300 w-80 h-64 mb-12"></div>
                <div class="font-semibold text-4xl">Texto 2</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat id massa bibendum
                    facilisis. Etiam risus tortor, accumsan et dui id, semper porta nibh. Aliquam erat volutpat. Proin
                    id nibh eu ex semper efficitur a vitae lectus. In accumsan, sem eu cursus auctor, mauris urna
                    malesuada dolor, in hendrerit turpis tortor ac quam. Donec rutrum leo eget augue fermentum, eget
                    molestie magna luctus. Proin mattis blandit ex nec facilisis.
                </p>
            </tab-slide>
        </tab-menu>

        <!--  -->
        <hr />
        <!--  -->
        <button @click="toggle">cambiar direccion</button>

        <tab-menu :direction="dir">
            <tab-slide header="header">
                <div class="bg-gray-300 w-80 h-64 mb-12"></div>
                <div class="font-semibold text-4xl">Texto 1</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat id massa bibendum
                    facilisis. Etiam risus tortor, accumsan et dui id, semper porta nibh. Aliquam erat volutpat. Proin
                    id nibh eu ex semper efficitur a vitae lectus. In accumsan, sem eu cursus auctor, mauris urna
                    malesuada dolor, in hendrerit turpis tortor ac quam. Donec rutrum leo eget augue fermentum, eget
                    molestie magna luctus. Proin mattis blandit ex nec facilisis.
                </p>
            </tab-slide>

            <tab-slide header="header2">
                <div class="bg-gray-300 w-80 h-64 mb-12"></div>
                <div class="font-semibold text-4xl">Texto 2</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat id massa bibendum
                    facilisis. Etiam risus tortor, accumsan et dui id, semper porta nibh. Aliquam erat volutpat. Proin
                    id nibh eu ex semper efficitur a vitae lectus. In accumsan, sem eu cursus auctor, mauris urna
                    malesuada dolor, in hendrerit turpis tortor ac quam. Donec rutrum leo eget augue fermentum, eget
                    molestie magna luctus. Proin mattis blandit ex nec facilisis.
                </p>
            </tab-slide>
        </tab-menu>
    </main-layout>
</template>

<style lang="scss">
.tab-about-us.tab-menu {
    .tab-header {
        @apply bg-white px-7 py-10;
        border: 1px solid rgb(209 213 219) !important;
        border-radius: 6px;
        height: min-content;
    }
    .tab-btn {
        border: none;
        width: 336px;

        &--active {
            @apply text-white bg-green-600 px-6 py-2 text-base font-medium rounded-md w-full ease-in-out;
            border-radius: 6px;
        }
    }
}
</style>
