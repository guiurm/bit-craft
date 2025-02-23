import {
    dotCase2CamelCase,
    kebabCase2CamelCase,
    pascalCase2CamelCase,
    snakeCase2CamelCase,
    spaceCase2CamelCase,
    toCamelCase
} from '../src/stringUtils';

describe('Transform given strings into camelCase', () => {
    it('should transform space case string `T` to camelCase', () => {
        const snakeValue = 'hello_world';
        expect(snakeCase2CamelCase(snakeValue)).toBe('helloWorld');
    });

    it('should transform dot.case string `T` to camelCase', () => {
        const dotCase = 'hello.world';
        expect(dotCase2CamelCase(dotCase)).toBe('helloWorld');
    });

    it('should transform kebab-case string `T` to camelCase', () => {
        const kebabCase = 'hello-world';
        expect(kebabCase2CamelCase(kebabCase)).toBe('helloWorld');
    });

    it('should transform space case string `T` to camelCase', () => {
        const spaceCase = 'hello world';
        expect(spaceCase2CamelCase(spaceCase)).toBe('helloWorld');
    });

    it('should transform PascalCase string `T` to camelCase', () => {
        const pascalCase = 'HelloWorld';
        expect(pascalCase2CamelCase(pascalCase)).toBe('helloWorld');
    });

    it('should transform any string `T` to camelCase', () => {
        const str = 'hello_world MyName.is-felipe';
        expect(toCamelCase(str)).toBe('helloWorldMyNameIsFelipe');
    });
});
