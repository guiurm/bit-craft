type TDOMSizing = {
    size: { top: number; left: number; width: number; height: number };
    style: { top: string; left: string; width: string; height: string };
};

/**
 * Calculates the sizing and styling information of a given DOM element.
 *
 * @param {HTMLElement} target - The DOM element to calculate the size and style for.
 * @returns {TDOMSizing} An object containing the size and style information of the element.
 *   - `size`: An object with numeric values representing the `top`, `left`, `width`, and `height` of the element.
 *   - `style`: An object with string values representing the `top`, `left`, `width`, and `height` of the element, formatted as CSS styles.
 */
const getDOMItemSizing = (target: HTMLElement): TDOMSizing => {
    const { top, left, width, height } = target.getBoundingClientRect();
    return {
        style: {
            height: height + 'px',
            width: width + 'px',
            top: top + 'px',
            left: left + 'px'
        },
        size: {
            height: height,
            width: width,
            top: top,
            left: left
        }
    };
};

export { getDOMItemSizing, TDOMSizing };
