import type { TDOMNodeInputConstructor, TInputType, TInputTypeTag } from './DOMManagementTypes';
import DOMNode from './DOMNode';

export default class DOMNodeInput<T extends TInputTypeTag> extends DOMNode<HTMLInputElement> {
    private _type: T;
    constructor(dom: HTMLInputElement, { type, ...rest }: TDOMNodeInputConstructor<T>) {
        super(dom, rest);
        this._type = type;
        this.dom.type = type;
        this._setNodeValue(rest.value);
    }

    private _setNodeValue(value: TDOMNodeInputConstructor<T>['value']) {
        switch (typeof value) {
            case 'string':
                this.dom.value = value;
                break;
            case 'number':
                this.dom.value = value.toString();
                break;
            case 'boolean':
                this.dom.checked = value;
                break;
            default:
                throw new Error('[DOMNodeInput] - uncontrolled value type');
        }
    }

    public get value() {
        if (this._type === 'checkbox') return this.dom.checked as TInputType[T];
        else return this.dom.value as TInputType[T];
    }

    public set value(v: TInputType[T]) {
        if (this._type === 'checkbox' && typeof v === 'boolean') this.dom.checked = v;
        else this.dom.value = v.toString();
    }
}
