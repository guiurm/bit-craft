import { type DNode } from '../d-nodes/DNode';
import { type DNodeInput } from '../d-nodes/DNodeInput';
import { INPUT_BOOLEAN_TAGS, INPUT_FILE_TAGS, INPUT_NUMBER_TAGS, INPUT_STRING_TAGS } from '../globals/tags';

// type number
type TInputNumber = { [K in (typeof INPUT_NUMBER_TAGS)[number]]: number };
type TINPUT_NUMBER_TAGS = keyof TInputNumber;

// type boolean
type TInputBoolean = { [K in (typeof INPUT_BOOLEAN_TAGS)[number]]: boolean };
type TINPUT_BOOLEAN_TAGS = keyof TInputBoolean;

// type file
type TInputFile = { [K in (typeof INPUT_FILE_TAGS)[number]]: File };
type TINPUT_FILE_TAGS = keyof TInputFile;

// type string
type TInputString = { [K in (typeof INPUT_STRING_TAGS)[number]]: string };
type TINPUT_STRING_TAGS = keyof TInputString;

// all
type TInputType = TInputNumber & TInputBoolean & TInputFile & TInputString;
type TINPUT_TAGS = keyof TInputType;

type InputTag = `input:${TINPUT_TAGS}`;
type UnwrapInputTag<T extends string> = T extends `input:${infer V}` ? V : never;
type TDNodeFromTag<Tag extends InputTag | keyof HTMLElementTagNameMap> = Tag extends InputTag
    ? DNodeInput<UnwrapInputTag<Tag>>
    : Tag extends keyof HTMLElementTagNameMap
      ? DNode<HTMLElementTagNameMap[Tag]>
      : never;

type THtmlFromTag<Tag extends TINPUT_TAGS | keyof HTMLElementTagNameMap> = Tag extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[Tag]
    : Tag extends TINPUT_TAGS
      ? HTMLInputElement
      : never;

export {
    InputTag,
    TDNodeFromTag,
    THtmlFromTag,
    TINPUT_BOOLEAN_TAGS,
    TINPUT_FILE_TAGS,
    TINPUT_NUMBER_TAGS,
    TINPUT_STRING_TAGS,
    TINPUT_TAGS,
    TInputBoolean,
    TInputFile,
    TInputNumber,
    TInputString,
    TInputType,
    UnwrapInputTag
};
