type IgnoreElement = string | HTMLElement;

interface OnClickOutsideOptions {
    ignore?: IgnoreElement[];
    capture?: boolean;
}

export const onClickOutside = <T extends HTMLElement>(
    target: T,
    handler: (event: MouseEvent) => void,
    options: OnClickOutsideOptions = {}
): (() => void) => {
    const { ignore = [], capture = true } = options;

    const shouldIgnore = (event: MouseEvent): boolean => {
        if (event.composedPath().includes(target)) {
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
        if (!shouldIgnore(event)) {
            handler(event);
        }
    };

    document.addEventListener('click', listener, { capture });

    return () => {
        document.removeEventListener('click', listener, { capture });
    };
};
