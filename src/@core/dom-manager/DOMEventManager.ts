import Storage from '@/@core/Iterables/Storege';
import type { TBasicCallBack, TWindowEventStorage } from '@/@core/types';
import { v6 } from 'uuid';

export default class DOMEventManager<Target extends HTMLElement | Window = HTMLElement> {
    private _target: Target;
    private _storage: Storage<Storage<TBasicCallBack, string>, keyof TWindowEventStorage>;

    constructor(target: Target) {
        this._target = target;
        this._storage = new Storage();
    }

    public changeTarget(target: Target): void {
        this._storage.forEach((eventsList, eventType) => {
            eventsList.forEach(eventCallback => {
                this._target.removeEventListener(eventType, eventCallback);
                target.addEventListener(eventType, eventCallback);
            });
        });
        this._target = target;
    }

    private _getOrCreateEventList(ev: keyof TWindowEventStorage) {
        const eveStorage = this._storage.get(ev) ?? new Storage();
        this._storage.add(ev, eveStorage);
        return eveStorage;
    }

    public on<Event extends keyof TWindowEventStorage & string>(
        ev: Event,
        fn: TWindowEventStorage[Event],
        conf?: boolean | AddEventListenerOptions
    ): string {
        const eventList = this._getOrCreateEventList(ev);
        const id = v6();
        eventList.add(id, fn);
        this._target.addEventListener(ev, fn as () => void, conf);
        return id;
    }

    public remove<Event extends keyof TWindowEventStorage & string>(
        ev: Event,
        fn: TWindowEventStorage[Event],
        conf?: boolean | EventListenerOptions
    ): boolean;
    public remove<Event extends keyof TWindowEventStorage & string>(
        ev: Event,
        id: string,
        conf?: boolean | EventListenerOptions
    ): boolean;
    public remove<Event extends keyof TWindowEventStorage & string>(
        ev: Event,
        fn: TWindowEventStorage[Event] | string,
        conf?: boolean | EventListenerOptions
    ): boolean {
        const eventList = this._getOrCreateEventList(ev);
        let removed = false;
        if (typeof fn === 'string') removed = eventList.remove(fn);
        else {
            eventList.forEach((currentFn, currentId) => {
                if (currentFn === fn) removed = eventList.remove(currentId);
            });
        }
        this._target.removeEventListener(ev, fn as () => void, conf);
        return removed;
    }

    public clearAll() {
        this._storage.forEach((currentEventList, currentEvenKey) =>
            currentEventList.forEach(currentFn => this._target.removeEventListener(currentEvenKey, currentFn))
        );
    }
}
