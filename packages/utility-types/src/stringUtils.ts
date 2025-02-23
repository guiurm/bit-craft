/**
 * Replaces all occurrences of a given substring `S` in a string `T` with its capitalized form.
 *
 * @template T - The original string type.
 * @template S - The substring to be replaced and capitalized.
 *
 * @example
 * type T1 = TReplace<"hello_world", "_">; // "helloWorld"
 * type T2 = TReplace<"hello-world", "-">; // "helloWorld"
 */
type TReplace<T extends string, S extends string> = T extends `${infer F}${S}${infer R}`
    ? `${F}${Capitalize<TReplace<R, S>>}`
    : T;

/**
 * Replaces all occurrences of a given character in a string with an optional capitalization of the following character.
 *
 * @param str - The string in which to replace characters.
 * @param char - The character to be replaced.
 * @param capitalize - A boolean indicating whether to capitalize the first character of each substring after splitting.
 * @returns The modified string with the specified character replaced and optionally capitalized.
 */
const replaceChar = (str: string, char: string, capitalize: boolean): string => {
    return str
        .split(char)
        .map((s, i) => (capitalize && i > 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s))
        .join('');
};

/**
 * Capitalizes the first character of a string.
 *
 * @param str - The string to be capitalized.
 * @returns The modified string with the first character capitalized.
 */
const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Uncapitalizes the first character of a string.
 *
 * @param str - The string to be uncapitalized.
 * @returns The modified string with the first character uncapitalized.
 */
const unCapitalize = (str: string): string => {
    return str.charAt(0).toLowerCase() + str.slice(1);
};

/**
 * Converts a snake_case string `T` to camelCase.
 *
 * @template T - The snake_case string type.
 *
 * @example
 * type T1 = TSnakeCase2CamelCase<"hello_world">; // "helloWorld"
 */
type TSnakeCase2CamelCase<T extends string> = TReplace<T, '_'>;

/**
 * Converts a snake_case string `S` to camelCase.
 *
 * @template S - The snake_case string type.
 * @param str - The snake_case string to be converted.
 * @returns The camelCase version of the input string.
 *
 * @example
 * const result = snakeCase2CamelCase("hello_world"); // "helloWorld"
 */
const snakeCase2CamelCase = <S extends string>(str: S): TSnakeCase2CamelCase<S> => {
    return unCapitalize(replaceChar(str, '_', true)) as TSnakeCase2CamelCase<S>;
};

/**
 * Converts a kebab-case string `T` to camelCase.
 *
 * @template T - The kebab-case string type.
 *
 * @example
 * type T1 = TKebabCase2CamelCase<"hello-world">; // "helloWorld"
 */
type TKebabCase2CamelCase<T extends string> = TReplace<T, '-'>;

/**
 * Converts a kebab-case string `S` to camelCase.
 *
 * @template S - The kebab-case string type.
 * @param str - The kebab-case string to be converted.
 * @returns The camelCase version of the input string.
 *
 * @example
 * const result = kebabCase2CamelCase("hello-world"); // "helloWorld"
 */
const kebabCase2CamelCase = <S extends string>(str: S): TKebabCase2CamelCase<S> => {
    return unCapitalize(replaceChar(str, '-', true)) as TKebabCase2CamelCase<S>;
};

/**
 * Converts a dot.case string `T` to camelCase.
 *
 * @template T - The dot.case string type.
 *
 * @example
 * type T1 = TDotCase2CamelCase<"hello.world">; // "helloWorld"
 */
type TDotCase2CamelCase<T extends string> = TReplace<T, '.'>;

/**
 * Converts a dot.case string `S` to camelCase.
 *
 * @template S - The dot.case string type.
 * @param str - The dot.case string to be converted.
 * @returns The camelCase version of the input string.
 *
 * @example
 * const result = dotCase2CamelCase("hello.world"); // "helloWorld"
 */
const dotCase2CamelCase = <S extends string>(str: S): TDotCase2CamelCase<S> => {
    return unCapitalize(replaceChar(str, '.', true)) as TDotCase2CamelCase<S>;
};

/**
 * Converts a space case string `T` to camelCase.
 *
 * @template T - The space case string type.
 *
 * @example
 * type T1 = TSpaceCase2CamelCase<"hello world">; // "helloWorld"
 */
type TSpaceCase2CamelCase<T extends string> = TReplace<T, ' '>;

