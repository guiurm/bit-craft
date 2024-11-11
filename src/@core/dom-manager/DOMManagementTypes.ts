export type TDOMStyle = Partial<CSSStyleDeclaration>;
export type TDOMCLass = string[];
export type TDOMNodeConstructor<D extends HTMLElement> = {
    style?: TDOMStyle;
    class?: TDOMCLass;
};

export type TInputTypeTag = keyof TInputType;

export type TInputTypeNumber = {
    range: number;
    number: number;
};
export type TInputTypeBoolean = {
    checkbox: boolean;
};
export type TInputTypeFile = {
    file: File;
};
export type TInputTypeString = {
    button: string;
    color: string;
    date: string;
    'datetime-local': string;
    email: string;
    hidden: string;
    image: string;
    month: string;
    password: string;
    radio: string;
    reset: string;
    search: string;
    submit: string;
    tel: string;
    text: string;
    time: string;
    url: string;
    week: string;
};
export type TInputType = TInputTypeNumber & TInputTypeBoolean & TInputTypeFile & TInputTypeString;

export type TDOMNodeInputConstructor<T extends TInputTypeTag> = TDOMNodeConstructor<HTMLInputElement> & {
    type: T;
    value: TInputType[T];
};
