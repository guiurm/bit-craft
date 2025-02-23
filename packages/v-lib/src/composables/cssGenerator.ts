import { ref } from 'vue';

export type TUseCssClasses = string | Record<string, boolean>;

const useCSSGenerator = (defaultCss?: TUseCssClasses) => {
    const computedStyles = ref({} as Record<string, boolean>);

    const setStyles = (cssConf: TUseCssClasses) => {
        if (!cssConf) return computedStyles;
        if (typeof cssConf === 'string') {
            cssConf.split(' ').forEach(currentClass => (computedStyles.value[currentClass] = true));
        } else if (typeof cssConf === 'object') {
            computedStyles.value = { ...computedStyles.value, ...cssConf };
        }
    };

    if (defaultCss) setStyles(defaultCss);

    return {
        computedStyles,
        setStyles
    };
};

export default useCSSGenerator;
