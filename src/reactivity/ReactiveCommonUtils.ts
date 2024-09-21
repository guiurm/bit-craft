import type { HandlerReactiveComplex } from './HandlerReactiveComplex';
import { ReactiveComplex } from './ReactiveComplex';
import { ReactiveSimple } from './ReactiveSimple';
import type { IReactive, TRefSubscriber } from './ReactivityTypes';

export const hasKey = <T extends Record<string, any>, K extends keyof T>(target: T, key: K) =>
    Object.getOwnPropertyDescriptor(target, key) !== void 0;

export const isRef = (target: any) => hasKey(target, '__isRef');

export const observe = <V>(re: IReactive<V>, fn: TRefSubscriber<V>) => {
    let clear = () => false;
    if (isRef(re)) {
        re.subscribe(fn);
        clear = () => re.unSubscribe(fn);
    }
    return clear;
};

export const createProxy = <V extends Record<string, any>>(value: V, handler: HandlerReactiveComplex<V>): V => {
    /*return new Proxy(value, {
        get: <K extends keyof V>(target: V, key: K & string) => {
            return target[key] as V[K];
        },
        set: function <K extends keyof V>(target: V, prop: K & string, value: V[K & string]) {
            // Realizamos la asignación de la propiedad
            target[prop] = value;
            // Aquí puedes agregar lógica adicional para reaccionar a los cambios
            console.log(`Se ha actualizado la propiedad ${prop} a ${value}`);
            return true;
        }
    });*/
    return new Proxy(value, handler);
};

export const setReactive = <V>(value: V): IReactive<V> => {
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
            r = new ReactiveComplex(value as any);
            break;
    }

    return r;
};
