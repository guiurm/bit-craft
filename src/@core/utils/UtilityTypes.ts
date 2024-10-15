export type TEventEmitterToBindings<E extends Record<string, any[]>, T extends string = `update:${string}`> = {
    [K in keyof E as K extends T ? never : `on${Capitalize<K & string>}`]: (...args: E[K]) => void;
};
