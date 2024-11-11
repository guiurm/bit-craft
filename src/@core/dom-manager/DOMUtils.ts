export type TDOMSizing = {
    size: { top: number; left: number; width: number; height: number };
    style: { top: string; left: string; width: string; height: string };
};

export const getDOMItemSizing = (target: HTMLElement): TDOMSizing => {
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
