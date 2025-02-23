import {
    ExtractTupleField,
    ExtractTupleKey,
    TObject2Tuple,
    TStringRecord,
    tupleToObject,
    tupplaFromObject
} from '@guiurm/utility-types';
import { TupleStorage } from './TupleStorage';
import { TInternTuple } from './types';

class KeyValueStorage<V extends TStringRecord = {}> extends TupleStorage<TObject2Tuple<V>> {
    constructor(data?: V) {
        super(tupplaFromObject(data as V) ?? []);
    }

    /**
     * Gets the value associated with the given key.
     * @param {K} key - The key to be searched in the tuple.
     * @returns {ExtractTupleField<TInternTuple<V>, K> extends never ? null : ExtractTupleField<TInternTuple<V>, K> | null} The value associated with the key if found, null otherwise.
     */
    public get<K extends ExtractTupleKey<TInternTuple<V>>>(
        key: K
    ): ExtractTupleField<TInternTuple<V>, K> extends never ? null : ExtractTupleField<TInternTuple<V>, K> | null {
        return super.get(key);
    }

    /**
     * Retrieves the value associated with the given key from the tuple, and removes that key-value pair from the tuple.
     * @param {K} key - The key to be searched in the tuple.
     * @returns {ExtractTupleField<TInternTuple<TObject2Tuple<V>>, K> extends never ? null : ExtractTupleField<TInternTuple<TObject2Tuple<V>>, K> | null} The value associated with the key if found, null otherwise.
     */
    public extract<K extends ExtractTupleKey<TInternTuple<TObject2Tuple<V>>>>(
        key: K
    ): ExtractTupleField<TInternTuple<TObject2Tuple<V>>, K> extends never
        ? null
        : ExtractTupleField<TInternTuple<TObject2Tuple<V>>, K> | null {
        return super.extract(key);
    }

    /**
     * Retrieves all key-value pairs stored in the tuple.
     * @returns {TInternTuple<TObject2Tuple<V>>} A tuple containing all key-value pairs as an array of tuples.
     */
    public getAll(): TInternTuple<TObject2Tuple<V>> {
        return super.getAll();
    }

    /**
     * Finds the first element in the tuple that satisfies the given callback function.
     *
     * @param {function(K, ExtractTupleField<TInternTuple<TObject2Tuple<V>>, K>): boolean} callback
     * - A function that takes an element of the tuple, its associated key, and its index, and
     * returns a boolean.
     * @returns {TInternTuple<TObject2Tuple<V>>[number][1] | null} The first element that satisfies the callback, or null if none is found.
     */
    public find(
        callback: <K extends ExtractTupleKey<TInternTuple<TObject2Tuple<V>>>>(
            data: K,
            key: ExtractTupleField<TInternTuple<TObject2Tuple<V>>, K>
        ) => boolean
    ): TInternTuple<TObject2Tuple<V>>[number][1] | null {
        return super.find(callback);
    }

    /**
     * Filters the elements in the tuple based on the given callback function.
     *
     * @param {function(K, ExtractTupleField<TInternTuple<TObject2Tuple<V>>, K>): boolean} callback
     * - A function that takes an element of the tuple, its associated key, and its index, and
     * returns a boolean.
     * @returns {TInternTuple<TObject2Tuple<V>>[number][]} An array of elements that satisfy the callback condition.
     */
    public filter(
        callback: <K extends ExtractTupleKey<TInternTuple<TObject2Tuple<V>>>>(
            data: K,
            key: ExtractTupleField<TInternTuple<TObject2Tuple<V>>, K>
        ) => boolean
    ): TInternTuple<TObject2Tuple<V>>[number][] {
        return super.filter(callback);
    }

    /**
     * Applies a transformation function to each element in the tuple and returns a new array containing the
     * results of the transformation.
     *
     * @param {function(K, ExtractTupleField<TInternTuple<TObject2Tuple<V>>, K>, number): R} fn
     * - A function that takes an element of the tuple, its associated key, and its index, and
     * returns a new value.
     * @returns {R[]} An array of transformed values.
     */
    public map<R>(
        fn: <K extends ExtractTupleKey<TInternTuple<TObject2Tuple<V>>>>(
            data: K,
            key: ExtractTupleField<TInternTuple<TObject2Tuple<V>>, K>,
            index: number
        ) => R
    ): R[] {
        return super.map(fn);
    }

    /**
     * Returns the first element in the tuple.
     *
     * @returns {ExtractTupleField<TInternTuple<V>, ExtractTupleKey<TInternTuple<V>>> | null} The first element in the tuple, or null if the tuple is empty.
     */
    public first(): ExtractTupleField<TInternTuple<V>, ExtractTupleKey<TInternTuple<V>>> | null {
        return super.first();
    }

    /**
     * Returns the last element in the tuple.
     *
     * @returns {ExtractTupleField<TInternTuple<V>, ExtractTupleKey<TInternTuple<V>>> | null} The last element in the tuple, or null if the tuple is empty.
     */
    public last(): ExtractTupleField<TInternTuple<V>, ExtractTupleKey<TInternTuple<V>>> | null {
        return super.last();
    }

