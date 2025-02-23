import type { TRenderComponent } from '@/@core/types';
import type { TEventEmitterToBindings } from '@/@core/utils/UtilityTypes';
import type { TCss } from '../../composables/cssClassTranslator';

// item
export type TToastItemProps = {
    message?: string | TRenderComponent;
    liveTime?: number;
    showLifeTime?: boolean;
    modelValue?: boolean;
    css?: TCss;
    id?: string;
    type?: 'success' | 'warning' | 'error';
    showIcon?: boolean;
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
