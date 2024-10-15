import ToastItem from '@/components/toast/ToastItem.vue';
import useToastStore from '@/components/toast/toastStore';
import type { TToastItemBinds } from '@/components/toast/ToastTypes';
import { type Ref, type VNode, h } from 'vue';

export type ToastItemVNode = VNode<typeof ToastItem>;
export type ToastItemVNodeList = Ref<VNode<typeof ToastItem>[]>;

export const createToast = (conf: TToastItemBinds, id?: string) => {
    const store = useToastStore();
    const items = store.getList(id);
    console.log(items);

    if (!items) throw new Error('Not found');
    items.value.push(h(ToastItem, conf) as any);
};
