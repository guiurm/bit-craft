import type { IReactiveCore, TReactiveRawValue, TRefSubscriber } from '../types';
import { ReactiveSubscriber } from './ReactiveSubscriber';

class ReactiveSimple<V extends TReactiveRawValue> implements IReactiveCore<V> {
    private __v: V;
    private __rawValue: V;
    private __subs: ReactiveSubscriber<TRefSubscriber<V>>;
    private __isRef: boolean = true;

    constructor(v: V) {
        this.__v = v;
        this.__rawValue = v;
        this.__subs = new ReactiveSubscriber();
    }

    get value(): V {
        return this.__v;
    }

    set value(n: V) {
        const old = this.__v;
        this.__v = n;
        this.__subs.distpach(n, old);
        //this.__subs.forEach(fn => fn(old, n));
    }

    public subscribe(fn: TRefSubscriber<V>): void {
        this.__subs.subscribe(fn);
    }
    public unSubscribe(fn: TRefSubscriber<V>): boolean {
        return this.__subs.unSubscribe(fn);
    }
}

export { ReactiveSimple };
