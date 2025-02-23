import { TAny2Camel, toCamelCase } from './stringUtils';

/**
 * Type that prettifies a given object type by making it extendable.
 * It merges the given type with an empty object type, allowing you to add new properties to the type.
 *
 * @template T - The object type to be prettified.
 */
type TPrettify<T> = T & ({} | {});

/**
 * Converts all property names of a given object type `T` to camelCase, and makes the type extendable by merging it with an empty object type.
 *
 * @template T - The object type to be converted.
 *
 * @example
 * type MyObject = { "a-b": string; c_d: number; "e f": boolean , "g.h": null | undefined, "I": { 'k-l': string }};
 * type MyObjectCamelCase = TObject2CamelCase<MyObject>; // { aB: string, cD: number, eF: boolean, gH: null | undefined ,i: { kL: string } };
 */
type TObject2CamelCase<T extends Record<string, any>> = TPrettify<{
    [K in keyof T as TAny2Camel<K & string>]: T[K] extends any[]
        ? TObject2CamelCase<T[K][number]>[]
        : T[K] extends object
          ? TObject2CamelCase<T[K]>
          : T[K];
}>;

/**
 * Recursively converts all property names of each element in a given array to camelCase.
 * If the element is an object, it calls `convertToCamelCaseKeys` on it. If the element is an array, it calls itself on that array.
 *
 * @template T - The array type to be converted. Each element should be an object with string keys.
 *
 * @example
 * const array = [
 *   { "a-b": "hello", c_d: 42 },
 *   [
 *     { e_f: true },
 *     { "g.h": null }
 *   ]
 * ];
 * const camelCasedArray = convertArrayToCamelCaseKeys(array);
 * // camelCasedArray is now [{ aB: "hello", cD: 42 }, [{ eF: true }, { gH: null }]]
 */
const convertArrayToCamelCaseKeys = <T extends Record<string, any>[]>(array: T): TObject2CamelCase<T[number]>[] => {
    array.forEach((cVal, index) => {
        if (Array.isArray(cVal)) convertArrayToCamelCaseKeys(cVal);
        else if (typeof cVal === 'object') array[index] = convertToCamelCaseKeys(cVal);
    });
    return array as unknown as TObject2CamelCase<T[number]>[];
};

/**
 * Recursively converts all property names of a given object to camelCase.
 * If the property value is an object, it calls itself on that object. If the property value is an array, it calls `convertArrayToCamelCaseKeys` on that array.
 *
 * @template T - The object type to be converted. Each property should be a string.
 *
 * @example
 * const object = { "a-b": "hello", c_d: 42, "e f": { "g.h": true } };
 * const camelCasedObject = convertToCamelCaseKeys(object);
 * // camelCasedObject is now { aB: "hello", cD: 42, eF: { gH: true } }
 */
const convertToCamelCaseKeys = <T extends Record<string, any>>(obj: T): TObject2CamelCase<T> => {
    const aux = obj as Record<string, any>;

    Object.keys(aux).forEach(key => {
        const parsedKey = toCamelCase(key);

        aux[parsedKey] = aux[key];
        if (key !== parsedKey) delete aux[key];

        if (Array.isArray(aux[parsedKey])) {
            aux[parsedKey] = convertArrayToCamelCaseKeys(aux[parsedKey]);
        } else if (aux[parsedKey] !== null && aux[parsedKey] !== undefined && typeof aux[parsedKey] === 'object') {
            aux[parsedKey] = convertToCamelCaseKeys(aux[parsedKey]);
        }
    });

    return aux as TObject2CamelCase<T>;
};

export { convertArrayToCamelCaseKeys, convertToCamelCaseKeys, TObject2CamelCase, TPrettify };
