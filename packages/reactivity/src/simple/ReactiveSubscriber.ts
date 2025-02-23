class ReactiveSubscriber<C extends (...args: any) => any = () => void> {
    private _subscriber: Set<C>;
    constructor(fn?: C[]) {
        this._subscriber = new Set(fn);
    }

    public subscribe(fn: C): void {
        this._subscriber.add(fn);
    }

    public unSubscribe(fn: C): boolean {
        return this._subscriber.delete(fn);
    }

    public clear(): void {
        this._subscriber.clear();
    }

    public distpach(...args: Parameters<C>): void {
        this._subscriber.forEach(fn => fn(...args));
    }
}

export { ReactiveSubscriber };
