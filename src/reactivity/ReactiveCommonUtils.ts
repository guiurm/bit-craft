import ReactiveComplex from './complex/ReactiveComplex';
import ReactiveComplexHandler from './complex/ReactiveComplexHandler';
import type ReactiveComplexSubscriber from './complex/ReactiveComplexSubscriber';
import type { IReactive, IReactiveCore, TRefSubscriber } from './ReactivityTypes';
import { ReactiveSimple } from './simple/ReactiveSimple';

export const hasKey = <T extends Record<string, any>, K extends keyof T>(target: T, key: K) =>
    Object.getOwnPropertyDescriptor(target, key) !== void 0;

export const isRef = (target: any): target is IReactiveCore<any> => hasKey(target, '__isRef');

export const observe = <V>(re: IReactive<V>, fn: TRefSubscriber<V>) => {
    let clear = () => true;
    if (isRef(re)) {
        re.subscribe(fn);
        clear = () => re.unSubscribe(fn);
    }
    return clear;
};

export const setReactive = <V>(value: V, recursive: boolean = true): IReactive<V> => {
    let r: IReactive<V>;

    if (value === void 0 || value === null) throw new Error('');
    switch (typeof value) {
        case 'bigint':
        case 'boolean':
        case 'string':
        case 'number':
            r = new ReactiveSimple(value);
            break;
        default:
            r = new ReactiveComplex(value, recursive);
            break;
    }

    return r;
};

//new

export const createProxyComplex = <
    R extends Record<string, any>,
    P extends Record<string, any>,
    S extends ReactiveComplexSubscriber<(newValue: P, old: P) => void>
>(
    t: R,
    p: P,
    sus: S
) => {
    return new Proxy(t, new ReactiveComplexHandler(t, p, sus));
};

export const createRecursiveProxyComplex = <
    R extends Record<string, any>,
    P extends Record<string, any>,
    S extends ReactiveComplexSubscriber<(newValue: P, old: P) => void>
>(
    t: R,
    p: P,
    sus: S
) => {
    iterateObjectDescriptor(t, (prop, data) => {
        if (typeof data.value === 'object') {
            t[prop] = createProxyComplex(t[prop], p, sus);
            createRecursiveProxyComplex(t[prop], p, sus);
        }
    });
};
export function iterateObjectDescriptor<V extends Record<string, any>, K extends keyof V>(
    obj: V,
    fn: (key: K, data: TCustomPropertyDescriptor<V[K]>) => void
) {
    for (const key in obj) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, key);
        if (descriptor) {
            fn(key as unknown as K, descriptor as TCustomPropertyDescriptor<(typeof obj)[typeof key]>);
        }
    }
}

export type TCustomPropertyDescriptor<V> = PropertyDescriptor & { value: V; get?(): V; set?(v: V): void };
