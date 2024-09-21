import { ref, type ComputedRef, type Ref } from 'vue';

export type TCss = string | string[] | Record<string, boolean | Ref<boolean> | ComputedRef<boolean>>;
type TCssRecord = Exclude<TCss, string | string[]>;

const useCssClassTranslator = (config: TCss = '') => {
    const cssR = ref({}) as Ref<TCssRecord>;

    /**
     * Adds config to the css
     * @param css Config for the result as css
     */
    const addCss = (css: TCss) => {
        cssR.value = { ...cssR.value, ...translateCss(css) };
    };

    /**
     * Overrides the css
     * @param css Config for the result as css
     */
    const setCss = (css: TCss) => {
        cssR.value = translateCss(css);
    };

    addCss(config);

    const clearCss = () => {
        Object.keys(cssR.value).forEach(k => {
            delete cssR.value[k];
        });
    };

    return { css: cssR, addCss, setCss, clearCss };
};

export const translateCss = (conf: TCss) => {
    const css = {} as TCssRecord;

    if (typeof conf === 'string') {
        conf.split(' ').forEach(cCss => (css[cCss] = true));
    } else if (Array.isArray(conf)) {
        conf.forEach(cCss => (css[cCss] = true));
    } else if (typeof conf === 'object') {
        for (const cCss in conf) {
            css[cCss] = conf[cCss];
        }
    }
    return css;
};

export default useCssClassTranslator;
