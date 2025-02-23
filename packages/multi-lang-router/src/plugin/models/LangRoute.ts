import type { NavigationGuardWithThis, RouteRecordRaw, RouteRecordRedirectOption } from 'vue-router';
import type { RawRouteComponent, TLangRouterProps, TRouteInheritance, TRouteParam, TRouteProps } from '../types';
import { createLangRoute } from '../utils';
import { getInheritRoutePath, parseRoutePath, removeExtraSlash } from '../utils/internalUtils';

export class LangRoute implements TLangRouterProps {
    public readonly inheritRoute: TRouteInheritance;
    public readonly name: string;
    public readonly path: string;
    public readonly component: RawRouteComponent;
    public readonly components?: Record<string, RawRouteComponent> | undefined;
    public readonly alias?: string | string[] | undefined;
    public readonly langAlias: Record<string, string>;
    public readonly beforeEnter?: NavigationGuardWithThis<undefined> | NavigationGuardWithThis<undefined>[] | undefined;
    public readonly children?: TRouteProps[] | undefined;
    public readonly childRoutes: LangRoute[];
    public readonly props?: boolean; // Record<string, any> | undefined
    public readonly redirect?: RouteRecordRedirectOption | undefined;
    public readonly meta?: Record<string, any> | undefined;
    public readonly end?: boolean | undefined;
    public readonly sensitive?: boolean | undefined;
    public readonly strict?: boolean | undefined;

    constructor(conf: TLangRouterProps, inherit: TRouteInheritance = {}) {
        this.inheritRoute = inherit; // Object.keys(inherit).indexOf('default') !== -1 ? (inherit as Required<A>) : { ...inherit, default: '' }
        this.name = conf.name;
        this.path = conf.path;
        this.component = conf.component;
        this.components = conf.components;
        this.alias = conf.alias ?? [];
        this.langAlias = conf.langAlias ?? {};
        this.beforeEnter = conf.beforeEnter;
        this.children = conf.children;
        this.childRoutes = [];
        this.props = conf.props;
        this.redirect = conf.redirect;
        this.meta = conf.meta;
        this.end = conf.end;
        this.sensitive = conf.sensitive;
        this.strict = conf.strict;

        this._createChildrens();
    }

    private _createChildrens() {
        this.childRoutes.length = 0;
        this.children?.forEach(c => {
            this.childRoutes.push(createLangRoute(c, { parent: this }));
        });
    }

    parse(params: TRouteParam = {}, lang: keyof NonNullable<typeof this.langAlias>) {
        const path = getInheritRoutePath(this, lang);

        if (!params) return path;

        return parseRoutePath(removeExtraSlash(path, true), params);
    }

    getChildRouteByName(name: string): LangRoute | undefined {
        for (const c of this.childRoutes) {
            if (c.name === name) return c;
            if (c.childRoutes.length > 0) return c.getChildRouteByName(name);
        }
    }

    public get conf(): RouteRecordRaw {
        const componentsConf =
            this.components !== undefined ? { components: this.components } : { component: this.component };
        const wrapperConf = {
            alias: this.alias,
            beforeEnter: this.beforeEnter,
            children: this.children,
            props: this.props,
            redirect: this.redirect,
            meta: this.meta,
            end: this.end,
            sensitive: this.sensitive,
            strict: this.strict
        } as RouteRecordRaw;
        const config: RouteRecordRaw = {
            path: this.path,
            ...componentsConf
        };

        for (const _ in wrapperConf) {
            const key = _ as keyof RouteRecordRaw;
            if (wrapperConf[_ as keyof RouteRecordRaw]) Object.assign(config, { [key]: wrapperConf[key] });
        }

        return config;
        /*return {
            name: this.name,
            path: this.path,
            component: this.component,
            //components: this.components,
            alias: this.alias,
            //langAlias: this.langAlias,
            beforeEnter: this.beforeEnter,
            children: this.children,
            props: this.props,
            redirect: this.redirect,
            meta: this.meta,
            end: this.end,
            sensitive: this.sensitive,
            strict: this.strict
        }*/
    }
}
