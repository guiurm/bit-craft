export type TRefSubscriber<V> = (newValue: V, oldValue: V) => void;

export interface IReactive<V> {
    get value(): V;
    set value(n: V);

    subscribe(fn: TRefSubscriber<V>): void;
    unSubscribe(fn: TRefSubscriber<V>): boolean;
}
