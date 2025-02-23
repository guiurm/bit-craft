import { TBasicCallBack } from './datatTypes';

/**
 * A utility type that creates a record where the keys are of type `K` and the values are of type `V`.
 * This type is useful when you want to define an object with dynamic string keys and specific value types.
 *
 * @template V - The type of the values in the record. Defaults to `any`.
 * @template K - The type of the keys in the record. Defaults to `string`.
 *
 * @example
 * const stringRecord: TStringRecord<number, 'a' | 'b'> = {
 *   a: 1,
 *   b: 2
 * };
 */
type TStringRecord<V = any, K extends string = string> = {
    [key in K]: V;
};

/**
 * A basic listener interface that maps property names to callback functions of a specific type.
 * The callback type is generic, allowing for flexibility in how arguments are passed to the listener.
 * The properties of the interface can be any valid string, and each maps to a callback.
 *
 * @template T - A tuple of arguments for the callback function. Defaults to `any[]`.
 *
 * @example
 * const listener: IBasicListener<[string, number]> = {
 *   someCallback: (arg1, arg2) => {
 *     console.log(arg1, arg2);
 *   }
 * };
 */
interface IBasicListener<T extends any[] = any[]> extends TStringRecord<TBasicCallBack<T>> {
    [propertyName: string]: TBasicCallBack<T>;
}

/**
 * A utility type that makes all properties of a given object type `T` optional.
 * This type is helpful when you want to create an object with optional fields while preserving the structure of the original type.
 *
 * @template T - The object type where all properties will become optional.
 *
 * @example
 * type MyObject = { name: string; age: number };
 * const optionalObject: TOptionalObject<MyObject> = { name: 'Alice' };
 */
type TOptionalObject<T extends Record<string, any>> = {
    [K in keyof T]?: T[K];
};

/**
 * A recursive version of `TOptionalObject`, where all properties of a given object type `T` become optional.
 * If any property is an object, the same transformation applies recursively.
 *
 * @template T - The object type where all properties and nested properties will become optional.
 *
 * @example
 * type MyObject = { name: string; address: { city: string; zip: string } };
 * const optionalObjectRecursive: TOptionalObjectRecursive<MyObject> = {
 *   name: 'Alice',
 *   address: { city: 'Wonderland' }
 * };
 */
type TOptionalObjectRecursive<T extends Record<string, any>> = {
    [K in keyof T]?: T[K] extends Record<string, any> ? TOptionalObject<T[K]> : T[K];
};

/**
 * A utility type that makes all properties of a given object type `T` mandatory.
 * If any property is an object, the transformation is applied recursively, making all its properties mandatory as well.
 *
 * @template T - The object type where all properties will become mandatory.
 *
 * @example
 * type MyObject = { name?: string; age?: number };
 * const mandatoryObject: TMandatoryObject<MyObject> = { name: 'Alice', age: 25 };
 */
type TMandatoryObject<T extends Record<string, any>> = {
    [K in keyof T]-?: T[K] extends Record<string, any> ? TMandatoryObject<T[K]> : T[K];
};

/**
 * Converts an object type into a tuple type, where each tuple element is an array
 * of [key, value].
 *
 * @template V - The type of the input object.
 * @returns A tuple type, where each tuple element is an array of [key, value].
 *
 * @example
 * const data = { name: 'Alice', age: 25 };
 * const tuple: TObject2Tuple<typeof data> = [['name', 'Alice'], ['age', 25]];
 */
type TObject2Tuple<V> = {
    [key in keyof V]: [key, V[key]];
}[keyof V][];

/**
 * Converts an object into a tuple of key-value pairs, where each tuple element is
 * an array of [key, value].
 *
 * @template O - The type of the input object.
 * @param data - The input object to be converted.
 * @returns A tuple of key-value pairs, where each tuple element is an array of [key, value].
 *
 * @example
 * const data = { name: 'Alice', age: 25 };
 * const tuple = tupplaFromObject(data);
 * // tuple is now [['name', 'Alice'], ['age', 25]]
 */
