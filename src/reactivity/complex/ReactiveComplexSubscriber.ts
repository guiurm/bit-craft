export default class ReactiveComplexSubscriber<C extends (...args: any) => any = () => void> {
    private _subscriber: Set<C>;
    constructor(fn?: C[]) {
        this._subscriber = new Set(fn);
    }

    public subscribe(fn: C): this {
        this._subscriber.add(fn);
        return this;
    }

    public unSubscribe(fn: C): boolean {
        return this._subscriber.delete(fn);
    }

    public clear(): this {
        this._subscriber.clear();
        return this;
    }

    public distpach(...args: Parameters<C>): this {
        this._subscriber.forEach(fn => fn(...args));
        return this;
    }
}
