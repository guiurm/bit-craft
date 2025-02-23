/**
 * A type that represents a valid URL.
 *
 * A valid URL is either a secure URL (HTTPS) or a non-secure URL (HTTP).
 *
 * @example
 * const secureUrl: TValidUrl = 'https://example.com';
 * const nonSecureUrl: TValidUrl = 'http://example.com';
 */
type TValidUrl = `https://${string}` | `http://${string}`;

/**
 * Type definition for a basic callback function.
 *
 * @template T - The type of arguments that the callback function takes (default is any[]).
 *
 * @param args - The arguments that the callback function takes.
 * @returns void
 */
type TBasicCallBack<T extends any[] = any[]> = (...args: T) => void;

/**
 * Checks if a type is an array.
 *
 * @template V - The type to check.
 * @returns true if the type is an array, false otherwise.
 */
type TisArray<V> = V extends Array<any> ? true : false;

const isArray = <V extends Array<any>>(value: V): value is V => Array.isArray(value);

/**
 * Checks if a type is an object.
 *
 * @template V - The type to check.
 * @returns true if the type is an object, false otherwise.
 */
type TisObject<V> = TisArray<V> extends true ? false : V extends object ? true : false;

/**
 * Type definition for storing window event callbacks.
 *
 * This type maps each event name from the global WindowEventMap to a function signature.
 * The function is called in the context of the Window and receives the event as an argument.
 *
 * @template EventName - The keys representing event names from the WindowEventMap.
 */
type TWindowEventStorage = {
    [EventName in keyof WindowEventMap]: (this: Window, ev: WindowEventMap[EventName]) => void;
};

export { isArray, TBasicCallBack, TisArray, TisObject, TValidUrl, TWindowEventStorage };
