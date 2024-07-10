import { HandlerReactiveComplex } from './HandlerReactiveComplex';
import { createProxy } from './ReactiveCommonUtils';
import { ReactiveSubscriber } from './ReactiveSubscriber';
import type { IReactive, TRefSubscriber } from './ReactivityTypes';

export class ReactiveComplex<V extends Record<string, any>> implements IReactive<V> {
    private __v: V;
    private __rawValue: V;
    private __subs: ReactiveSubscriber<TRefSubscriber<V>>;
    private __handler: HandlerReactiveComplex<V>;
    private __isRef: boolean = true;

    constructor(v: V) {
        this.__rawValue = v;
        this.__subs = new ReactiveSubscriber();
        this.__handler = new HandlerReactiveComplex(this.__subs);
        this.__v = createProxy(v, this.__handler);
    }

    get value(): V {
        return this.__v;
    }

    set value(n: V) {
        const old = this.__v;
        this.__v = createProxy(n, this.__handler);
        this.__subs.distpach(n, old);
    }

    public subscribe(fn: TRefSubscriber<V>): void {
        this.__subs.subscribe(fn);
    }
    public unSubscribe(fn: TRefSubscriber<V>): boolean {
        return this.__subs.unSubscribe(fn);
    }
}
