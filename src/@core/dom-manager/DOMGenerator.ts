import type { TDOMNodeConstructor, TDOMNodeInputConstructor, TInputTypeTag } from './DOMManagementTypes';
import DOMNode from './DOMNode';
import DOMNodeInput from './DOMNodeInput';

//
export default class DOMGenerator {
    public static create<Tag extends keyof HTMLElementTagNameMap>(
        tag: Tag,
        conf: TDOMNodeConstructor<HTMLElementTagNameMap[Tag]> = {}
    ): DOMNode<HTMLElementTagNameMap[Tag]> {
        return new DOMNode(document.createElement(tag), conf);
    }

    public static createInput<Tag extends TInputTypeTag>(conf: TDOMNodeInputConstructor<Tag>): DOMNodeInput<Tag> {
        const dom = document.createElement('input');

        return new DOMNodeInput(dom, conf);
    }
}
