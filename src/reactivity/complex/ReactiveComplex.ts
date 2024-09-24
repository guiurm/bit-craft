import { createProxyComplex, createRecursiveProxyComplex } from '../ReactiveCommonUtils';
import type { IReactiveCore, TRefSubscriber } from '../ReactivityTypes';
import ReactiveComplexSubscriber from './ReactiveComplexSubscriber';

export default class ReactiveComplex<V extends Record<string, any>> implements IReactiveCore<V> {
    private __raw: V;
    private __proxy: V;
    private __subs: ReactiveComplexSubscriber<(newValue: V, old: V) => void>;
    private __isRef: boolean = true;

    constructor(data: V, recursive: boolean = true) {
        this.__raw = data;
        this.__subs = new ReactiveComplexSubscriber();
        this.__proxy = createProxyComplex(data, data, this.__subs);

        if (recursive) this._recursiveProxy();
    }

    private _recursiveProxy() {
        createRecursiveProxyComplex(this.__proxy, this.__proxy, this.__subs);
    }

    get value() {
        return this.__proxy;
    }

    subscribe(fn: TRefSubscriber<V>): void {
        this.__subs.subscribe(fn);
    }
    unSubscribe(fn: TRefSubscriber<V>): boolean {
        return this.__subs.unSubscribe(fn);
    }
}
