import type { TAbsStorageConstructor } from './AbsStorage';
import AbsIterable from './AbsStorage';
export default class Storage<Type, Key = string> extends AbsIterable<Type, Key> {
    constructor(data?: TAbsStorageConstructor<Key, Type>) {
        super(data);
    }
}
