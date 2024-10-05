import { noop } from '@/globals';

const customNoop = noop as (e: DragEvent) => void;
type TCustomNoop = typeof customNoop;

const dragEventsKeys = [
    'drag',
    'dragend',
    'dragenter',
    'dragstart',
    'dragover',
    'dragexit',
    'dragleave',
    'drop'
] as const;

export type TDragAndDropCallbacks = {
    [K in (typeof dragEventsKeys)[number]]?: TCustomNoop;
};

export type TDragAndDropEvents = {
    [K in keyof TDragAndDropCallbacks as `on${Capitalize<K>}`]-?: TDragAndDropCallbacks[K];
};

export const useDragAndDropItem = (calls: TDragAndDropCallbacks = {}, draggable: boolean = true) => {
    const events = {} as TDragAndDropEvents;

    dragEventsKeys.forEach(eventKey => {
        const fn = calls[eventKey] ?? customNoop;

        const k = `on${eventKey.charAt(0).toUpperCase() + eventKey.slice(1)}` as keyof TDragAndDropEvents;
        events[k] = fn;
    });

    return {
        ...events,
        draggable
    };
};
