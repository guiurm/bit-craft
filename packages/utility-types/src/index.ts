export * from './dataStructureUtils';
export * from './datatTypes';
export * from './objectUtils';
export * from './stringUtils';
export * from './utilityTypes';

/**
 * A no-operation function that takes any number of arguments and does nothing.
 *
 * @param {...any} args - The arguments passed to the function.
 * @returns {void}
 */
const noop: (...args: any[]) => void = (): void => void 0;

/** Type representing the `noop` function. */
type TNopp = typeof noop;

/** Type representing a no-operation function with no arguments. */
type TNoppNoArgs = () => void;

export { noop, type TNopp, type TNoppNoArgs };
