import { observe, setReactive } from '../src/index';

describe('ReactiveSimple', () => {
    it('should distpatch reactive watcher', () => {
        const data = setReactive({ key1: 'value1', key2: 'value2' });
        let distpached = false;
        observe(data, () => {
            distpached = true;
        });
        data.value.key1 = 'changed';

        expect(distpached).toBe(true);
    });
});
