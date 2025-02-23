import { KeyValueStorage } from '../src/KeyValueStorage';

describe('KeyValueStorage', () => {
    let storage: KeyValueStorage<{
        key1: string | { foo: string };
        key2: string | { baz: string };
        key3: string | { corge: string };
    }>;

    beforeEach(() => {
        storage = new KeyValueStorage();
    });

    it('should create an empty storage storage', () => {
        expect(storage.getAll()).toEqual([]);
    });

    it('should add a key-value pair to the storage storage', () => {
        storage.add('key1', 'value1');
        expect(storage.getAll()).toEqual([['key1', 'value1']]);
    });

    it('should add multiple key-value pairs to the storage storage', () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        storage.add('key3', 'value3');
        expect(storage.getAll()).toEqual([
            ['key1', 'value1'],
            ['key2', 'value2'],
            ['key3', 'value3']
        ]);
    });

    it('should get a value from the storage storage', () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        expect(storage.get('key1')).toBe('value1');
        expect(storage.get('key2')).toBe('value2');
        expect(storage.get('key3')).toBeNull();
    });

    it('should extract a value from the storage storage', () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        expect(storage.extract('key1')).toBe('value1');
        expect(storage.get('key1')).toBeNull();
        expect(storage.get('key2')).toBe('value2');
    });

    it('should get all key-value pairs stored in the storage storage', () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        storage.add('key3', 'value3');
        const allPairs = storage.getAll();
        expect(allPairs).toEqual([
            ['key1', 'value1'],
            ['key2', 'value2'],
            ['key3', 'value3']
        ]);
    });

    it('should iterate over the key-value pairs in the storage storage', () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        storage.add('key3', 'value3');
        const pairs: any[] = [];
        storage.forEach((data, key, i) => {
            pairs[i] = [key, data];
        });
        expect(pairs).toEqual([
            ['key1', 'value1'],
            ['key2', 'value2'],
            ['key3', 'value3']
        ]);
    });

    it('should find an element in the storage storage by index', () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        storage.add('key3', 'value3');
        expect(storage.findByIndex(0)).toEqual('value1');
        expect(storage.findByIndex(1)).toEqual('value2');
        expect(storage.findByIndex(2)).toEqual('value3');
        expect(storage.findByIndex(3)).toBeNull();
    });

    it("should find an element in the storage storage by 'by' method", () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        storage.add('key3', 'value3');
        expect(storage.find((_, key) => key === 'key1')).toEqual('value1');
        expect(storage.find((_, key) => key === 'key2')).toEqual('value2');
        expect(storage.find((_, key) => key === 'key3')).toEqual('value3');
        expect(storage.find((_, key) => key === 'key4')).toBeNull();
    });

    it('should filter elements in the storage storage', () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        storage.add('key3', 'value3');
        const filtered = storage.filter((_data, key) => key === 'key1' || key === 'key3');
        expect(filtered).toEqual(['value1', 'value3']);
    });

    it('should filter elements in the storage storage with a more complex condition', () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        storage.add('key3', 'value3');
        const filtered = storage.filter((data, _key) => data.length > 5);
        expect(filtered).toEqual(['value1', 'value2', 'value3']);
    });

    it('should return an empty array if no elements match the filter condition', () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        storage.add('key3', 'value3');
        const filtered = storage.filter((_data, _key) => false);
        expect(filtered).toEqual([]);
    });

    it('should map elements in the storage storage', () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        storage.add('key3', 'value3');
        const mapped = storage.map((data, key) => ({ key, value: data.toUpperCase() }));
        expect(mapped).toEqual([
            { key: 'key1', value: 'VALUE1' },
            { key: 'key2', value: 'VALUE2' },
            { key: 'key3', value: 'VALUE3' }
        ]);
    });

    it('should map elements in the storage storage with a more complex transformation', () => {
        storage.add('key1', { foo: 'bar' });
        storage.add('key2', { baz: 'qux' });
        storage.add('key3', { corge: 'grault' });
        const mapped = storage.map((data, key) => ({ key, value: JSON.stringify(data) }));
        expect(mapped).toEqual([
            { key: 'key1', value: '{"foo":"bar"}' },
            { key: 'key2', value: '{"baz":"qux"}' },
            { key: 'key3', value: '{"corge":"grault"}' }
        ]);
    });

    it('should return an empty array if the storage storage is empty', () => {
        const mapped = storage.map((data, key) => ({ key, value: data }));
        expect(mapped).toEqual([]);
    });

    it('should return the first element in the storage storage', () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        storage.add('key3', 'value3');
        expect(storage.first()).toEqual('value1');
    });

    it('should return null if the storage storage is empty', () => {
        expect(storage.first()).toBeNull();
    });

    it('should return the last element in the storage storage', () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        storage.add('key3', 'value3');
        expect(storage.last()).toEqual('value3');
    });

    it('should return null if the storage storage is empty', () => {
        expect(storage.last()).toBeNull();
    });

    it('should iterate over the storage storage synchronously', () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        storage.add('key3', 'value3');
        const result: any[] = [];
        storage
            .forEachSync(async (data, key) => {
                result.push([key, data]);
            })
            .then(() => {
                expect(result).toEqual([
                    ['key1', 'value1'],
                    ['key2', 'value2'],
                    ['key3', 'value3']
                ]);
            });
    });

    it('should iterate over the storage storage asynchronously', async () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        storage.add('key3', 'value3');
        const result: any[] = [];
        await storage.forEachAsync(async (data, key) => {
            result.push([key, data]);
        });
        expect(result).toEqual([
            ['key1', 'value1'],
            ['key2', 'value2'],
            ['key3', 'value3']
        ]);
    });

    it('should remove an element from the storage storage', () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        storage.add('key3', 'value3');
        storage.remove('key2');
        expect(storage.size()).toBe(2);
        expect(storage.get('key1')).toBe('value1');
        expect(storage.get('key2')).toBeNull();
        expect(storage.get('key3')).toBe('value3');
    });

    it('should not remove an element if the key is not found', () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        storage.add('key3', 'value3');
        storage.remove('key4' as any);
        expect(storage.size()).toBe(3);
        expect(storage.get('key1')).toBe('value1');
        expect(storage.get('key2')).toBe('value2');
        expect(storage.get('key3')).toBe('value3');
    });

    it('should remove the last element if the key is the last one', () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        storage.add('key3', 'value3');
        storage.remove('key3');
        expect(storage.size()).toBe(2);
        expect(storage.get('key1')).toBe('value1');
        expect(storage.get('key2')).toBe('value2');
        expect(storage.get('key3')).toBeNull();
    });

    it('should remove the first element if the key is the first one', () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        storage.add('key3', 'value3');
        storage.remove('key1');
        expect(storage.size()).toBe(2);
        expect(storage.get('key1')).toBeNull();
        expect(storage.get('key2')).toBe('value2');
        expect(storage.get('key3')).toBe('value3');
    });

    it('should stop iterating over the key-value pairs in the storage storage', () => {
        storage.add('key1', 'value1');
        storage.add('key2', 'value2');
        storage.add('key3', 'value3');
        const pairs: any[] = [];
        storage.forEach((data, key, i, stop) => {
            pairs[i] = [key, data];
            if (key === 'key2') {
                stop();
            }
        });
        expect(pairs).toEqual([
            ['key1', 'value1'],
            ['key2', 'value2']
        ]);
    });

    it('should create a new storage storage with an initial data object', () => {
        const data = { key1: 'value1', key2: 'value2' };
        const internKeyValueStorage = new KeyValueStorage(data);
        expect(internKeyValueStorage.getAll()).toEqual([
            ['key1', 'value1'],
            ['key2', 'value2']
        ]);
    });
});
