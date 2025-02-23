// export * from './composables/'
export * from './models/LangRoute';
export * from './models/MultiLangRouter';
export * from './types/';
export * from './utils/';

//
export { default as RouterLinkTranslate } from './components/RouterLinkTranslate.vue';

import { inject, type FunctionPlugin } from 'vue';
import { createRouter, type RouterOptions } from 'vue-router';
import type { MultiLangRouter } from './models/MultiLangRouter';
import type { TLangRouterProps } from './types/';
import { createInternMultiLangRouter } from './utils/internalUtils';

// custom directives -> GlobalDirectives

type MultiLangRouterPlugin = FunctionPlugin<Omit<RouterOptions, 'routes'> & { routes: TLangRouterProps[] }>;

// interface MultiLangRouterPlugin extends FunctionPlugin<TRouterConfig> {}

const GLOBAL_ROUTER = Symbol('globalMultiLangRouter');

export const createMultiLangRouter: MultiLangRouterPlugin = (app, routerConfig) => {
    const multiLangRouter = createInternMultiLangRouter(routerConfig.routes);

    const router = createRouter({ ...routerConfig, routes: multiLangRouter.getConf() });

    //app.use(router)

    app.config.globalProperties.$globalRouter = multiLangRouter;
    app.provide(GLOBAL_ROUTER, multiLangRouter);

    return router;
};

export const useMultiLangRouter = () => {
    const router = inject(GLOBAL_ROUTER) as MultiLangRouter;
    return router;
};
