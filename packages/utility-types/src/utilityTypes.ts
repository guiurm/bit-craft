/**
 * Extracts the value type from a constant object.
 * @example
 * const sizes = {
 *   small: 12,
 *   medium: 16,
 *   large: 20
 * } as const;
 * type Size = TValueFromConst<typeof sizes>; // Size is "12" | "16" | "20"
 */
type TValueFromConst<C extends Record<string, TPrimitiveValues>> = C[keyof C];

/**
 * Primitive values in TypeScript.
 *
 * This type represents the primitive values available in TypeScript, which
 * are the types that are not objects.
 *
 * @readonly
 * @enum {number|string|boolean|null|undefined}
 */
type TPrimitiveValues = number | string | boolean | null | undefined;

/**
 * Recursively extracts the primitive value type from a nested type.
 *
 * This type takes a nested type `V` and extracts the primitive value type
 * from it. If the type is already a primitive value (number, string, boolean,
 * null or undefined), it just returns the type itself. If the type is an
 * array, it applies the same transformation to each element of the array.
 * If the type is an object, it applies the same transformation to each
 * property of the object.
 *
 * @template V - The type to extract the primitive value type from.
 * @example
 * type ExampleType = {
 *     name: string;
 *     age: number;
 *     height: number;
 * };
 * type NumberProperties = TRecursivelyExtractPrimitiveValue<ExampleType>;
 * // Result: number | string | boolean | null | undefined
 */
type TRecursivelyExtractPrimitiveValue<V> = V extends TPrimitiveValues
    ? V
    : V extends any[]
      ? TRecursivelyExtractPrimitiveValue<V[number]>
      : V extends Record<string, any>
        ? {
              [K in keyof V]: TRecursivelyExtractPrimitiveValue<V[K]>;
          }[keyof V]
        : never;

/**
 * Extracts properties of a type that have a specific value type.
 * @template T - The input type from which to extract properties.
 * @template V - The value type to filter the properties by.
 * @example
 * type ExampleType = {
 *     name: string;
 *     age: number;
 *     height: number;
 * };
 * type NumberProperties = TExtractByPropType<ExampleType, number>;
 * // Result: { age: number; height: number; }
 */
type TExtractByPropType<T, V> = {
    [K in keyof T as T[K] extends V ? K : never]: T[K];
};

/**
 * Utility type to extract the value type from a Set type.
 *
 * This type takes a Set type as a parameter and infers the type of
 * the values contained within that Set. If the provided type is not
 * a Set, it resolves to `never`.
 *
 * @template S - The Set type from which to extract the value type.
 * @template V - The inferred value type contained in the Set.
 * @example
 * // Example usage:
 * type NumberSet = Set<number>;
 * type ValueType = GetSetValueType<NumberSet>; // ValueType will be `number`
 *
 * type StringSet = Set<string>;
 * type StringValueType = GetSetValueType<StringSet>; // StringValueType will be `string`
 *
 * type NotASet = number[];
 * type NotASetValueType = GetSetValueType<NotASet>; // NotASetValueType will be `never`
 */
type TGetSetValueType<S> = S extends Set<infer V> ? V : never;

export { TExtractByPropType, TGetSetValueType, TPrimitiveValues, TRecursivelyExtractPrimitiveValue, TValueFromConst };
