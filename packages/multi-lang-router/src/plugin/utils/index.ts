import { LangRoute } from '../models/LangRoute';
import { MultiLangRouter } from '../models/MultiLangRouter';
import type { TRouteParam } from '../types';

export const translateRoute = ({
    lang = document.documentElement.lang,
    name,
    params,
    router
}: {
    router: MultiLangRouter;
    name: string;
    params?: TRouteParam;
    lang?: string;
}) => {
    const route = router.findRouteByName(name);

    if (!route) throw new Error(`[MultiLangRouter] route with name: '${name}' in router`);

    return route?.parse(params, lang);
};

export const createLangRoute = (...conf: ConstructorParameters<typeof LangRoute>): LangRoute => {
    const alias = new Set<string>();

    if (conf[0].alias && Array.isArray(conf[0].alias)) conf[0].alias.forEach(a => alias.add(a));
    else if (conf[0].alias && typeof conf[0].alias === 'string') alias.add(conf[0].alias);

    if (conf[0].langAlias)
        for (const lang in conf[0].langAlias) {
            alias.add(conf[0].langAlias[lang]);
        }

    conf[0].alias = Array.from(alias);

    return new LangRoute(...conf);
};
