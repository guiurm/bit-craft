import { ExtractTupleField, ExtractTupleKey, TTuplaStructure, isArray, tupplaFromObject } from '@guiurm/utility-types';
import { TInternTuple } from './types';

class TupleStorage<D extends TTuplaStructure | Record<string, any>> {
    protected readonly _tuple!: TInternTuple<D>;

    constructor(d?: D) {
        this._tuple =
            d !== undefined
                ? isArray(d as any[])
                    ? (d as TInternTuple<D>)
                    : typeof d === 'object'
                      ? (tupplaFromObject(d) as TInternTuple<D>)
                      : ([] as unknown as TInternTuple<D>)
                : ([] as unknown as TInternTuple<D>);
    }

    /**
     * Gets the value associated with the given key.
     * @param key The key to be searched in the tuple.
     * @returns The value associated with the key if found, null otherwise.
     */
    public get<K extends ExtractTupleKey<TInternTuple<D>>>(
        key: K
    ): ExtractTupleField<TInternTuple<D>, K> extends never ? null : ExtractTupleField<TInternTuple<D>, K> | null {
        let data = this._tuple.find(i => i[0] == key);

        return data ? (data[1] as ExtractTupleField<TInternTuple<D>, K>) : null;
    }

    /**
     * Retrieves the value associated with the given key from the tuple, and removes that key-value pair from the tuple.
     * @param key The key to be searched in the tuple.
     * @returns The value associated with the key if found, null otherwise.
     */
    public extract<K extends ExtractTupleKey<TInternTuple<D>>>(
        key: K
    ): ExtractTupleField<TInternTuple<D>, K> extends never ? null : ExtractTupleField<TInternTuple<D>, K> | null {
        let data = this._tuple.find(i => i[0] === key);
        let rest = this._tuple.filter(i => i[0] !== key);
        //(this._tuple as any[]).length = 0;
        this.clear();
        (this._tuple as any[]).push(...rest);

        return data ? (data[1] as ExtractTupleField<TInternTuple<D>, K>) : null;
    }

    /**
     * Retrieves all key-value pairs stored in the tuple.
     *
     * @returns A tuple containing all key-value pairs as an array of tuples.
     */
    public getAll(): TInternTuple<D> {
        return [...this._tuple] as TInternTuple<D>;
    }

    *[Symbol.iterator]() {
        let index = -1;
        for (const [K, V] of this._tuple) {
            index++;
            yield {
                key: K as ExtractTupleKey<TInternTuple<D>>,
                value: V as ExtractTupleField<TInternTuple<D>, typeof K>,
                index
            };
        }
    }

    /**
     * Iterates over each key-value pair in the tuple, invoking the provided function
     * with the associated data, key, and index. The iteration can be stopped by calling
     * the `stop` function provided in the parameters.
     *
     * @param fn - A function that is called for each key-value pair in the tuple. It receives
     * an object containing the data, key, index, and a stop function to halt the iteration.
     */
    private _iterate(
        fn: <K extends ExtractTupleKey<TInternTuple<D>>>(parameters: {
            data: K;
            key: ExtractTupleField<TInternTuple<D>, K>;
            index: number;
            stop: () => void;
        }) => void
    ) {
        let iteratorDone = false;
        const stop = () => (iteratorDone = true);

        for (const { index, key, value } of this) {
            if (iteratorDone) break;
            fn({ data: value, key, index, stop });
        }
    }

    /**
     * Iterates over each key-value pair in the tuple, invoking the provided function
     * with the associated data, key, and index. The iteration can be stopped by calling
     * the `stop` function provided in the parameters. The function can be invoked
     * synchronously by setting `forceSync` to `true`.
     *
     * @param fn - A function that is called for each key-value pair in the tuple. It receives
     * an object containing the data, key, index, and a stop function to halt the iteration.
     * @param forceSync - If set to true, the function will be invoked synchronously. If set to false,
     * the function will be invoked asynchronously and the returned promise will be resolved when
     * all the promises returned by the function have been resolved or rejected.
     * @returns A promise that is resolved when all the promises returned by the function have been resolved,
     * or rejected if any of the promises have been rejected.
     */
    private async _iterateAsync(
        fn: <K extends ExtractTupleKey<TInternTuple<D>>>(parameters: {
            data: K;
            key: ExtractTupleField<TInternTuple<D>, K>;
            index: number;
            stop: () => void;
        }) => Promise<void>,
        forceSync: boolean = false
    ): Promise<void> {
        const promises: Promise<void>[] = [];

        let iteratorDone = false;
        const stop = () => (iteratorDone = true);

        for (const { index, key, value } of this) {
            if (iteratorDone) break;
            if (forceSync) await fn({ data: value, key, index, stop });
            else promises.push(fn({ data: value, key, index, stop }));
        }

        return new Promise((resolve, reject) => {
            Promise.allSettled(promises)
                .then(() => {
                    resolve(void 0);
                })
                .catch(reason => reject(reason));
        });
    }

