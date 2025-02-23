import {
    ExtractTupleField,
    ExtractTupleKey,
    TObject2Tuple,
    tupleToObject,
    tupplaFromObject
} from '@guiurm/utility-types';

describe('ExtractTupleField', () => {
    it('should extract the correct field from a tuple', () => {
        type Tuple = [string, number][];
        const tuple: Tuple = [['hello', 42]];
        const extracted: ExtractTupleField<Tuple, string> = tuple[0][1];
        expect(extracted).toBe(42);
    });
});

describe('ExtractTupleKey', () => {
    it('should extract the correct key from a tuple', () => {
        type Tuple = [string, number][];
        const tuple: Tuple = [['hello', 42]];
        const extracted: ExtractTupleKey<Tuple> = tuple[0][0];
        expect(extracted).toBe('hello');
    });
});

describe('TInternTuple', () => {
    it('should convert a tuple to an intern tuple', () => {
        type Tuple = [['name', 'juan']];
        const tuple: Tuple = [['name', 'juan']];
        const internTuple = tupplaFromObject(tupleToObject(tuple));
        expect(internTuple).toEqual(tuple);
    });
});

describe('TObject2Tuple', () => {
    it('should convert an object to a tuple', () => {
        type ObjectType = { foo: string; bar: number; baz: boolean };
        const object: ObjectType = { foo: 'hello', bar: 42, baz: true };
        const tuple: TObject2Tuple<ObjectType> = tupplaFromObject(object);
        expect(tuple.sort()).toEqual(
            [
                ['foo', 'hello'],
                ['bar', 42],
                ['baz', true]
            ].sort()
        );
    });
});
