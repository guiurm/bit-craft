import { TOptionalObject, TStringRecord } from '@guiurm/utility-types';
import { TINPUT_TAGS, TInputType } from './inputTagTypes';

export type TDOMStyle = TOptionalObject<CSSStyleDeclaration>;
export type TDOMCLass = string[] | TStringRecord<boolean> | string;
export type TDOMNodeConstructor<_D extends any = any> = {
    style?: TDOMStyle;
    class?: TDOMCLass;
};

export type TDOMNodeInputConstructor<T extends TINPUT_TAGS> = TDOMNodeConstructor<HTMLInputElement> & {
    type: T;
    value: TInputType[T];
};
