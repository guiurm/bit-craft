import { TAbsStorageConstructor } from './types';

abstract class AbsStorage<Data, Key = string> {
    private readonly _storage: Map<Key, Data>;

    protected constructor(data?: TAbsStorageConstructor<Key, Data>) {
        this._storage = new Map();

        if (this._isArray(data)) {
            data.forEach(([key, data]) => this.add(key, data));
        } else if (data) {
            for (const dataKey in data) {
                this.add(dataKey as Key, data[dataKey] as Data);
            }
        }
    }

    public get(id: Key): Data | null {
        return this._storage.get(id) ?? null;
    }

    public extract(key: Key): Data | null {
        const data = this._storage.get(key) ?? null;
        this._storage.delete(key);
        return data;
    }

    public getAll(): [key: Key, data: Data][] {
        const data: [key: Key, data: Data][] = [];
        this._storage.forEach((value, key) => {
            data.push([key, value]);
        });
        return data;
    }

    public findByIndex(indexToFind: number) {
        let dataReturn: Data | null = null;
        this._iterate(({ data, index, stop }) => {
            if (indexToFind === index) {
                dataReturn = data;
                stop();
            }
        });

        return dataReturn;
    }

    public find(callback: (data: Data, key: Key) => boolean): Data | null {
        let dataReturn: Data | null = null;
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

    public filter(callback: (data: Data, key: Key) => boolean): Data[] {
        const result: Data[] = [];
        this._iterate(({ data, key }) => {
            const callBackResult = callback(data, key);
            if (typeof callBackResult !== 'boolean')
                throw new Error(`[${this.constructor.name}] callback must return a boolean`);
            if (callBackResult) result.push(data);
        });
        return result;
    }

    public map<V>(fn: (data: Data, key: Key, index: number) => V): V[] {
        const r: V[] = [];
        this._iterate(({ data, index, key }) => r.push(fn(data, key, index)));
        return r;
    }

    public first(): Data | null {
        return this._storage.values().next().value ?? null;
    }

    public last(): Data | null {
        return this.filter(() => true).pop() ?? null;
    }

    public forEach(callback: (data: Data, key: Key, index: number, stop: () => void) => void): void {
        this._iterate(({ data, key, index, stop }) => callback(data, key, index, stop));
    }

    /**
     * Synchronously iterates over each element in the data set.
     */
    public async forEachSync(callback: (data: Data, key: Key, index: number, stop: () => void) => Promise<void>) {
        return this._iterateAsync(({ data, key, index, stop }) => callback(data, key, index, stop), true);
    }

    public async forEachAsync(callback: (data: Data, key: Key, index: number, stop: () => void) => Promise<void>) {
        return this._iterateAsync(({ data, key, index, stop }) => callback(data, key, index, stop), false);
    }

    public add(id: Key, data: Data): this {
        this._storage.set(id, data);
        return this;
    }

    public remove(id: Key): boolean {
        return this._storage.delete(id);
    }

    public exists(data: Data | Key) {
        return this.find((currentDataValue, key) => currentDataValue === data || key === data) !== null;
    }

    public join(separator: string, jsonStringify: boolean = false) {
        let dataReturn = '';
        this._iterate(({ data }) => {
            const toString = jsonStringify
                ? JSON.stringify(data)
                : (data as Object).toString
                  ? (data as Object).toString()
                  : `${data}`;
            dataReturn += `${toString}${separator}`;
        });
        dataReturn = dataReturn.substring(0, dataReturn.lastIndexOf(separator));
        return dataReturn;
    }

    public copy(): this {
        const copy = new (this.constructor as new () => this)();
        this._storage.forEach((value, key) => copy.add(key, value));
        return copy;
    }

    public toString() {
        return JSON.stringify(this.getAll());
    }

    public get size(): number {
        return this._storage.size;
    }

    public clear() {
        this._storage.clear();
    }

    public get keysIterator(): IterableIterator<Key> {
        return this._storage.keys();
    }

    public get valuesIterator(): IterableIterator<Data> {
        return this._storage.values();
    }

    public get keys(): Key[] {
        const keys: Key[] = [];
        this._iterate(({ key }) => keys.push(key));
        return keys;
    }

    public get values(): Data[] {
        const values: Data[] = [];
        this._iterate(({ data }) => values.push(data));
        return values;
    }

    *[Symbol.iterator]() {
        let index = -1;
        for (const [key, value] of this._storage) {
            index++;
            yield { key, value, index };
        }
    }

    private _iterate(fn: (parameters: { data: Data; key: Key; index: number; stop: () => void }) => void) {
        let iteratorDone = false;
        const stop = () => (iteratorDone = true);

        for (const { index, key, value } of this) {
            if (iteratorDone) break;
            fn({ data: value, key, index, stop });
        }
    }

    private async _iterateAsync(
        fn: (parameters: { data: Data; key: Key; index: number; stop: () => void }) => Promise<void>,
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

    private _isArray(data: any): data is [key: Key, data: Data][] {
        return Array.isArray(data);
    }

    private _validRecordKey(key: any): key is string | number {
        return typeof key === 'number' || typeof key === 'string';
    }
}

export { AbsStorage };
