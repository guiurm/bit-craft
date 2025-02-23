import { AbsStorage } from './AbsStorage';
import { TAbsStorageConstructor } from './types';

class StandardStorage<Type, Key = string> extends AbsStorage<Type, Key> {
    constructor(data?: TAbsStorageConstructor<Key, Type>) {
        super(data);
    }
}

export { StandardStorage };