    /**
     * Finds the element in the tuple at the given index.
     * @param indexToFind - The index of the element to find.
     * @returns The element at the given index if found, null otherwise.
     */
    public findByIndex(indexToFind: number): TInternTuple<D>[typeof indexToFind] | null {
        let dataReturn: TInternTuple<D>[typeof indexToFind] | null = null;

        this._iterate(({ data, index, stop }) => {
            if (indexToFind === index) {
                dataReturn = data;
                stop();
            }
        });

        return dataReturn;
    }

    /**
     * Finds the first element in the tuple that satisfies the given callback function.
     * @param callback A function that takes an element of the tuple and its associated key and returns a boolean.
     * @returns The first element that satisfies the callback, or null if none is found.
     */
    public find(
        callback: <K extends ExtractTupleKey<TInternTuple<D>>>(
            data: K,
            key: ExtractTupleField<TInternTuple<D>, K>
        ) => boolean
    ): TInternTuple<D>[number][1] | null {
        let dataReturn: TInternTuple<D>[number][1] | null = null;

        this._iterate(({ data, key, stop }) => {
            const callBackResult = callback(data, key);

            if (typeof callBackResult !== 'boolean')
                throw new Error(`[${this.constructor.name}] callback must return a boolean`);
            if (callBackResult) {
                dataReturn = data;
                stop();
            }
        });
        return dataReturn;
    }

    /**
     * Filters the elements in the tuple based on the given callback function.
     * Iterates over each element, invoking the callback with the element's data and key.
     * If the callback returns true, the element is included in the resultant array.
     *
     * @param callback - A function that evaluates each element and its key, returning a boolean
     *                   to determine if the element should be included in the result.
     * @returns An array of elements that satisfy the callback condition.
     * @throws Error if the callback does not return a boolean.
     */
    public filter(
        callback: <K extends ExtractTupleKey<TInternTuple<D>>>(
            data: K,
            key: ExtractTupleField<TInternTuple<D>, K>
        ) => boolean
    ): TInternTuple<D>[number][] {
        const result: TInternTuple<D>[number][] = [];
        this._iterate(({ data, key }) => {
            const callBackResult = callback(data, key);
            if (typeof callBackResult !== 'boolean')
                throw new Error(`[${this.constructor.name}] callback must return a boolean`);
            if (callBackResult) result.push(data);
        });
        return result;
    }

    /**
     * Applies a transformation function to each element in the tuple and returns a new array containing the
     * results of the transformation.
     *
     * @param fn - A function that takes an element from the tuple, its associated key, and its index, and
     *             returns a new value.
     * @returns An array of transformed values.
     */
    public map<V>(
        fn: <K extends ExtractTupleKey<TInternTuple<D>>>(
            data: K,
            key: ExtractTupleField<TInternTuple<D>, K>,
            index: number
        ) => V
    ): V[] {
        const r: V[] = [];
        this._iterate(({ data, index, key }) => r.push(fn(data, key, index)));
        return r;
    }

    /**
     * Retrieves the first value from the tuple.
     *
     * @returns The first value associated with any key in the tuple, or null if the tuple is empty.
     */
    public first(): ExtractTupleField<TInternTuple<D>, ExtractTupleKey<TInternTuple<D>>> | null {
        return this.find(() => true) ?? null;
    }

    /**
     * Retrieves the last value from the tuple.
     *
     * @returns The last value associated with any key in the tuple, or null if the tuple is empty.
     */
    public last(): ExtractTupleField<TInternTuple<D>, ExtractTupleKey<TInternTuple<D>>> | null {
        return this.filter(() => true).pop() ?? null;
    }

    /**
     * Synchronously iterates over each element in the tuple, invoking the provided function
     * with the associated data, key, and index. The iteration can be stopped by calling
     * the `stop` function provided in the parameters.
     *
     * @param callback - A function that is called for each key-value pair in the tuple. It receives
     * an object containing the data, key, index, and a stop function to halt the iteration.
     */
    public forEach(
        callback: <K extends ExtractTupleKey<TInternTuple<D>>>(
            data: ExtractTupleField<TInternTuple<D>, K>,
            key: K,
            index: number,
            stop: () => void
        ) => void
    ): void {
        this._iterate(({ data, key, index, stop }) => callback(data, key, index, stop));
    }

