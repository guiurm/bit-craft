<script lang="ts" setup>
import ToastContainer from "@/components/toast/ToastContainer.vue";
import { createToast } from "@/composables/toastGenerator";
import MainLayout from "@/layouts/MainLayout.vue";
import { h, ref } from "vue";

const v = ref("v");
let showLifeTime = true;
const add = () => {
    if (v.value === "") return;
    createToast({
        message: h("div", v.value),
        liveTime: 10000,
        showLifeTime,
        onClose: () => {},
    });
    showLifeTime = true; //!showLifeTime;

    //
    createToast({
        message: h("div", v.value),
        liveTime: -1,
        showLifeTime,
        type: "warning",
    });
    createToast({
        message: h("div", v.value),
        liveTime: 30000,
        showLifeTime,
        type: "error",
    });
    //

    createToast(
        {
            message: h("div", v.value),
            liveTime: -1,
            type: "warning",
            showIcon: false,
            showLifeTime,
            onClose: () => {
                console.log("from view 2");
            },
        },
        "qqqtest"
    );

    v.value = "";
};
</script>
<template>
    <main-layout>
        <div class="flex my-1">
            <input v-model="v" type="text" />
            <div class="btn" @click="add">Añadir</div>
        </div>
        <div class="relative">
            <toast-container position="top-right" />
        </div>

        <div class="size-96 bg-slate-200 relative">
            <toast-container position="bottom-left" target="parent" id="qqqtest" />
        </div>
    </main-layout>
</template>
