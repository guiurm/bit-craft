import DOMEventManager from './DOMEventManager';
import type { TDOMCLass, TDOMNodeConstructor, TDOMStyle } from './DOMManagementTypes';

export default class DOMNode<D extends HTMLElement> extends DOMEventManager {
    private _dom: D;
    private _style: TDOMStyle;
    private _css: Set<string>;

    constructor(dom: D, conf: TDOMNodeConstructor<D> = {}) {
        super(dom);
        const { class: css = [], style = {} } = conf;
        this._dom = dom;
        this._css = new Set(css);
        this._style = style;
        this._setNode(conf);
    }

    private _setNode(conf: TDOMNodeConstructor<D>) {
        this.setClass(conf.class ?? []);
        this.setStyle(this._style);
    }

    public setClass(css: TDOMCLass) {
        css.forEach(cClass => {
            this._css.add(cClass);
            this._dom.classList.add(cClass);
        });
        return this;
    }

    public removeClass(css: TDOMCLass) {
        css.forEach(cClass => {
            if (!this._css.delete(cClass)) return;
            this._dom.classList.remove(cClass);
        });
        return this;
    }

    public setStyle(style: TDOMStyle) {
        for (const key in style) {
            const v = style[key];
            if (!v) continue;
            this._style[key] = v;
            this._dom.style[key] = v;
        }
        return this;
    }

    public removeStyle(style: TDOMStyle) {
        for (const key in style) {
            const v = style[key];
            if (!v) continue;
            delete this._style[key];
            this._dom.style.removeProperty(key);
        }
        return this;
    }

    public toggleStyle<K extends keyof TDOMStyle>(prop: K, value: CSSStyleDeclaration[K]) {
        if (this._dom.style[prop] !== '') this._dom.style.removeProperty(prop.toString());
        else this._dom.style[prop] = value;

        return this;
    }

    public addNodeText(v: string) {
        this._dom.append(document.createTextNode(v));
        return this;
    }
    public append<V extends HTMLElement>(child: DOMNode<V>) {
        this._dom.append(child.dom);
        return this;
    }

    public innexText(v: string) {
        this._dom.innerText = v;
        return this;
    }

    public get dom() {
        return this._dom;
    }
}
