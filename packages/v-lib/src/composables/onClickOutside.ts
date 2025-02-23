import type { TNoppNoArgs } from '@guiurm/utility-types';
import { useDomNativeEventManager } from './domNativeEventManager';

export type IgnoreElement = string | HTMLElement;

export interface OnClickOutsideOptions {
    ignore?: IgnoreElement[];
    capture?: boolean;
    omitChildren?: boolean;
}

/**
 * Creates a function that removes an event listener for a "click" event from the document element.
 * The event listener is added with the "capture" option set to the value of the "capture" option.
 * The event listener is a wrapper around the provided handler function.
 * The wrapper function will only call the handler function if the event target is not the provided target element,
 * nor any of the elements in the provided ignore array, nor a child of the target element if omitChildren is true.
 * The ignore array can contain either strings (which are used to query the document with document.querySelector) or HTMLElements.
 * If the event target matches any of the above criteria, the handler function is not called.
 *
 * @param target The element to which the event listener is attached.
 * @param handler The function that is called when the event listener is triggered.
 * @param options An object with the following properties:
 * - ignore: An array of elements or strings to ignore. Default is an empty array.
 * - capture: A boolean indicating whether the event listener should be added with the "capture" option. Default is true.
 * - omitChildren: A boolean indicating whether the event listener should ignore events on child elements of the target. Default is true.
 * @returns A function that removes the event listener.
 */
export const onClickOutside = <T extends HTMLElement>(
    target: T,
    handler: (event: MouseEvent) => void,
    options: OnClickOutsideOptions = {}
): TNoppNoArgs => {
    const { ignore = [], capture = true, omitChildren = true } = options;

    const shouldIgnore = (event: MouseEvent): boolean => {
        if (omitChildren && event.composedPath().includes(target)) {
            return true;
        }

        return ignore.some(element => {
            if (typeof element === 'string') {
                return document.querySelector(element) === event.target;
            } else {
                return element === event.target;
            }
        });
    };

    const listener = (event: MouseEvent) => {
        if (!shouldIgnore(event)) handler(event);
    };

    return useDomNativeEventManager(document).on('click', listener, { capture });
};
