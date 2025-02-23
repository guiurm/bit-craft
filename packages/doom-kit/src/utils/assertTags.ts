import { INPUT_TAGS } from '../globals/tags';
import { TINPUT_TAGS } from '../types/inputTagTypes';

/**
 * Checks if a given tag is a valid input tag.
 * @param d - The tag name to be checked.
 * @returns True if the tag is a valid input tag, false otherwise.
 */
const isInputTag = (d: any): d is TINPUT_TAGS => {
    return INPUT_TAGS.includes(d as TINPUT_TAGS);
};

export { isInputTag };
