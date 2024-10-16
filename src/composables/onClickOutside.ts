import type { TNoppNoArgs } from '@/globals';
import { useDomNativeEventManager } from './domNativeEventManager';

export type IgnoreElement = string | HTMLElement;

export interface OnClickOutsideOptions {
    ignore?: IgnoreElement[];
    capture?: boolean;
    omitChildren?: boolean;
}

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
