import { TupleStorage } from '../src/TupleStorage';

describe('TupleStorage', () => {
    let tupleStorage: TupleStorage<any>;

    beforeEach(() => {
        tupleStorage = new TupleStorage();
    });

    it('should create an empty tuple storage', () => {
        expect(tupleStorage.getAll()).toEqual([]);
    });

    it('should add a key-value pair to the tuple storage', () => {
        tupleStorage.add('key1', 'value1');
        expect(tupleStorage.getAll()).toEqual([['key1', 'value1']]);
    });

    it('should add multiple key-value pairs to the tuple storage', () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        tupleStorage.add('key3', 'value3');
        expect(tupleStorage.getAll()).toEqual([
            ['key1', 'value1'],
            ['key2', 'value2'],
            ['key3', 'value3']
        ]);
    });

    it('should get a value from the tuple storage', () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        expect(tupleStorage.get('key1')).toBe('value1');
        expect(tupleStorage.get('key2')).toBe('value2');
        expect(tupleStorage.get('key3')).toBeNull();
    });

    it('should extract a value from the tuple storage', () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        expect(tupleStorage.extract('key1')).toBe('value1');
        expect(tupleStorage.get('key1')).toBeNull();
        expect(tupleStorage.get('key2')).toBe('value2');
    });

    it('should get all key-value pairs stored in the tuple storage', () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        tupleStorage.add('key3', 'value3');
        const allPairs = tupleStorage.getAll();
        expect(allPairs).toEqual([
            ['key1', 'value1'],
            ['key2', 'value2'],
            ['key3', 'value3']
        ]);
    });

    it('should iterate over the key-value pairs in the tuple storage', () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        tupleStorage.add('key3', 'value3');
        const pairs: any[] = [];
        tupleStorage.forEach((data, key, i) => {
            pairs[i] = [key, data];
        });
        expect(pairs).toEqual([
            ['key1', 'value1'],
            ['key2', 'value2'],
            ['key3', 'value3']
        ]);
    });

    it('should find an element in the tuple storage by index', () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        tupleStorage.add('key3', 'value3');
        expect(tupleStorage.findByIndex(0)).toEqual('value1');
        expect(tupleStorage.findByIndex(1)).toEqual('value2');
        expect(tupleStorage.findByIndex(2)).toEqual('value3');
        expect(tupleStorage.findByIndex(3)).toBeNull();
    });

    it("should find an element in the tuple storage by 'by' method", () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        tupleStorage.add('key3', 'value3');
        expect(tupleStorage.find((_, key) => key === 'key1')).toEqual('value1');
        expect(tupleStorage.find((_, key) => key === 'key2')).toEqual('value2');
        expect(tupleStorage.find((_, key) => key === 'key3')).toEqual('value3');
        expect(tupleStorage.find((_, key) => key === 'key4')).toBeNull();
    });

    it('should filter elements in the tuple storage', () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        tupleStorage.add('key3', 'value3');
        const filtered = tupleStorage.filter((_data, key) => key === 'key1' || key === 'key3');
        expect(filtered).toEqual(['value1', 'value3']);
    });

    it('should filter elements in the tuple storage with a more complex condition', () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        tupleStorage.add('key3', 'value3');
        const filtered = tupleStorage.filter((data, _key) => data.length > 5);
        expect(filtered).toEqual(['value1', 'value2', 'value3']);
    });

    it('should return an empty array if no elements match the filter condition', () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        tupleStorage.add('key3', 'value3');
        const filtered = tupleStorage.filter((_data, _key) => false);
        expect(filtered).toEqual([]);
    });

    it('should map elements in the tuple storage', () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        tupleStorage.add('key3', 'value3');
        const mapped = tupleStorage.map((data, key) => ({ key, value: data.toUpperCase() }));
        expect(mapped).toEqual([
            { key: 'key1', value: 'VALUE1' },
            { key: 'key2', value: 'VALUE2' },
            { key: 'key3', value: 'VALUE3' }
        ]);
    });

    it('should map elements in the tuple storage with a more complex transformation', () => {
        tupleStorage.add('key1', { foo: 'bar' });
        tupleStorage.add('key2', { baz: 'qux' });
        tupleStorage.add('key3', { corge: 'grault' });
        const mapped = tupleStorage.map((data, key) => ({ key, value: JSON.stringify(data) }));
        expect(mapped).toEqual([
            { key: 'key1', value: '{"foo":"bar"}' },
            { key: 'key2', value: '{"baz":"qux"}' },
            { key: 'key3', value: '{"corge":"grault"}' }
        ]);
    });

    it('should return an empty array if the tuple storage is empty', () => {
        const mapped = tupleStorage.map((data, key) => ({ key, value: data }));
        expect(mapped).toEqual([]);
    });

    it('should return the first element in the tuple storage', () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        tupleStorage.add('key3', 'value3');
        expect(tupleStorage.first()).toEqual('value1');
    });

    it('should return null if the tuple storage is empty', () => {
        expect(tupleStorage.first()).toBeNull();
    });

    it('should return the last element in the tuple storage', () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        tupleStorage.add('key3', 'value3');
        expect(tupleStorage.last()).toEqual('value3');
    });

    it('should return null if the tuple storage is empty', () => {
        expect(tupleStorage.last()).toBeNull();
    });

    it('should iterate over the tuple storage synchronously', () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        tupleStorage.add('key3', 'value3');
        const result: any[] = [];
        tupleStorage
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

    it('should iterate over the tuple storage asynchronously', async () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        tupleStorage.add('key3', 'value3');
        const result: any[] = [];
        await tupleStorage.forEachAsync(async (data, key) => {
            result.push([key, data]);
        });
        expect(result).toEqual([
            ['key1', 'value1'],
            ['key2', 'value2'],
            ['key3', 'value3']
        ]);
    });

    it('should remove an element from the tuple storage', () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        tupleStorage.add('key3', 'value3');
        tupleStorage.remove('key2');
        expect(tupleStorage.size()).toBe(2);
        expect(tupleStorage.get('key1')).toBe('value1');
        expect(tupleStorage.get('key2')).toBeNull();
        expect(tupleStorage.get('key3')).toBe('value3');
    });

    it('should not remove an element if the key is not found', () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        tupleStorage.add('key3', 'value3');
        tupleStorage.remove('key4');
        expect(tupleStorage.size()).toBe(3);
        expect(tupleStorage.get('key1')).toBe('value1');
        expect(tupleStorage.get('key2')).toBe('value2');
        expect(tupleStorage.get('key3')).toBe('value3');
    });

    it('should remove the last element if the key is the last one', () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        tupleStorage.add('key3', 'value3');
        tupleStorage.remove('key3');
        expect(tupleStorage.size()).toBe(2);
        expect(tupleStorage.get('key1')).toBe('value1');
        expect(tupleStorage.get('key2')).toBe('value2');
        expect(tupleStorage.get('key3')).toBeNull();
    });

    it('should remove the first element if the key is the first one', () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        tupleStorage.add('key3', 'value3');
        tupleStorage.remove('key1');
        expect(tupleStorage.size()).toBe(2);
        expect(tupleStorage.get('key1')).toBeNull();
        expect(tupleStorage.get('key2')).toBe('value2');
        expect(tupleStorage.get('key3')).toBe('value3');
    });

    it('should stop iterating over the key-value pairs in the tuple storage', () => {
        tupleStorage.add('key1', 'value1');
        tupleStorage.add('key2', 'value2');
        tupleStorage.add('key3', 'value3');
        const pairs: any[] = [];
        tupleStorage.forEach((data, key, i, stop) => {
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

    it('should create a new tuple storage with an initial data object', () => {
        const data = { key1: 'value1', key2: 'value2' };
        tupleStorage = new TupleStorage(data);
        expect(tupleStorage.getAll()).toEqual([
            ['key1', 'value1'],
            ['key2', 'value2']
        ]);
    });

    it('should create a new tuple storage with an initial array of key-value pairs', () => {
        const data = [
            ['key1', 'value1'],
            ['key2', 'value2']
        ];
        tupleStorage = new TupleStorage(data);
        expect(tupleStorage.getAll()).toEqual([
            ['key1', 'value1'],
            ['key2', 'value2']
        ]);
    });
});
