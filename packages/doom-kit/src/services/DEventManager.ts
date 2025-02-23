import { uuidV4 } from '@guiurm/event-driver';
import { KeyValueStorage } from '@guiurm/iterables';
import { TBasicCallBack, TWindowEventStorage } from '@guiurm/utility-types';

class DEventManager<Target extends HTMLElement | Window | Document = HTMLElement> {
    private _target: Target;
    private _storage: KeyValueStorage<{
        [K in keyof TWindowEventStorage]: KeyValueStorage<{ [K: string]: TBasicCallBack }>;
    }>;

    constructor(target: Target) {
        this._target = target;
        this._storage = new KeyValueStorage();
    }

    /**
     * Returns the list of all event listeners registered for the given event type.
     * If such list doesn't exist, a new one is created and stored in the internal storage.
     * @param ev - The type of event to retrieve the list of event listeners for.
     * @returns The list of event listeners registered for the given event type.
     */
    private _getOrCreateEventList(ev: keyof TWindowEventStorage): KeyValueStorage<{ [K: string]: TBasicCallBack }> {
        const eveStorage =
            this._storage.get(ev) ?? (new KeyValueStorage() as KeyValueStorage<{ [K: string]: TBasicCallBack }>);
        this._storage.add(ev, eveStorage);
        return eveStorage;
    }

    /**
     * Registers an event listener for the specified event type.
     *
     * @param ev - The type of event to listen for.
     * @param fn - The callback function to be executed when the event is triggered.
     * @param conf - An optional configuration object that specifies characteristics of the event listener.
     * @returns A unique string identifier for the registered event listener.
     */
    public on<Event extends keyof TWindowEventStorage>(
        ev: Event,
        fn: TWindowEventStorage[Event],
        conf?: boolean | AddEventListenerOptions
    ): string {
        const eventList = this._getOrCreateEventList(ev);
        const id = uuidV4();
        eventList.add(id, fn);
        this._target.addEventListener(ev, fn as () => void, conf);
        return id;
    }

    public remove<Event extends keyof TWindowEventStorage>(
        ev: Event,
        fn: TWindowEventStorage[Event],
        conf?: boolean | EventListenerOptions
    ): boolean;

    public remove<Event extends keyof TWindowEventStorage>(
        ev: Event,
        id: string,
        conf?: boolean | EventListenerOptions
    ): boolean;

    /**
     * Removes an event listener for the specified event type.
     *
     * @param {Event} ev - The type of event to remove the listener for.
     * @param {TWindowEventStorage[Event] | string} fn - The callback function or the unique identifier of the event listener.
     * @param {boolean | EventListenerOptions} [conf] - Optional configuration object for the event listener.
     * @returns {boolean} - Returns `true` if the event listener was successfully removed, otherwise `false`.
     */
    public remove<Event extends keyof TWindowEventStorage>(
        ev: Event,
        fn: TWindowEventStorage[Event] | string,
        conf?: boolean | EventListenerOptions
    ): boolean {
        const eventList = this._getOrCreateEventList(ev);
        let removed = false;
        if (typeof fn === 'string') {
            removed = eventList.remove(fn);
        } else {
            eventList.forEach((currentFn, currentId) => {
                if (currentFn === fn) removed = eventList.remove(currentId);
            });
        }
        this._target.removeEventListener(ev, fn as () => void, conf);
        return removed;
    }

    /**
     * Clears all event listeners from the storage and removes them from the target.
     */
    public clearAll(): void {
        this._storage.forEach((currentEventList, currentEvenKey) =>
            currentEventList.forEach((currentFn: TBasicCallBack) =>
                this._target.removeEventListener(currentEvenKey, currentFn)
            )
        );
    }

    /**
     * Migrates the event listeners from the current target to the specified target.
     *
     * @param {Target} target - The target to migrate the event listeners to.
     * @returns {this} - Returns the current instance for method chaining.
     */
    protected _migrateEvents(target: Target): this {
        this._storage.forEach((currentEventList, currentEvenKey) =>
            currentEventList.forEach((currentFn: TBasicCallBack) => target.addEventListener(currentEvenKey, currentFn))
        );
        return this;
    }

    /**
     * Migrates the event listeners from the current target to a new target.
     * After calling this method, all the event listeners will be attached to the new target.
     * The internal target reference is also updated.
     * @param target The new target to migrate the event listeners to.
     * @returns The same instance of the {@link DEventManager} for chaining.
     */
    public migrate(target: Target): this {
        this._migrateEvents(target);
        this._target = target;
        return this;
    }

    /**
     * Returns the target which the event listeners are attached to.
     * @readonly
     * @type {Target}
     */
    public get target() {
        return this._target;
    }
}

export { DEventManager };
