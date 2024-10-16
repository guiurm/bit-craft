import type { TEventEmitterToBindings } from '@/@core/utils/UtilityTypes';
import type { Component, VNode } from 'vue';
import type { TCss } from '../cssClassTranslator';

// item
export type TToastItemProps = {
    message?: string | Component | (() => VNode);
    liveTime?: number;
    showLifeTime?: boolean;
    modelValue?: boolean;
    css?: TCss;
    id?: string;
    // target?: 'document' | 'parent';
};
export type TToastEmits = { 'update:modelValue': [n: boolean]; close: [] };

// type a<E extends Record<string, any[]>> = { [K in keyof E as `on${Capitalize<K & string>}`]: E[K] };
export type TToastItemBinds = Partial<TEventEmitterToBindings<TToastEmits>> &
    TToastItemProps &
    Pick<Required<TToastItemProps>, 'message'>;

// container
export type TToastContainerPosition = `${'top' | 'bottom'}-${'right' | 'center' | 'left'}`;
export type TToastContainerProps = {
    css?: TCss;
    position?: TToastContainerPosition;
    target?: 'document' | 'parent';
    id?: string;
};
export type TToastContainerBinds = TToastContainerProps;