const tupplaFromObject = <O extends Record<any, any>>(data: O) => {
    const tuple = [] as TObject2Tuple<O>;
    for (const key in data) {
        tuple.push([key, data[key]]);
    }
    return tuple;
};

/**
 * Represents a readonly array of readonly key-value pair arrays, where each pair consists of any type for the key and value.
 */
type TTuplaStructure = readonly (readonly [any, any])[];

/**
 * Converts a tuple structure into an object type, where the keys are extracted from the first element of each tuple,
 * and the values are extracted from the second element of the tuple.
 *
 * @template T - The tuple structure to be converted into an object type.
 */
type Tuple2Object<T extends TTuplaStructure> = {
    [K in TIndexOfArray<T> as T[K] extends readonly any[] ? T[K][0] : never]: T[K] extends readonly any[]
        ? T[K][1]
        : never;
};

/**
 * Extracts the indices of an array type, excluding the indices of any array.
 *
 * @template Arr - The array type from which to extract indices.
 */
type TIndexOfArray<Arr extends readonly any[]> = Exclude<keyof Arr, keyof any[]>;

/**
 * Extracts the key type from a tuple structure, which is the first element of each tuple.
 *
 * @template T - The tuple structure from which to extract the key type.
 */
type ExtractTupleKey<T extends TTuplaStructure> = T[number][0];

/**
 * Extracts the field type associated with a specific key from a tuple structure.
 *
 * @template T - The tuple structure from which to extract the field type.
 * @template Field - The specific key for which to extract the field type.
 */
type ExtractTupleField<T extends TTuplaStructure, Field extends ExtractTupleKey<T>> = Extract<
    T[number],
    [Field, any]
>[1];

/**
 * Converts a tuple of key-value pairs into an object, where each tuple element is a readonly
 * array of [key, value].
 *
 * @template Tuple - The type of the input tuple, consisting of readonly key-value pairs.
 * @param tuple - The input tuple to be converted into an object.
 * @returns An object where the keys and values correspond to the key-value pairs in the tuple.
 *
 * @example
 * const tuple = [["name", "John"], ["age", 30]] as const;
 * const obj = tupleToObject(tuple);
 * // obj is now { name: "John", age: 30 }
 */
const tupleToObject = <Tuple extends TTuplaStructure>(tuple: Tuple): Tuple2Object<Tuple> => {
    const obj = {} as Tuple2Object<Tuple>;

    for (let i = 0; i < tuple.length; i++) {
        const [key, value] = tuple[i];
        obj[key as keyof Tuple2Object<Tuple>] = value;
    }

    return obj;
};
/**
 * A utility type that removes `null` and `undefined` from a given type `T`.
 * This type is useful for ensuring a type does not include `null` or `undefined` values.
 *
 * @template T - The original type from which `null` and `undefined` will be removed.
 *
 * @example
 * type NonNullableString = TOmitEmpty<string | null | undefined>; // Result: string
 */
type TOmitEmpty<T> = Exclude<Exclude<T, undefined>, null>;

/**
 * A utility type that removes properties from a given `TStringRecord` where the value is `null` or `undefined`.
 * It ensures that only properties with non-nullable values remain in the resulting type.
 *
 * @template T - The original `TStringRecord` type from which properties with empty values will be removed.
 *
 * @example
 * type NonEmptyRecord = TObjRemoveEmpty<{ a: string | null; b: number | undefined; c: boolean }>;
 * // Result: { a: string; b: number; c: boolean }
 */
type TObjRemoveEmpty<T extends TStringRecord> = {
    [K in keyof T as TOmitEmpty<T[K]> extends never ? never : K]-?: TOmitEmpty<T[K]>;
};

export {
    ExtractTupleField,
    ExtractTupleKey,
    IBasicListener,
    TIndexOfArray,
    TMandatoryObject,
    TObject2Tuple,
    TObjRemoveEmpty,
    TOmitEmpty,
    TOptionalObject,
    TOptionalObjectRecursive,
    TStringRecord,
    TTuplaStructure,
    Tuple2Object,
    tupleToObject,
    tupplaFromObject
};
