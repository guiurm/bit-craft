import { TStringRecord } from '@guiurm/utility-types';
import { AbsEventListener } from './AbsEventListener';

/**
 * An object where each property corresponds to an event, with the value being an array of objects containing an `id`, a `callback` function for that event, and a `once` flag indicating whether the event should be fired only once.
 *
 * @template Events - A record type representing the available events, where each event corresponds to a function type (callback).
 *
 * @example
 * type MyEvents = {
 *   onClick: (x: number) => void;
 *   onResize: (width: number, height: number) => void;
 * };
 *
 * const eventList: TEventList<MyEvents> = {
 *   onClick: [
 *     { id: 'clickHandler1', callback: (x) => console.log(x), once: true }
 *   ],
 *   onResize: [
 *     { id: 'resizeHandler1', callback: (width, height) => console.log(width, height), once: false }
 *   ]
 * };
 */
type TEventList<Events> = {
    [key in keyof Events]?: Array<{ id: string; callback: Events[key]; once: boolean }>;
};

/**
 * An array of event listener objects, where each object contains an `id`, a `callback` for an event, and a `once` flag.
 * This type represents a collection of listeners that are not tied to a specific event type, meaning they can handle any event from the `Events` type.
 *
 * @template Events - A record type representing the available events and their corresponding callback functions.
 *
 * @example
 * type MyEvents = {
 *   onClick: (x: number) => void;
 *   onResize: (width: number, height: number) => void;
 * };
 *
 * const onAnyEventList: TOnAnyEventList<MyEvents> = [
 *   { id: 'anyEventHandler1', callback: (x) => console.log(x), once: true },
 *   { id: 'anyEventHandler2', callback: (width, height) => console.log(width, height), once: false }
 * ];
 */
type TOnAnyEventList<Events> = Array<{ id: string; callback: Events[keyof Events]; once: boolean }>;

/**
 * A return type for event listeners, which includes the listener instance and the event ID.
 * This type is useful when managing event listeners that track the specific event they are associated with.
 *
 * @template EventType - The type of events the listener handles, extending `TStringRecord`.
 * @template ListenerInstance - The type of the listener instance, which should extend `AbsEventListener`.
 *
 * @example
 * type MyEvents = {
 *   onClick: (x: number) => void;
 *   onResize: (width: number, height: number) => void;
 * };
 *
 * class MyListener implements AbsEventListener<MyEvents> {
 *   // Implementation here
 * }
 *
 * const listenerInstance = new MyListener();
 * const eventListenerReturn: EventListenerOnReturn<MyEvents, MyListener> = {
 *   self: listenerInstance,
 *   eventId: 'onClick'
 * };
 */
type EventListenerOnReturn<EventType extends TStringRecord, ListenerInstance extends AbsEventListener<EventType>> = {
    self: ListenerInstance;
    eventId: string;
};

export { EventListenerOnReturn, TEventList, TOnAnyEventList };
