import { DNode, DNodeLifeCycle } from '../d-nodes/DNode';
import { DNodeInput } from '../d-nodes/DNodeInput';
import type { TDOMNodeConstructor } from '../types/DOMManagementTypes';
import { InputTag, TDNodeFromTag } from '../types/inputTagTypes';
import { isInputTag } from '../utils/assertTags';

/**
 * A utility function to create a DNode or DNodeInput from a tag name or input type.
 * @template Tag - The type of the tag name. Can be a valid HTML tag name or an input type.
 * @param {Tag} tag - The tag name or input type to create the DNode from.
 * @param {TDOMNodeConstructor} [conf] - The configuration options for the DNode.
 * @returns {TDNodeFromTag<Tag>} The created DNode or DNodeInput.
 */
const dh = <Tag extends InputTag | keyof HTMLElementTagNameMap>(
    tag: Tag,
    conf: TDOMNodeConstructor = {}, //<Tag>,
    lifeCycle?: Partial<DNodeLifeCycle<TDNodeFromTag<Tag>>>
): TDNodeFromTag<Tag> => {
    let node: TDNodeFromTag<Tag>;
    const type = tag.split(':')[1];
    if (tag.startsWith('input:') && isInputTag(type)) {
        node = new DNodeInput(
            document.createElement('input'),
            {
                type,
                value: '',
                ...conf
            },
            lifeCycle as Partial<DNodeLifeCycle<DNode<any>>>
        ) as TDNodeFromTag<Tag>;
    } else {
        node = new DNode(
            document.createElement(tag),
            conf,
            lifeCycle as Partial<DNodeLifeCycle<DNode<any>>>
        ) as TDNodeFromTag<Tag>;
    }
    return node;
};

export { dh };
