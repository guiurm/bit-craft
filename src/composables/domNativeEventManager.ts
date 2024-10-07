import type { TNopp } from '@/globals';
import { v6 } from 'uuid';

type TWindowEventStorage = {
    [EventName in keyof WindowEventMap]: (this: Window, ev: WindowEventMap[EventName]) => void;
};

export const useDomNativeEventManager = (target: HTMLElement | Window | Document) => {
    const events = new Map<keyof TWindowEventStorage, Map<string, TWindowEventStorage[keyof TWindowEventStorage]>>();
    // const _storage: StandardStorage<StandardStorage<TNopp, string>, keyof TWindowEventStorage> = new StandardStorage();

    const on = <K extends keyof TWindowEventStorage>(
        eve: K,
        fn: TWindowEventStorage[K],
        conf?: boolean | AddEventListenerOptions
    ) => {
        const eventTypeList = events.get(eve) ?? new Map();
        events.set(eve, eventTypeList);

        eventTypeList.set(v6(), fn);

        target.addEventListener(eve, fn as TNopp, conf);

        return () => target.removeEventListener(eve, fn as TNopp, conf);
    };

    const clearAll = () => {
        events.forEach((list, eventName) => {
            list.forEach(currentListener => target.removeEventListener(eventName, currentListener as TNopp));
        });
    };

    return { on, clearAll };
};