    /**
     * Synchronously iterates over each element in the tuple, invoking the provided function
     * with the associated data, key, and index. The iteration can be stopped by calling
     * the `stop` function provided in the parameters.
     *
     * @param {function(K, ExtractTupleField<TInternTuple<V>, K>, number, () => void): void} callback
     * - A function that is called for each key-value pair in the tuple. It receives
     * an object containing the data, key, index, and a stop function to halt the iteration.
     * @returns {void} nothing
     */
    public forEach(
        callback: <K extends ExtractTupleKey<TInternTuple<V>>>(
            data: ExtractTupleField<TInternTuple<V>, K>,
            key: K,
            index: number,
            stop: () => void
        ) => void
    ): void {
        return super.forEach(callback);
    }

    /**
     * Iterates over each element in the tuple asynchronously, invoking the provided function
     * with the associated data, key, and index. The iteration can be stopped by calling
     * the `stop` function provided in the parameters.
     *
     * @param {function(K, ExtractTupleField<TInternTuple<V>, K>, number, () => void): Promise<void>} callback
     * - A function that is called for each key-value pair in the tuple. It receives
     * an object containing the data, key, index, and a stop function to halt the iteration.
     * @returns {Promise<void>} A promise that resolves when the iteration is complete.
     */
    public async forEachSync(
        callback: <K extends ExtractTupleKey<TInternTuple<V>>>(
            data: ExtractTupleField<TInternTuple<V>, K>,
            key: K,
            index: number,
            stop: () => void
        ) => Promise<void>
    ): Promise<void> {
        return await super.forEachSync(callback);
    }

    /**
     * Iterates over each element in the tuple asynchronously, invoking the provided function
     * with the associated data, key, and index. The iteration can be stopped by calling
     * the `stop` function provided in the parameters.
     *
     * @param {function(K, ExtractTupleField<TInternTuple<V>, K>, number, () => void): Promise<void>} callback
     * - A function that is called for each key-value pair in the tuple. It receives
     * an object containing the data, key, index, and a stop function to halt the iteration.
     * @returns {Promise<void>} A promise that resolves when the iteration is complete.
     */
    public async forEachAsync(
        callback: <K extends ExtractTupleKey<TInternTuple<V>>>(
            data: ExtractTupleField<TInternTuple<V>, K>,
            key: K,
            index: number,
            stop: () => void
        ) => Promise<void>
    ): Promise<void> {
        return await super.forEachAsync(callback);
    }

    /**
     * Adds a new element to the tuple. If the key already exists, the value is updated.
     * @param {K} key - The key of the element to be added.
     * @param {ExtractTupleField<TInternTuple<V>, K>} value - The value associated with the key.
     * @returns {this} The tuple storage object itself, for chaining.
     */
    public add<K extends ExtractTupleKey<TInternTuple<V>>>(key: K, value: ExtractTupleField<TInternTuple<V>, K>): this {
        return super.add(key, value);
    }

    /**
     * Removes the element associated with the given key from the tuple.
     * @param {K} key - The key of the element to be removed.
     * @returns {boolean} True if the element was found and removed, false otherwise.
     */
    public remove<K extends ExtractTupleKey<TInternTuple<V>>>(key: K): boolean {
        return super.remove(key);
    }

    /**
     * Checks if the tuple contains a key.
     * @param {ExtractTupleKey<TInternTuple<V>>} key - The key to be searched.
     * @returns {boolean} True if the key was found, false otherwise.
     */
    public existsKey(key: ExtractTupleKey<TInternTuple<V>>): boolean {
        return super.existsKey(key);
    }

    /**
     * Checks if the tuple contains a value.
     * @param {ExtractTupleField<TInternTuple<V>, K>} value - The value to be searched.
     * @returns {boolean} True if the value was found, false otherwise.
     */
    public existsData<K extends ExtractTupleKey<TInternTuple<V>>>(
        value: ExtractTupleField<TInternTuple<V>, K>
    ): boolean {
        return super.existsData(value);
    }

    /**
     * Removes all elements from the tuple.
     * @returns {this} The tuple storage object itself, for chaining.
     */
    public clear(): this {
        return super.clear();
    }

    /**
     * Retrieves an array of keys from the tuple.
     *
     * @returns {ExtractTupleKey<TInternTuple<V>>[]} An array of keys, which are the first elements of each tuple.
     */
    public keys(): ExtractTupleKey<TInternTuple<V>>[] {
        return super.keys();
    }

    /**
     * Retrieves an array of values from the tuple.
     *
     * @returns {V[keyof V][]} An array of values, which are the second elements of each tuple.
     */
    public values(): V[keyof V][] {
        return super.values() as V[keyof V][];
    }

    /**
     * Returns the number of elements in the tuple.
     *
     * @returns {number} The size of the tuple.
     */
    public size(): number {
        return super.size();
    }

    /**
     * Returns the number of elements in the tuple.
     *
     * @returns {number} The size of the tuple.
     */
    public toString(): string {
        return JSON.stringify(tupleToObject(this._tuple));
    }
}

export { KeyValueStorage };
