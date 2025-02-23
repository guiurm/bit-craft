type TRefSubscriber<V> = (newValue: V, oldValue: V) => void;

interface IReactiveCore<V> {
    get value(): V;
    set value(n: V);

    subscribe(fn: TRefSubscriber<V>): void;
    unSubscribe(fn: TRefSubscriber<V>): boolean;
}

interface IReactive<V> {
    get value(): V;
    set value(n: V);
}

type TReactiveRawValue = number | string | boolean | bigint;

export type { IReactive, IReactiveCore, TReactiveRawValue, TRefSubscriber };
