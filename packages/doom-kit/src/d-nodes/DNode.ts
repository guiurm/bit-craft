import { noop, TOmitEmpty } from '@guiurm/utility-types';
import { DEventManager } from '../services/DEventManager';
import type { TDOMCLass, TDOMNodeConstructor, TDOMStyle } from '../types/DOMManagementTypes';

type DNodeLifeCycle<D extends DNode<any>> = {
    setup: () => void;
    mounted: (node: D) => void;
    beforeMounted: (node: D) => void;
};

class DNode<D extends HTMLElement> extends DEventManager<D> {
    private _dom: D;
    private _style: TDOMStyle;
    private _css: Set<string>;

    private _setup: DNodeLifeCycle<DNode<D>>['setup'];
    private _mounted: DNodeLifeCycle<DNode<D>>['mounted'];
    private _beforeMounted: DNodeLifeCycle<DNode<D>>['beforeMounted'];

    constructor(
        dom: D,
        conf: TDOMNodeConstructor<D> = {},
        { beforeMounted = noop, mounted = noop, setup = noop }: Partial<DNodeLifeCycle<DNode<D>>> = {}
    ) {
        super(dom);
        const { class: css = [], style = {} } = conf;
        this._dom = dom;
        this._css = new Set(this._translateCssClass(css));

        this._style = style;
        this._setNode(conf);

        this._setup = setup;
        this._beforeMounted = beforeMounted;
        this._mounted = mounted;
    }

    /**
     * Retrieves the parent HTML element of the current DOM element.
     *
     * @returns {HTMLElement | null} The parent element of the DOM element,
     * or null if the element has no parent.
     */
    public get parentDOM(): HTMLElement | null {
        return this._dom.parentElement;
    }

    /**
     * Sets the initial values of the DNode instance.
     *
     * @param {TDOMNodeConstructor<D>} conf - The initial configuration of the DNode instance.
     * @returns {void}
     */
    private _setNode(conf: TDOMNodeConstructor<D>): void {
        this.setClass(conf.class ?? []);
        this.setStyle(this._style);
    }

    /**
     * Translates the class property of the DNode constructor to an array of CSS classes.
     *
     * @param {TDOMCLass} css - The CSS classes to translate.
     * @returns {string[]} An array of CSS classes.
     */
    private _translateCssClass(css: TDOMCLass): string[] {
        const translated: string[] = [];
        if (typeof css === 'string') translated.push(...css.split(' '));
        else if (Array.isArray(css)) {
            css.forEach(cClass => {
                if (!cClass) return;
                translated.push(...cClass.split(' '));
            });
        } else {
            for (const cssClass in css) {
                if (!css[cssClass]) continue;
                translated.push(cssClass);
            }
        }
        return translated;
    }

    /**
     * Sets the properties of the DOM element.
     *
     * @param {{ [K in keyof D]?: D[K] | undefined }} props - The properties to set on the DOM element.
     * @returns {DNode<D>} The current instance of DNode.
     */
    public setProps(props: { [K in keyof D]?: D[K] | undefined }): DNode<D> {
        for (const propKey in props) {
            this._dom[propKey] = props[propKey] as TOmitEmpty<(typeof props)[typeof propKey]>;
        }
        return this;
    }

    /**
     * Adds one or more CSS classes to the DOM element.
     *
     * @param {TDOMCLass} css - The CSS classes to add.
     * @returns {DNode<D>} The current instance of DNode.
     */
    public setClass(css: TDOMCLass): DNode<D> {
        this._translateCssClass(css).forEach(cClass => {
            this._css.add(cClass);
            this._dom.classList.add(cClass);
        });
        return this;
    }

    /**
     * Removes one or more CSS classes from the DOM element.
     *
     * @param {TDOMCLass} css - The CSS classes to remove.
     * @returns {DNode<D>} The current instance of DNode.
     */
    public removeClass(css: TDOMCLass): DNode<D> {
        this._translateCssClass(css).forEach(cClass => {
            if (!this._css.delete(cClass)) return;
            this._dom.classList.remove(cClass);
        });
        return this;
    }

