import type { RouteRecordRaw } from 'vue-router';
import { isDev } from '../globals';
import type { LangRoute } from './LangRoute';

export class MultiLangRouter {
    private readonly _routes: LangRoute[];

    constructor(routes: LangRoute[] = []) {
        this._routes = [];
        this._routes.push(...routes);
    }

    public findRouteByName(name: string) {
        for (const cR of this._routes) {
            if (cR.name === name) return cR;
            const childRoute = cR.getChildRouteByName(name);
            if (childRoute) return childRoute;
        }

        if (isDev) console.warn(`[RouteWrapper] The given name: '${name}' is not registered in the router`);

        return void 0;
    }

    getConf() {
        const conf = [] as RouteRecordRaw[];

        this._routes.forEach(r => conf.push(r.conf));

        return conf;
    }
}
