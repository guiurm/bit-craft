import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';
import ToastItem from './ToastItem.vue';
const useToastStore = defineStore('store', () => {
    const stores = ref(new Map<string, Ref<(typeof ToastItem)[]>>()) as Ref<Map<string, Ref<(typeof ToastItem)[]>>>;
    const first = ref(null) as Ref<null | string>;

    const registerContainer = (id: string, items: Ref<(typeof ToastItem)[]>) => {
        if (stores.value.size === 0) first.value = id;
        stores.value.set(id, items);
    };

    const removeStore = (id: string) => {
        if (stores.value.delete(id) && id === first.value) first.value = null;
    };

    const getList = (id = first.value) => {
        if (!id) return null;
        return stores.value.get(id) ?? (null as null | Ref<(typeof ToastItem)[]>);
    };

    return {
        registerContainer,
        removeStore,
        getList
    };
});

export default useToastStore;

const createToas = (id?: string) => {
    const store = useToastStore();
    const items = store.getList(id);

    if (!items) throw new Error('Not found');
};
