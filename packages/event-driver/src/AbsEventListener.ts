import { TBasicCallBack, TStringRecord } from '@guiurm/utility-types';
import { v4 as uuid } from 'uuid';
import { EventListenerOnReturn, TEventList, TOnAnyEventList } from './types';

abstract class AbsEventListener<EventType extends TStringRecord = TBasicCallBack> {
    /**
     * List of all specific events assigned
     */
    private readonly _eventsList: TEventList<EventType>;

    /**
     * List of all events that are dispatched always
     */
    private readonly _onAnyEventsList: TOnAnyEventList<EventType>;

    constructor() {
        this._eventsList = {};
        this._onAnyEventsList = [];
    }

    /**
     * Returns the list of all specific events assigned, as an object where
     * each property corresponds to an event, with the value being an array
     * of objects containing an `id`, a `callback` function for that event, and
     * a `once` flag indicating whether the event should be fired only once.
     */
    protected get eventsList(): TEventList<EventType> {
        return this._eventsList;
    }

    /**
     * Returns the list of all events that are dispatched always, as an array
     * of objects containing an `id`, a `callback` function for that event, and
     * a `once` flag indicating whether the event should be fired only once.
     */
    protected get onAnyEventsList(): TOnAnyEventList<EventType> {
        return this._onAnyEventsList;
    }

    /**
     * Registers a new event listener for a specific event type.
     *
     * @param type - The type of event to listen for.
     * @param callback - The callback function to be executed when the event is triggered.
     * @param once - A boolean indicating if the callback should be executed only once. Defaults to false.
     * @returns An object containing the listener instance and the event ID.
     */
    public on<K extends keyof EventType, Call extends EventType[K]>(
        type: K,
        callback: Call,
        once = false
    ): EventListenerOnReturn<EventType, this> {
        this._generateEventArray(type);
        const randomId = uuid();
        this.eventsList[type]?.push({ id: randomId, callback, once });
        return { self: this, eventId: randomId };
    }

    /**
     * Registers a new event listener for all events.
     *
     * @param callback - The callback function to be executed when any event is triggered.
     * @param once - A boolean indicating if the callback should be executed only once. Defaults to false.
     * @returns An object containing the listener instance and the event ID.
     */
    public onAny(callback: EventType[keyof EventType], once = false): EventListenerOnReturn<EventType, this> {
        const randomId = uuid();
        this.onAnyEventsList.push({ id: randomId, callback, once });
        return { self: this, eventId: randomId };
    }

    /**
     * Dispatches an event with the given type and arguments.
     *
     * First, dispatches all events registered for the given type, in the order they were registered.
     * If an event has the `once` flag set, it is removed from the list after being dispatched.
     *
     * Then, dispatches all events registered for any type, in the order they were registered.
     * If an event has the `once` flag set, it is removed from the list after being dispatched.
     *
     * @param type - The type of event to dispatch.
     * @param args - The arguments to pass to the event callbacks.
     * @returns The same instance for chaining.
     */
    public dispatch<K extends keyof EventType, Args extends Parameters<EventType[K]>>(type: K, ...args: Args): this {
        this.eventsList[type]?.forEach(
            (event: { id: string; callback: TBasicCallBack; once: boolean }, index: number) => {
                const { callback, once } = event;
                callback(...args);
                if (once) this.eventsList[type]?.splice(index, 1);
            }
        );
        this.onAnyEventsList.forEach(
            (event: { id: string; callback: TBasicCallBack; once: boolean }, index: number) => {
                const { callback, id, once } = event;
                callback.bind({ id, self: this })(...args);
                if (once) this.onAnyEventsList?.splice(index, 1);
            }
        );
        return this;
    }

    /**
     * Removes all events registered for the given type.
     * @param type - The type of events to clear.
     * @returns The same instance for chaining.
     */
    public clearEvents(type: keyof EventType) {
        const list = this.eventsList[type];
        if (list) list.length = 0;
    }

    /**
     * Removes a specific event from the list of events.
     * If the `type` parameter is not provided, it will remove the event from all event lists.
     * @param id - The id of the event to remove.
     * @param type - Optional. The type of event to remove the event from.
     * @returns The same instance for chaining.
     */
    public clearEvent(id: string, type?: keyof EventType) {
        if (type) {
            const list = this.eventsList[type];
            if (list) {
                list.forEach((event: { id: string; callback: TBasicCallBack; once: boolean }, index: number) => {
                    if (event.id === id) list.splice(index, 1);
                });
            }
        } else {
            Object.keys(this.eventsList).forEach(eventType => {
                const list = this.eventsList[eventType];
                if (list) {
                    list.forEach((event: { id: string; callback: TBasicCallBack; once: boolean }, index: number) => {
                        if (event.id === id) list.splice(index, 1);
                    });
                }
            });
        }
    }

    /**
     * Creates an array in the eventsList property for the given event type if it does not already exist.
     * @param type - The type of event to create an array for.
     * @private
     */
    private _generateEventArray(type: keyof EventType) {
        this.eventsList[type] = this.eventsList[type]
            ? this.eventsList[type]
            : ([] as TEventList<EventType>[keyof EventType]);
    }
}
export { AbsEventListener };
