import { TBasicCallBack } from '@guiurm/utility-types';

class Subscriber<C extends TBasicCallBack = () => void> {
    private _subscriber: Set<C>;

    /**
     * Creates an instance of the Subscriber class.
     *
     * @param {C[]} [fn] - An array of callback functions to be subscribed to the subscriber.
     *                      If not provided, the subscriber will be created with an empty set of callbacks.
     * @memberof Subscriber
     */
    constructor(fn?: C[]) {
        this._subscriber = new Set(fn);
    }

    /**
     * Subscribes the given callback function to the subscriber.
     *
     * @param {C} fn - The callback function to subscribe.
     * @memberof Subscriber
     */
    public subscribe(fn: C): void {
        this._subscriber.add(fn);
    }

    /**
     * Unsubscribes the given callback function from the subscriber.
     *
     * @param {C} fn - The callback function to unsubscribe.
     * @returns {boolean} Whether the callback was found and unsubscribed.
     * @memberof Subscriber
     */
    public unSubscribe(fn: C): boolean {
        return this._subscriber.delete(fn);
    }

    /**
     * Clears all subscribed callback functions from the subscriber.
     *
     * @memberof Subscriber
     */
    public clear(): void {
        this._subscriber.clear();
    }

    /**
     * Dispatches all subscribed callback functions with the given arguments.
     *
     * @param {...Parameters<C>} args - The arguments to be passed to each subscribed callback function.
     * @memberof Subscriber
     */
    public distpach(...args: Parameters<C>): void {
        this._subscriber.forEach(fn => fn(...args));
    }
}

export { Subscriber };