    /**
     * Synchronously iterates over each element in the tuple, invoking the provided function
     * with the associated data, key, and index. The iteration can be stopped by calling
     * the `stop` function provided in the parameters.
     *
     * @param callback - A function that is called for each key-value pair in the tuple. It receives
     * an object containing the data, key, index, and a stop function to halt the iteration.
     * @returns A promise that resolves when the iteration is complete.
     */
    public async forEachSync(
        callback: <K extends ExtractTupleKey<TInternTuple<D>>>(
            data: ExtractTupleField<TInternTuple<D>, K>,
            key: K,
            index: number,
            stop: () => void
        ) => Promise<void>
    ) {
        return this._iterateAsync(({ data, key, index, stop }) => callback(data, key, index, stop), true);
    }

    /**
     * Iterates over each element in the tuple asynchronously, invoking the provided function
     * with the associated data, key, and index. The iteration can be stopped by calling
     * the `stop` function provided in the parameters.
     *
     * @param callback - A function that is called for each key-value pair in the tuple. It receives
     * an object containing the data, key, index, and a stop function to halt the iteration.
     * @returns A promise that resolves when the iteration is complete.
     */
    public async forEachAsync(
        callback: <K extends ExtractTupleKey<TInternTuple<D>>>(
            data: ExtractTupleField<TInternTuple<D>, K>,
            key: K,
            index: number,
            stop: () => void
        ) => Promise<void>
    ) {
        return this._iterateAsync(({ data, key, index, stop }) => callback(data, key, index, stop), false);
    }

    /**
     * Adds a new element to the tuple. If the key already exists, the value is updated.
     * @param key - The key of the element to be added.
     * @param value - The value associated with the key.
     * @returns The tuple storage object itself, for chaining.
     */
    public add<K extends ExtractTupleKey<TInternTuple<D>>>(key: K, value: ExtractTupleField<TInternTuple<D>, K>): this {
        const data = this._tuple.find(i => i[0] === key);
        if (!data) (this._tuple as any[]).push([key, value]);
        else (data as any)[1] = value;
        //this._storage.set(id, data);
        return this;
    }

    /**
     * Removes the element associated with the given key from the tuple.
     * @param key - The key of the element to be removed.
     * @returns True if the element was found and removed, false otherwise.
     */
    public remove<K extends ExtractTupleKey<TInternTuple<D>>>(key: K): boolean {
        const filtered = this._tuple.filter(i => i[0] !== key);
        if (filtered.length === this._tuple.length) return false;
        //(this._tuple as any[]).length = 0;
        this.clear();
        (this._tuple as any[]).push(...filtered);
        return true;
    }

    /**
     * Checks if the given key exists in the tuple.
     * @param key - The key to be searched in the tuple.
     * @returns True if the key exists, false otherwise.
     */
    public existsKey(key: ExtractTupleKey<TInternTuple<D>>): boolean {
        return this.get(key) !== null;
    }

    /**
     * Checks if the given data exists in the tuple.
     * @param value - The data value to be searched in the tuple.
     * @returns True if the data exists, false otherwise.
     */
    public existsData<K extends ExtractTupleKey<TInternTuple<D>>>(
        value: ExtractTupleField<TInternTuple<D>, K>
    ): boolean {
        return this.find(currentDataValue => currentDataValue === value) !== null;
    }

    /**
     * Removes all elements from the tuple.
     *
     * @returns The tuple storage object itself, for chaining.
     */
    public clear(): this {
        (this._tuple as any[]).length = 0;
        return this;
    }

    /**
     * Retrieves an array of keys from the tuple.
     *
     * @returns An array of keys, which are the first elements of each tuple.
     */
    public keys(): ExtractTupleKey<TInternTuple<D>>[] {
        return this._tuple.map(i => i[0]);
    }

    /**
     * Retrieves an array of values from the tuple.
     *
     * @returns An array of values, which are the second elements of each tuple.
     */
    public values(): ExtractTupleField<TInternTuple<D>, ExtractTupleKey<TInternTuple<D>>>[] {
        return this._tuple.map(i => i[1]);
    }

    /**
     * Retrieves the number of elements in the tuple.
     *
     * @returns The number of elements in the tuple.
     */
    public size(): number {
        return this._tuple.length;
    }

    /**
     * Converts the tuple to a JSON string.
     *
     * @returns A string representation of the tuple in JSON format.
     */
    public toString() {
        return JSON.stringify(this._tuple);
    }
}

export { TupleStorage };
