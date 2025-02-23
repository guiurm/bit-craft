import { TOptionalObject, TStringRecord } from '@guiurm/utility-types';

class Collection<Data extends TStringRecord> {
    private readonly _data: TOptionalObject<Data> = {};

    constructor(data: TOptionalObject<Data>) {
        this._data = data;
    }

    public get data() {
        return this._data;
    }

    public get<Key extends keyof typeof this._data>(key: Key): TOptionalObject<Data>[Key] {
        return this._data[key];
    }

    public set<Key extends keyof typeof this._data>(key: Key, value: TOptionalObject<Data>[Key]): Collection<Data> {
        this._data[key] = value;
        return this;
    }

    /*
     * Deletes all values from the object without losing reference
     * */
    public clear(): Collection<Data> {
        for (const member in this._data) delete this._data[member];
        return this;
    }

    [Symbol.iterator]() {
        const values = Object.values(this._data) as Array<TOptionalObject<Data>[keyof Data]>;
        let index = 0;

        return {
            next() {
                if (index < values.length) {
                    const value = values[index];
                    index++;
                    return { value, done: false };
                } else return { done: true };
            }
        };
    }

    public forEach<Key extends keyof Data>(callback: (value: TOptionalObject<Data>[Key], key?: Key) => void) {
        const values = Object.values(this._data) as TOptionalObject<Data>[keyof Data];
        const keys = Object.keys(this._data) as unknown as Array<keyof Data>;

        for (let i = 0; i < values.length; i++) {
            const key = keys[i] as Key;
            callback(values[i], key);
        }
    }
}

export { Collection };
