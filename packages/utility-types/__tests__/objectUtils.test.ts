import { convertArrayToCamelCaseKeys, convertToCamelCaseKeys } from '../src/objectUtils';

describe('Transform given objects to camelCase key value', () => {
    it('should any key string `T` to camelCase', () => {
        const snakeValue = { 'a-b': 'hello', c_d: 42, 'e f': { 'g.h': true } };
        expect(convertToCamelCaseKeys(snakeValue)).toEqual({ aB: 'hello', cD: 42, eF: { gH: true } });
    });

    it('should any key string `T` in the array ofobjects to camelCase', () => {
        const snakeValue = { 'a-b': 'hello', c_d: 42, 'e f': { 'g.h': true } };
        expect(convertArrayToCamelCaseKeys([snakeValue, snakeValue])).toEqual([
            { aB: 'hello', cD: 42, eF: { gH: true } },
            { aB: 'hello', cD: 42, eF: { gH: true } }
        ]);
    });
});
