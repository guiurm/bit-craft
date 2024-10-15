import type { ToastItemVNodeList } from '@/composables/toastGenerator';
import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';

const useToastStore = defineStore('store', () => {
    const stores = ref(new Map<string, ToastItemVNodeList>()) as Ref<Map<string, ToastItemVNodeList>>;
    const first = ref(null) as Ref<null | string>;

    const registerContainer = (id: string, items: ToastItemVNodeList) => {
        if (stores.value.size === 0) first.value = id;
        stores.value.set(id, items);
    };

    const removeStore = (id: string) => {
        if (stores.value.delete(id) && id === first.value) first.value = null;
    };

    const getList = (id = first.value) => {
        if (!id) return null;
        return stores.value.get(id) ?? (null as null | ToastItemVNodeList);
    };

    return {
        registerContainer,
        removeStore,
        getList
    };
});

export default useToastStore;
