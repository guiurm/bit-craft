import type { TDOMNodeInputConstructor } from '../types/DOMManagementTypes';
import { TINPUT_TAGS, TInputType } from '../types/inputTagTypes';
import { DNode, DNodeLifeCycle } from './DNode';

class DNodeInput<T extends TINPUT_TAGS> extends DNode<HTMLInputElement> {
    private _type: T;

    constructor(
        dom: HTMLInputElement,
        { type, ...rest }: TDOMNodeInputConstructor<T>,
        lifeCicle: Partial<DNodeLifeCycle<DNode<HTMLInputElement>>> = {}
    ) {
        super(dom, rest, lifeCicle);
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

    /**
     * Gets the value of the input element based on the type of the input.
     *
     * If the type is 'checkbox', the value is the checked state of the input.
     * Otherwise, the value is the value of the input (a string).
     *
     * @returns {TInputType[T]} The value of the input.
     */
    public get value(): TInputType[T] {
        if (this._type === 'number') return Number(this.dom.value) as TInputType[T];
        else if (this._type === 'checkbox') return this.dom.checked as TInputType[T];
        else return this.dom.value as TInputType[T];
    }

    public set value(v: TInputType[T]) {
        if (this._type === 'checkbox' && typeof v === 'boolean') this.dom.checked = v;
        else this.dom.value = v.toString();
    }

    /**
     * Sets the properties of the DOM element.
     *
     * @param {Parameters<DNode<HTMLInputElement>['setProps']>} args - The properties to set on the DOM element.
     * @returns {DNodeInput<T>} The current instance of DNodeInput.
     */
    public setProps(...qqq: Parameters<DNode<HTMLInputElement>['setProps']>): this {
        super.setProps(...qqq);
        return this;
    }
}

export { DNodeInput };
