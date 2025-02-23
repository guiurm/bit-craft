import type { AllowedComponentProps, ComponentCustomProps } from 'vue';
import type {
    HistoryState,
    LocationQueryRaw,
    NavigationGuardWithThis,
    RouteComponent,
    RouteRecordRedirectOption,
    RouterLinkProps
} from 'vue-router';
import type { LangRoute } from '../models/LangRoute';

export type Lazy<T> = () => Promise<T>;
export type RawRouteComponent = RouteComponent | Lazy<RouteComponent>;

export type TLangRouterProps = {
    name: string;
    path: string;
    component: RawRouteComponent;
    components?: Record<string, RawRouteComponent>;
    alias?: string | string[];
    beforeEnter?: NavigationGuardWithThis<undefined> | NavigationGuardWithThis<undefined>[];
    children?: TLangRouterProps[] | never;
    props?: boolean; // Record<string, any>
    redirect?: RouteRecordRedirectOption;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    meta?: Record<string, any>;
    end?: boolean;
    sensitive?: boolean;
    strict?: boolean;
    langAlias?: Record<string, string>;
};
export type TRouteProps = Omit<TLangRouterProps, 'langAlias' | 'children'> & {
    children?: TRouteProps[];
};

export type TRouteInheritance = {
    parent?: LangRoute;
};

export type TRouteParam = Record<string, undefined | string | number | (string | number)[]>;

// RouterLinkTranslate
export type To = string | number | TRouterTo;

export type TRouterLinkProps = Omit<
    AllowedComponentProps & ComponentCustomProps & RouterLinkProps,
    'key' | 'ref' | 'ref_for' | 'ref_key' | 'to'
>; // Omit<InstanceType<typeof RouterLink>['$props'], 'key' | 'ref' | 'ref_for' | 'ref_key' | 'to'>
export type TRouterTo = {
    force?: boolean;
    hash?: string;
    params?: TRouteParam;
    query?: LocationQueryRaw;
    replace?: boolean;
    state?: HistoryState;
} & (
    | {
          name: string;
          path?: never;
      }
    | {
          name?: never;
          path: string;
      }
);

export type RouterLinkTranslateProps = TRouterLinkProps & { lang?: string; to: To };
