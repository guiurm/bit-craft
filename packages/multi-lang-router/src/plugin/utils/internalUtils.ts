import { createLangRoute, translateRoute } from '.';
import type { LangRoute } from '../models/LangRoute';
import { MultiLangRouter } from '../models/MultiLangRouter';
import type { TLangRouterProps, To, TRouteParam, TRouterTo } from '../types';

export const getInheritRoutePath = (route: LangRoute, lang: string) => {
    let path = '';
    path = Object.keys(route.langAlias).includes(lang) ? route.langAlias[lang] : route.path;

    if (route.inheritRoute.parent) {
        path = `${getInheritRoutePath(route.inheritRoute.parent, lang)}/${path}`;
    }

    return removeExtraSlash(path, true);
};

export const removeExtraSlash = (url: string, addSlashAtStart: boolean = true) => {
    const path = url
        .split('/')
        .filter(p => p !== '' && p !== undefined)
        .join('/');

    return addSlashAtStart ? `/${path}` : path;
};

export const parseRoutePath = (path: string, params: TRouteParam) => {
    return path.replace(/:([\w\d]+(\+|\*)?)/gm, (_, param, modifier) => {
        const v = params[param.replace(/(\+|\*)/g, '')];

        switch (modifier) {
            case '+':
                if (!v || !Array.isArray(v) || v.length === 0) return 'error_array';
                return v.join('/');
            case '*':
                return Array.isArray(v) ? v.join('/') : (v?.toString() ?? '');
            default:
                return v?.toString() ?? '';
        }
    });
};

export const getRouterToValue = ({ to, router, lang }: { router: MultiLangRouter; to: To; lang?: string }) => {
    const t: TRouterTo = { path: '' };
    switch (typeof to) {
        case 'bigint':
        case 'boolean':
        case 'symbol':
        case 'undefined':
        case 'function':
            throw new Error(`to value has an unexpected value '${to}' as '${typeof to}'`);

        case 'object': {
            const { path, name, ...rest } = to;
            Object.assign(t, rest);

            if (path) {
                t.path = to.path;
            } else if (name) {
                t.path = translateRoute({ name, params: to.params, router, lang });
            }
            break;
        }
        case 'number':
            t.path = to.toString();
            break;
        case 'string':
            t.path = to;
            break;
    }
    delete t.params;
    return t;
};

export const createInternMultiLangRouter = (routes: TLangRouterProps[] = []) => {
    const routeWrappers = routes.map(r => createLangRoute(r));
    return new MultiLangRouter(routeWrappers);
};