    /**
     * Sets one or more CSS styles on the DOM element.
     *
     * @param {TDOMStyle} style - The CSS styles to set.
     * @returns {DNode<D>} The current instance of DNode.
     */
    public setStyle(style: TDOMStyle): DNode<D> {
        for (const key in style) {
            const v = style[key];
            if (!v) continue;
            this._style[key] = v;
            this._dom.style[key] = v;
        }
        return this;
    }

    /**
     * Removes a CSS style from the DOM element.
     *
     * @param {TDOMStyle} style - An object with the styles to remove.
     * @returns {DNode<D>} The current instance of DNode.
     */
    public removeStyle(style: TDOMStyle): DNode<D> {
        for (const key in style) {
            const v = style[key];
            if (!v) continue;
            delete this._style[key];
            this._dom.style.removeProperty(key);
        }
        return this;
    }

    /**
     * Toggles the value of a CSS style between two values.
     *
     * @template K - The type of the CSS property.
     * @param {K} prop - The name of the CSS property.
     * @param {CSSStyleDeclaration[K]} value - The value to assign if the property does not exist.
     * @returns {DNode<D>} The current instance of DNode.
     */
    public toggleStyle<K extends keyof TDOMStyle>(prop: K, value: CSSStyleDeclaration[K]): DNode<D> {
        if (this._dom.style[prop] !== '') this._dom.style.removeProperty(prop.toString());
        else this._dom.style[prop] = value;

        return this;
    }

    /**
     * Adds a text node to the DOM element.
     *
     * @param {string} v - The text to add.
     * @returns {DNode<D>} The current instance of DNode.
     */
    public addNodeText(v: string): DNode<D> {
        this._dom.append(document.createTextNode(v));
        return this;
    }

    /**
     * Gets the callback function that is called during the setup of the DNode.
     * The function is called after the DOM element is created and the initial
     * styles, classes and attributes are set.
     *
     * @returns {DNodeLifeCycle<DNode<D>>['setup']} The callback function.
     */
    public get setup(): DNodeLifeCycle<DNode<D>>['setup'] {
        return this._setup;
    }

    /**
     * Gets the callback function that is called after the DOM element is mounted.
     *
     * @returns {DNodeLifeCycle<DNode<D>>['mounted']} The callback function.
     */
    public get mounted(): DNodeLifeCycle<DNode<D>>['mounted'] {
        return this._mounted;
    }

    /**
     * Gets the callback function that is called before the DOM element is mounted.
     *
     * @returns {DNodeLifeCycle<DNode<D>>['beforeMounted']} The callback function.
     */
    public get beforeMounted(): DNodeLifeCycle<DNode<D>>['beforeMounted'] {
        return this._beforeMounted;
    }

    /**
     * Appends a child element to the DOM element.
     *
     * @param {DNode<V>} child - The child element to append.
     * @returns {DNode<D>} The current instance of DNode.
     */
    public append<V extends HTMLElement>(child: DNode<V>): DNode<D> {
        if (child instanceof DNode) {
            const o = child;
            o.setup();
            o.beforeMounted(child);
            this._dom.append(child.dom);
            o.mounted(child);
        } else {
            throw new Error('Invalid child type');
        }

        return this;
    }

    /**
     * Sets the inner text of the DOM element.
     *
     * @param {string} v - The text to set.
     * @returns {DNode<D>} The current instance of DNode.
     */
    public innexText(v: string): DNode<D> {
        this._dom.innerText = v;
        return this;
    }

    /**
     * Returns the HTML element associated with this DNode instance.
     *
     * @returns {D} The HTML element associated with this DNode instance.
     */
    public get dom(): D {
        return this._dom;
    }
}

export { DNode, DNodeLifeCycle };
