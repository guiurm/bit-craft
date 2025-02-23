import { TObject2Tuple, TTuplaStructure } from '@guiurm/utility-types';

type TAbsStorageConstructor<Key, Data> = Key extends string | number
    ? Record<Key, Data> | [key: Key, data: Data][]
    : [key: Key, data: Data][];

type TInternTuple<V extends TTuplaStructure | Record<string, any>> = V extends TTuplaStructure ? V : TObject2Tuple<V>;
export { type TAbsStorageConstructor, type TInternTuple };
