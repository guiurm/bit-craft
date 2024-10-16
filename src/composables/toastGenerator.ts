import ToastItem from '@/components/toast/ToastItem.vue';
import useToastStore from '@/components/toast/toastStore';
import type { TToastItemBinds, TToastItemProps } from '@/components/toast/ToastTypes';
import { noop } from '@/globals';
import { v6 } from 'uuid';
import { type Ref, type RendererElement, type VNode, h } from 'vue';

export type ToastItemVNode = VNode<typeof ToastItem, RendererElement, TToastItemProps>;
export type ToastItemVNodeList = Ref<[uuid: string, node: ToastItemVNode][]>;

export const createToast = (conf: TToastItemBinds, id?: string) => {
    const store = useToastStore();
    const items = store.getList(id);

    if (!items) throw new Error('Not found');

    const uuid = v6();
    const toast = h(ToastItem, conf) as ToastItemVNode;
    const onClose = conf.onClose ?? noop;

    items.value.push([uuid, toast]);
    conf.onClose = () => {
        onClose();
        removeToastFromList([uuid, toast], id);
    };
};

const removeToastFromList = ([uuid]: ToastItemVNodeList['value'][number], id?: string) => {
    const store = useToastStore();
    const items = store.getList(id);

    if (!items) throw new Error('Not found');

    const filtered = items.value.filter(t => t[0] !== uuid);

    if (filtered.length !== items.value.length) {
        items.value.length = 0;
        items.value.push(...filtered);
    }
};
