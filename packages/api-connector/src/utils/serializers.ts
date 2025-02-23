import { convertArrayToCamelCaseKeys, convertToCamelCaseKeys } from '@guiurm/utility-types';

/**
 * Serializer to convert any given data structure to camelCase keys.
 *
 * @example
 * const data = {
 *     "a-b": 1,
 *     "c_d": 2,
 *     "e f": 3,
 *     "g h": 4,
 *     "I": {
 *         "K L": 5
 *     }
 * };
 *
 * const camelCaseData = cammelCaseSerializer(data);
 * // camelCaseData is now { aB: 1, cD: 2, eF: 3, gH: 4, i: { kL: 5 } }
 *
 * @param {any} data - The data to be serialized.
 * @return {Object} The serialized data with camelCase keys.
 */
const cammelCaseSerializer = (data: any) => {
    if (Array.isArray(data)) {
        return convertArrayToCamelCaseKeys(data);
    }
    return convertToCamelCaseKeys(data);
};

export { cammelCaseSerializer };
