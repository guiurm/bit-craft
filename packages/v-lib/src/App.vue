<script setup lang="ts">
/*
import { defineApiConnector } from "@guiurm/api-connector";
import axios from "axios";
import { defineAsyncComponent, h } from "vue";
import { RouterView } from "vue-router";
import NavbarComponent from "./components/NavbarComponent.vue";
import reactiveAsyncCallback from "./composables/reactiveAsyncCallback";

const call = () => {
    return new Promise<{ name: string }>((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.75) resolve({ name: "baboonlab" });
            else reject(new Error("Force error for testing purposes"));
        }, 3000);
    });
};

axios.create();
defineApiConnector;

const reactiveResponse = reactiveAsyncCallback(call, {
    autoCall: false,
    onError() {},
});

const asyncComponent = defineAsyncComponent({
    loader: async () => {
        await reactiveResponse.call();

        if (reactiveResponse.error.value) {
            throw reactiveResponse.error.value;
        }

        return h("div", {}, [JSON.stringify(reactiveResponse.data.value)]);
    },
    onError(error, retry, fail) {
        fail();
    },
    errorComponent: () => h("div", {}, [reactiveResponse.error.value?.message]),
    loadingComponent: () => h("div", {}, ["loading..."]),
});
*/
import { cammelCaseSerializer } from "@guiurm/api-connector";
import { defineAsyncComponent, h } from "vue";
import { RouterView } from "vue-router";
import NavbarComponent from "./components/NavbarComponent.vue";
import { useApiConnector } from "./composables/apiConnector";

const api = useApiConnector({ baseURL: "https://httpbin.org" });
const itw = useApiConnector({ baseURL: "https://api.idealtwin.com/v1/", headers: { Version: "1.0.0" } });
itw.get(
    {
        onSuccess(res) {
            console.log(res);
            console.log(res);
            console.log(res);
        },
        onError(error) {},
    },
    { serializers: [(data) => data.content, cammelCaseSerializer] }
).call("web/manultd.com");

api.post({}, {}).call("/post", { name: "baboonlab" });

const reactiveGetRequest = api.get();

const asyncComponent = defineAsyncComponent({
    loader: async () => {
        await reactiveGetRequest.call("/get");

        if (reactiveGetRequest.error.value) {
            throw reactiveGetRequest.error.value;
        }

        return h("div", {}, [JSON.stringify(reactiveGetRequest.data.value)]);
    },
    onError(error, retry, fail, attempts) {
        fail();
    },
    errorComponent: () => h("div", {}, [reactiveGetRequest.error.value?.message]),
    loadingComponent: () => h("div", {}, ["loading..."]),
});
</script>

<template>
    <async-component />
    <navbar-component />
    <router-view #default="{ Component }">
        <transition name="fade">
            <component :is="Component" />
        </transition>
    </router-view>
</template>