/**
 * Converts a space case string `S` to camelCase.
 *
 * @template S - The space case string type.
 * @param str - The space case string to be converted.
 * @returns The camelCase version of the input string.
 *
 * @example
 * const result = spaceCase2CamelCase("hello world"); // "helloWorld"
 */

const spaceCase2CamelCase = <S extends string>(str: S): TSpaceCase2CamelCase<S> => {
    return unCapitalize(replaceChar(str, ' ', true)) as TSpaceCase2CamelCase<S>;
};

/**
 * Converts a PascalCase string `T` to camelCase.
 *
 * @template T - The PascalCase string type.
 *
 * @example
 * type T1 = TPascalCase2CamelCase<"HelloWorld">; // "helloWorld"
 */
type TPascalCase2CamelCase<T extends string> = Uncapitalize<T>;

/**
 * Converts a PascalCase string `S` to camelCase.
 *
 * @template S - The PascalCase string type.
 * @param str - The PascalCase string to be converted.
 * @returns The camelCase version of the input string.
 *
 * @example
 * const result = pascalCase2CamelCase("HelloWorld"); // "helloWorld"
 */
const pascalCase2CamelCase = <S extends string>(str: S): TPascalCase2CamelCase<S> => {
    return unCapitalize(str) as TPascalCase2CamelCase<S>;
};

/**
 * Converts a string `T` from any supported case (snake_case, kebab-case, dot.case, space case, PascalCase) to camelCase.
 *
 * @template T - The original string type in any supported case.
 *
 * @example
 * type T1 = TAny2Camel<"hello_world">; // "helloWorld"
 * type T2 = TAny2Camel<"hello-world">; // "helloWorld"
 * type T3 = TAny2Camel<"hello.world">; // "helloWorld"
 * type T4 = TAny2Camel<"hello world">; // "helloWorld"
 * type T5 = TAny2Camel<"HelloWorld">; // "helloWorld"
 */
type TAny2Camel<T extends string> = TPascalCase2CamelCase<
    TSpaceCase2CamelCase<TDotCase2CamelCase<TKebabCase2CamelCase<TSnakeCase2CamelCase<T>>>>
>;

/**
 * Checks if the given character is between the given start and end character (inclusive).
 * @example
 * const result = charIsBetween("a", "a", "z"); // true
 * const result2 = charIsBetween("a", "b", "z"); // false
 */
const charIsBetween = (char: string, start: string, end: string): boolean => {
    const startAscii = start.charAt(0);
    const endAscii = end.charAt(0);

    const cAscii = char.charAt(0);

    return cAscii >= startAscii && cAscii <= endAscii;
};

/**
 * Checks if the given string is a lowercase letter.
 * @param s - The string to be checked.
 * @returns `true` if the string is a lowercase letter, `false` otherwise.
 */
const isLoweCase = (s: string): boolean => {
    return charIsBetween(s, 'a', 'z');
};

/**
 * Checks if the given string is an uppercase letter.
 * @param s - The string to be checked.
 * @returns `true` if the string is an uppercase letter, `false` otherwise.
 */
const isUppercase = (s: string): boolean => {
    return charIsBetween(s, 'A', 'Z');
};

/**
 * Converts a string `S` from any supported case (snake_case, kebab-case, dot.case, space case, PascalCase) to camelCase.
 *
 * @template S - The original string type in any supported case.
 *
 * @example
 * const result = toCamelCase("hello_world"); // "helloWorld"
 * const result2 = toCamelCase("hello-world"); // "helloWorld"
 * const result3 = toCamelCase("hello.world"); // "helloWorld"
 * const result4 = toCamelCase("hello world"); // "helloWorld"
 * const result5 = toCamelCase("HelloWorld"); // "helloWorld"
 */
const toCamelCase = <S extends string>(s: S): TAny2Camel<S> => {
    return snakeCase2CamelCase(
        kebabCase2CamelCase(dotCase2CamelCase(spaceCase2CamelCase(pascalCase2CamelCase(s))))
    ) as TAny2Camel<S>;
};

export {
    capitalize,
    charIsBetween,
    dotCase2CamelCase,
    isLoweCase,
    isUppercase,
    kebabCase2CamelCase,
    pascalCase2CamelCase,
    replaceChar,
    snakeCase2CamelCase,
    spaceCase2CamelCase,
    TAny2Camel,
    TDotCase2CamelCase,
    TKebabCase2CamelCase,
    toCamelCase,
    TPascalCase2CamelCase,
    TReplace,
    TSnakeCase2CamelCase,
    TSpaceCase2CamelCase,
    unCapitalize
};
