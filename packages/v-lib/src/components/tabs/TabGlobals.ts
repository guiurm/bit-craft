import type { TRenderComponent } from '@/@core/types';
import type { TNoppNoArgs } from '@guiurm/utility-types';
import type { Ref } from 'vue';

export const TAB_ADD = 'add_tab' as const;
export const TAB_REMOVE = 'rm_tab' as const;
export const TAB_SET_ACTIVE = 'set_active_tab' as const;
export const TAB_DIRECTION_LINE = 'line';
export const TAB_DIRECTION_COL = 'col';

export type TSlideHeader = string | { component: TRenderComponent; binds: Record<string, any> };
export type TTabSlideData = {
    header: string | { component: TRenderComponent; binds: Record<string, any> };
    id: string;
    active: boolean;
    emit: { clickTab: TNoppNoArgs; show: TNoppNoArgs; hide: TNoppNoArgs };
};

export type TTabInjections = {
    [TAB_ADD]: (data: TTabSlideData) => Ref<TTabSlideData>;
    [TAB_REMOVE]: (tabId: string) => void;
    [TAB_SET_ACTIVE]: (tabId: string) => void;
};
export type TTabMenuDirection = typeof TAB_DIRECTION_LINE | typeof TAB_DIRECTION_COL;
