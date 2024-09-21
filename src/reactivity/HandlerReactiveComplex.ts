import { ReactiveSubscriber } from './ReactiveSubscriber';

export class HandlerReactiveComplex<V> {
    private _subs: ReactiveSubscriber<<K extends keyof V>(newValue: V[K], old: V[K]) => any>;

    constructor(subs?: ReactiveSubscriber<<K extends keyof V>(newValue: V[K], old: V[K]) => any>) {
        this._subs = subs ?? new ReactiveSubscriber();
    }

    get<K extends keyof V>(target: V, key: K & string) {
        return target[key];
    }
    set<K extends keyof V>(target: V, prop: K & string, value: V[K & string]) {
        const old = target[prop];
        target[prop] = value;
        console.log(`Se ha actualizado la propiedad ${prop.toString()} a ${value}`);
        this._subs.distpach(value, old);
        return target[prop];
    }
}
