import type ReactiveComplexSubscriber from './ReactiveComplexSubscriber';

export default class ReactiveComplexHandler<V, P> {
    private __target: V;
    private __parent: P;
    private __subscriber: ReactiveComplexSubscriber<(newValue: P, old: P) => void>;

    constructor(target: V, parent: P, subscriber: ReactiveComplexSubscriber<(newValue: P, old: P) => void>) {
        this.__target = target;
        this.__parent = parent;
        this.__subscriber = subscriber;
    }

    get<K extends keyof V>(target: V, prop: K & string) {
        return target[prop];
    }
    set<K extends keyof V>(target: V, prop: K & string, value: V[K & string]) {
        target[prop] = value;
        this.__subscriber.distpach(this.__parent, this.__parent);
        return target[prop];
    }

    public get target() {
        return this.__target;
    }

    public get parent() {
        return this.__parent;
    }
}
