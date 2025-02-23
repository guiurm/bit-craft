import { ApiConnectorError } from '@bl/api-connector';
import { App } from 'vue';
import { AxiosError } from 'axios';
import { AxiosInstance } from 'axios';
import { Component } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { CreateAxiosDefaults } from 'axios';
import { DefineComponent } from 'vue';
import { DefineSetupFnComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { inject } from 'vue';
import { JSX } from 'vue/jsx-runtime';
import { Method } from 'axios';
import { provide } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';
import { RendererElement } from 'vue';
import { StyleValue } from 'vue';
import { TDOMSizing } from '@bl/doom-kit';
import { TMinAxiosConfig } from '@bl/api-connector';
import { TResponseValidator } from '@bl/api-connector';
import { VNode } from 'vue';

declare const __VLS_component: DefineComponent<    {
    unique?: boolean;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    unique?: boolean;
}> & Readonly<{}>, {
    unique: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_10: DefineComponent<TProps_2, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:model-value": (status: boolean) => any;
}, string, PublicProps, Readonly<TProps_2> & Readonly<{
    "onUpdate:model-value"?: ((status: boolean) => any) | undefined;
}>, {
    modelValue: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_11: DefineComponent<TBaseModalProps & {
    modalCss?: string | Record<string, boolean>;
    modalStyle?: StyleValue;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    cancel: () => any;
    close: () => any;
    open: () => any;
    "update:visible": (n: boolean) => any;
    accept: () => any;
}, string, PublicProps, Readonly<TBaseModalProps & {
    modalCss?: string | Record<string, boolean>;
    modalStyle?: StyleValue;
}> & Readonly<{
    onCancel?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:visible"?: ((n: boolean) => any) | undefined;
    onAccept?: (() => any) | undefined;
}>, {
    visible: boolean;
    beforeAccept: () => boolean;
    afterAccept: TNoppNoArgs;
    closeOnClickOutside: boolean;
    outsideClickHandler: (event: MouseEvent) => boolean;
    modalCss: string | Record<string, boolean>;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_12: DefineComponent<TBaseModalProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    cancel: () => any;
    close: () => any;
    open: () => any;
    "update:visible": (n: boolean) => any;
    accept: () => any;
}, string, PublicProps, Readonly<TBaseModalProps> & Readonly<{
    onCancel?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:visible"?: ((n: boolean) => any) | undefined;
    onAccept?: (() => any) | undefined;
}>, {
    visible: boolean;
    beforeAccept: () => boolean;
    afterAccept: TNoppNoArgs;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_13: DefineComponent<    {
    direction?: TTabMenuDirection;
    allHidden?: boolean;
    headerClass?: string;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    direction?: TTabMenuDirection;
    allHidden?: boolean;
    headerClass?: string;
}> & Readonly<{}>, {
    direction: TTabMenuDirection;
    allHidden: boolean;
    headerClass: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_14: DefineComponent<    {
    header: string | {
        component: TRenderComponent;
        binds: Record<string, any>;
    };
    id?: string;
    active?: boolean;
    transitionName?: string;
    class?: TCss;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    clickTab: () => any;
    show: () => any;
    hide: () => any;
}, string, PublicProps, Readonly<{
    header: string | {
        component: TRenderComponent;
        binds: Record<string, any>;
    };
    id?: string;
    active?: boolean;
    transitionName?: string;
    class?: TCss;
}> & Readonly<{
    onClickTab?: (() => any) | undefined;
    onShow?: (() => any) | undefined;
    onHide?: (() => any) | undefined;
}>, {
    class: TCss;
    active: boolean;
    transitionName: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_15: DefineComponent<TToastItemProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    close: () => any;
    "update:modelValue": (n: boolean) => any;
}, string, PublicProps, Readonly<TToastItemProps> & Readonly<{
    onClose?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((n: boolean) => any) | undefined;
}>, {
    liveTime: number;
    showLifeTime: boolean;
    modelValue: boolean;
    css: TCss;
    type: "success" | "warning" | "error";
    showIcon: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_2: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    change: (position: TCarrouselCardPosition) => any;
    left: () => any;
    visible: () => any;
    hidden: () => any;
    right: () => any;
}, string, PublicProps, Readonly<{}> & Readonly<{
    onChange?: ((position: TCarrouselCardPosition) => any) | undefined;
    onLeft?: (() => any) | undefined;
    onVisible?: (() => any) | undefined;
    onHidden?: (() => any) | undefined;
    onRight?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

declare const __VLS_component_3: DefineComponent<    {
    infinite?: boolean;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    infinite?: boolean;
}> & Readonly<{}>, {
    infinite: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_4: DefineComponent<TProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    close: () => any;
    "update:model-value": (status: boolean) => any;
    open: () => any;
}, string, PublicProps, Readonly<TProps> & Readonly<{
    onClose?: (() => any) | undefined;
    "onUpdate:model-value"?: ((status: boolean) => any) | undefined;
    onOpen?: (() => any) | undefined;
}>, {
    modelValue: boolean;
    class: TCss;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_5: DefineComponent<TTableProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<TTableProps> & Readonly<{}>, {
    head: THeaderProps;
    css: TCss;
    rows: TRowProps[];
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_6: DefineSetupFnComponent<Record<string, any>, {}, {}, Record<string, any> & {}, PublicProps>;

declare const __VLS_component_7: DefineSetupFnComponent<Record<string, any>, {}, {}, Record<string, any> & {}, PublicProps>;

declare const __VLS_component_8: DefineComponent<THeaderProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    cellClick: (column: number, cellId: string) => any;
    rowClick: (e: MouseEvent) => any;
    rowAuxclick: (e: MouseEvent) => any;
    rowDblclick: (e: MouseEvent) => any;
    "update:cells": (cells: TCellProps[]) => any;
}, string, PublicProps, Readonly<THeaderProps> & Readonly<{
    onCellClick?: ((column: number, cellId: string) => any) | undefined;
    onRowClick?: ((e: MouseEvent) => any) | undefined;
    onRowAuxclick?: ((e: MouseEvent) => any) | undefined;
    onRowDblclick?: ((e: MouseEvent) => any) | undefined;
    "onUpdate:cells"?: ((cells: TCellProps[]) => any) | undefined;
}>, {
    css: TCss;
    events: {
        onHeaderClick?: (e: MouseEvent) => void;
        onHeaderAuxclick?: (e: MouseEvent) => void;
        onHeaderDblclick?: (e: MouseEvent) => void;
    };
    cells: TCellProps[];
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_9: DefineComponent<TRowProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    rowClick: (e: MouseEvent) => any;
    rowAuxclick: (e: MouseEvent) => any;
    rowDblclick: (e: MouseEvent) => any;
    "update:cells": (cells: TCellProps[]) => any;
}, string, PublicProps, Readonly<TRowProps> & Readonly<{
    onRowClick?: ((e: MouseEvent) => any) | undefined;
    onRowAuxclick?: ((e: MouseEvent) => any) | undefined;
    onRowDblclick?: ((e: MouseEvent) => any) | undefined;
    "onUpdate:cells"?: ((cells: TCellProps[]) => any) | undefined;
}>, {
    css: TCss;
    events: {
        onRowClick?: (e: MouseEvent) => void;
        onRowAuxclick?: (e: MouseEvent) => void;
        onRowDblclick?: (e: MouseEvent) => void;
    };
    cells: TCellProps[];
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};

declare function __VLS_template_10(): {
    slots: Readonly<{
        header(): void;
        default(): void;
    }> & {
        header(): void;
        default(): void;
    };
    refs: {
        container: HTMLDivElement;
        dropdown: HTMLDivElement;
    };
    attrs: Partial<{}>;
};

declare function __VLS_template_11(): {
    slots: Readonly<{
        header: (data: TBaseModalActions) => {};
        body: (data: TBaseModalActions) => {};
        footer: (data: TBaseModalActions) => {};
    }> & {
        header: (data: TBaseModalActions) => {};
        body: (data: TBaseModalActions) => {};
        footer: (data: TBaseModalActions) => {};
    };
    refs: {
        modalDOM: HTMLDivElement;
    };
    attrs: Partial<{}>;
};

declare function __VLS_template_12(): {
    slots: Readonly<{
        header: (data: TBaseModalActions) => {};
        body: (data: TBaseModalActions) => {};
        footer: (data: TBaseModalActions) => {};
    }> & {
        header: (data: TBaseModalActions) => {};
        body: (data: TBaseModalActions) => {};
        footer: (data: TBaseModalActions) => {};
    };
    refs: {};
    attrs: Partial<{}>;
};

declare function __VLS_template_13(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};

declare function __VLS_template_14(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};

declare function __VLS_template_15(): {
    slots: Readonly<{
        default: () => {};
        icon: () => {};
    }> & {
        default: () => {};
        icon: () => {};
    };
    refs: {};
    attrs: Partial<{}>;
};

declare function __VLS_template_2(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {
        root: HTMLDivElement;
    };
    attrs: Partial<{}>;
};

declare function __VLS_template_3(): {
    slots: Readonly<{
        default(props: {
            currentIndex: number;
            totalSize: number;
            prev: TNoppNoArgs;
            next: TNoppNoArgs;
        }): void;
        prev(props: {
            prev: TNoppNoArgs;
        }): void;
        next(props: {
            next: TNoppNoArgs;
        }): void;
    }> & {
        default(props: {
            currentIndex: number;
            totalSize: number;
            prev: TNoppNoArgs;
            next: TNoppNoArgs;
        }): void;
        prev(props: {
            prev: TNoppNoArgs;
        }): void;
        next(props: {
            next: TNoppNoArgs;
        }): void;
    };
    refs: {};
    attrs: Partial<{}>;
};

declare function __VLS_template_4(): {
    slots: Readonly<{
        header(): void;
        default(): void;
    }> & {
        header(): void;
        default(): void;
    };
    refs: {};
    attrs: Partial<{}>;
};

declare function __VLS_template_5(): {
    slots: {
        header?(_: {}): any;
        body?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};

declare function __VLS_template_6(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};

declare function __VLS_template_7(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};

declare function __VLS_template_8(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};

declare function __VLS_template_9(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_TemplateResult_10 = ReturnType<typeof __VLS_template_10>;

declare type __VLS_TemplateResult_11 = ReturnType<typeof __VLS_template_11>;

declare type __VLS_TemplateResult_12 = ReturnType<typeof __VLS_template_12>;

declare type __VLS_TemplateResult_13 = ReturnType<typeof __VLS_template_13>;

declare type __VLS_TemplateResult_14 = ReturnType<typeof __VLS_template_14>;

declare type __VLS_TemplateResult_15 = ReturnType<typeof __VLS_template_15>;

declare type __VLS_TemplateResult_2 = ReturnType<typeof __VLS_template_2>;

declare type __VLS_TemplateResult_3 = ReturnType<typeof __VLS_template_3>;

declare type __VLS_TemplateResult_4 = ReturnType<typeof __VLS_template_4>;

declare type __VLS_TemplateResult_5 = ReturnType<typeof __VLS_template_5>;

declare type __VLS_TemplateResult_6 = ReturnType<typeof __VLS_template_6>;

declare type __VLS_TemplateResult_7 = ReturnType<typeof __VLS_template_7>;

declare type __VLS_TemplateResult_8 = ReturnType<typeof __VLS_template_8>;

declare type __VLS_TemplateResult_9 = ReturnType<typeof __VLS_template_9>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_10<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_11<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_12<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_13<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_14<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_15<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_4<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_5<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_6<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_7<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_8<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_9<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const AccordionComponent: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

export declare const BaseModal: __VLS_WithTemplateSlots_11<typeof __VLS_component_11, __VLS_TemplateResult_11["slots"]>;

export declare const buildDatatableCell: (cell: TCellProps & {
    value: NonNullable<TCellProps["value"]>;
}) => TCellProps;

export declare const buildDatatableRow: (row?: TRowProps) => TRowProps;

export declare const buildDatatableRows: (rows?: TRowProps[]) => TRowProps[];

export declare const CarouselCard: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, __VLS_TemplateResult_2["slots"]>;

export declare const CarouselContainer: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, __VLS_TemplateResult_3["slots"]>;

export declare class CarouselSubscriber {
    private _handlers;
    constructor();
    on(fn: TCarrouselSubscriberCallback): void;
    distpach(...data: Parameters<TCarrouselSubscriberCallback>): void;
    clear(): void;
}

export declare const CARROUSEL_ACTIONS = "carrousel.actions";

export declare const CDatatable: __VLS_WithTemplateSlots_5<typeof __VLS_component_5, __VLS_TemplateResult_5["slots"]>;

export declare const CDatatableCell: __VLS_WithTemplateSlots_6<typeof __VLS_component_6, __VLS_TemplateResult_6["slots"]>;

export declare const CDatatableCellHeader: __VLS_WithTemplateSlots_7<typeof __VLS_component_7, __VLS_TemplateResult_7["slots"]>;

export declare const CDatatableHeader: __VLS_WithTemplateSlots_8<typeof __VLS_component_8, __VLS_TemplateResult_8["slots"]>;

export declare const CDatatableRow: __VLS_WithTemplateSlots_9<typeof __VLS_component_9, __VLS_TemplateResult_9["slots"]>;

export declare const cellInjectFromHeader: (inj: typeof inject) => THeaderProvide;

export declare const cellInjectFromRow: (inj: typeof inject) => TRowProvide;

export declare const CollapseComponent: __VLS_WithTemplateSlots_4<typeof __VLS_component_4, __VLS_TemplateResult_4["slots"]>;

export declare const createToast: (conf: TToastItemBinds, id?: string) => void;

declare const customNoop: (e: DragEvent) => void;

declare const dragEventsKeys: readonly ["drag", "dragend", "dragenter", "dragstart", "dragover", "dragexit", "dragleave", "drop"];

export declare const DraggableSortable: DefineComponent<    {
    data: V[];
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    data: V[];
}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

export declare const DraggableSortableContainer: DefineComponent<    {
    modelValue?: TItem[];
    targetContainer?: boolean;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (items: TItem[]) => any;
}, string, PublicProps, Readonly<{
    modelValue?: TItem[];
    targetContainer?: boolean;
}> & Readonly<{
    "onUpdate:modelValue"?: ((items: TItem[]) => any) | undefined;
}>, {
    modelValue: TItem[];
    targetContainer: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

export declare const DraggableSortableItem: DefineComponent<    {
    modelValue: TItem;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    dragend: (item: TItem, event: MouseEvent) => any;
    dragenter: (item: TItem, domeEvent: DragEvent) => any;
    dragstart: (event: TDragStartEvent) => any;
    "update:model-value": (item: TItem) => any;
}, string, PublicProps, Readonly<{
    modelValue: TItem;
}> & Readonly<{
    onDragend?: ((item: TItem, event: MouseEvent) => any) | undefined;
    onDragenter?: ((item: TItem, domeEvent: DragEvent) => any) | undefined;
    onDragstart?: ((event: TDragStartEvent) => any) | undefined;
    "onUpdate:model-value"?: ((item: TItem) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

export declare const DraggableSortableItemShadow: DefineComponent<ExtractPropTypes<    {
    height: {
        type: StringConstructor;
        required: true;
    };
    width: {
        type: StringConstructor;
        required: true;
    };
}>, () => JSX.Element, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
    height: {
        type: StringConstructor;
        required: true;
    };
    width: {
        type: StringConstructor;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const DropdownComponent: __VLS_WithTemplateSlots_10<typeof __VLS_component_10, __VLS_TemplateResult_10["slots"]>;

export declare const HEADER_PROVIDE: unique symbol;

export declare const headerInjectFromTable: (inj: typeof inject) => TTableProvideHeader;

export declare const headerProvide: (prov: typeof provide, callback: THeaderProvide) => void;

export declare type IgnoreElement = string | HTMLElement;

export declare const onClickOutside: <T extends HTMLElement>(target: T, handler: (event: MouseEvent) => void, options?: OnClickOutsideOptions) => TNoppNoArgs;

export declare interface OnClickOutsideOptions {
    ignore?: IgnoreElement[];
    capture?: boolean;
    omitChildren?: boolean;
}

/**
 * A function that wraps an async function and returns an object with reactive properties of `data`, `loading`, `error` and a `call` method.
 * The `data` property is the resolved value of the async function, the `loading` property is a boolean indicating whether the async function is currently running,
 * the `error` property is the rejected value of the async function, and the `call` method is a function that can be used to call the async function with arguments.
 *
 * @param {function} fn The async function to be wrapped.
 * @param {object} conf The configuration object that contains the following properties:
 *   - `onLoad`: A function to be called when the async function is loading.
 *   - `onSuccess`: A function to be called when the async function is successful.
 *   - `onError`: A function to be called when the async function fails.
 *   - `autoCall`: A boolean indicating whether the async function should be called automatically with the provided arguments.
 *   - `args`: The arguments to be passed to the async function if `autoCall` is true.
 * @return {object} An object with the reactive properties and the `call` method.
 *
 * @example
 * const { data, loading, error, call } = reactiveAsyncCallback(fetchData, {
 *     onSuccess: (result) => console.log('Success:', result),
 *     onError: (err) => console.error('Error:', err),
 *     autoCall: true,
 *     args: ['param1', 'param2']
 * });
 */
export declare const reactiveAsyncCallback: <E = Error, Fn extends (...agrs: any[]) => Promise<any> = () => Promise<any>>(fn: Fn, conf: TReactiveAsyncCallbackConf<TPromiseFunctionExtractArgsAndReturn<Fn>, E>) => {
    data: Ref<TPromiseFunctionExtractArgsAndReturn<Fn>["response"], TPromiseFunctionExtractArgsAndReturn<Fn>["response"]>;
    loading: Ref<boolean, boolean>;
    error: Ref<E | null, E | null>;
    call: (...args: TPromiseFunctionExtractArgsAndReturn<Fn>["args"]) => Promise<void>;
};

export declare const ROW_PROVIDE: unique symbol;

export declare const rowInjectFromTable: (inj: typeof inject) => TTableProvide;

export declare const rowProvide: (prov: typeof provide, callback: TRowProvide) => void;

declare const slotData: {
    close: () => void;
    accept: () => void;
    cancel: () => void;
    open: () => void;
    isVisible: Ref<boolean, boolean>;
};

export declare const StyledModal: __VLS_WithTemplateSlots_12<typeof __VLS_component_12, __VLS_TemplateResult_12["slots"]>;

export declare const TAB_ADD: "add_tab";

export declare const TAB_DIRECTION_COL = "col";

export declare const TAB_DIRECTION_LINE = "line";

export declare const TAB_REMOVE: "rm_tab";

export declare const TAB_SET_ACTIVE: "set_active_tab";

export declare const TABLE_PROVIDE: unique symbol;

export declare const TABLE_PROVIDE_HEADER: unique symbol;

export declare const tableProvide: (prov: typeof provide, callback: TTableProvide) => void;

export declare const tableProvideHeader: (prov: typeof provide, callback: TTableProvideHeader) => void;

export declare const TabMenu: __VLS_WithTemplateSlots_13<typeof __VLS_component_13, __VLS_TemplateResult_13["slots"]>;

export declare const TabSlide: __VLS_WithTemplateSlots_14<typeof __VLS_component_14, __VLS_TemplateResult_14["slots"]>;

declare type TApiCallbackConfig<Fn = (...args: any[]) => Promise<any>> = Fn extends (...args: any[]) => Promise<infer Res> ? {
    onLoad?: () => void;
    onError?: (error: ApiConnectorError) => void;
    onSuccess?: (res: Res) => void;
} : never;

declare type TBaseModalActions = typeof slotData;

declare type TBaseModalProps = {
    visible?: boolean;
    target?: HTMLElement;
    beforeAccept?: () => boolean;
    afterAccept?: TNoppNoArgs;
    closeOnClickOutside?: boolean;
    outsideClickHandler?: (event: MouseEvent) => boolean;
};

export declare type TCarrouselCardInjection = {
    addCard: (data: {
        id: string;
        subscriber: CarouselSubscriber;
    }) => void;
    setContainerHeight: (v: number) => void;
};

declare type TCarrouselCardPosition = 'left' | 'visible' | 'hidden' | 'right';

export declare type TCarrouselItem = {
    id: string;
    subscriber: CarouselSubscriber;
};

export declare type TCarrouselProvideCard = TCarrouselCardInjection;

declare type TCarrouselSubscriberCallback = (data: TCarrouselCardPosition) => void;

export declare type TCellCore = {
    uuid: string;
} & TCellProps;

export declare type TCellProps = {
    identifier?: string;
    colSpan?: number;
    css?: TCss;
    binds?: Record<string, any>;
    events?: {
        onCellClick?: (e: MouseEvent) => void;
        onCellAuxclick?: (e: MouseEvent) => void;
        onCellDblclick?: (e: MouseEvent) => void;
    };
} & ({
    value?: {
        node: TRenderComponent;
        filterValue?: string;
    };
} | {
    value?: string | number;
});

export declare type TCss = string | string[] | Record<string, boolean | Ref<boolean> | ComputedRef<boolean>>;

declare type TCustomNoop = typeof customNoop;

export declare type TDragAndDropCallbacks = {
    [K in (typeof dragEventsKeys)[number]]?: TCustomNoop;
};

export declare type TDragAndDropEvents = {
    [K in keyof TDragAndDropCallbacks as `on${Capitalize<K>}`]-?: TDragAndDropCallbacks[K];
};

declare type TDragStartEvent = {
    sizing: TDOMSizing;
    domEvent: DragEvent;
    target: HTMLDivElement;
    item: TItem;
};

declare type TEventEmitterToBindings<E extends Record<string, any[]>, T extends string = `update:${string}`> = {
    [K in keyof E as K extends T ? never : `on${Capitalize<K & string>}`]: (...args: E[K]) => void;
};

export declare type THeaderProps = {
    identifier?: string;
    cols?: number;
    cells?: TCellProps[];
    css?: TCss;
    customTemplateColumn?: string;
    events?: {
        onHeaderClick?: (e: MouseEvent) => void;
        onHeaderAuxclick?: (e: MouseEvent) => void;
        onHeaderDblclick?: (e: MouseEvent) => void;
    };
};

export declare type THeaderProvide = (cell: TCellProps) => void;

declare type TItem = {
    id: number;
    node: string | TRenderComponent;
    dragging: boolean;
};

declare type TNoppNoArgs = () => void;

export declare const ToastContainer: DefineComponent<TToastContainerProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<TToastContainerProps> & Readonly<{}>, {
    css: TCss;
    target: "document" | "parent";
    position: TToastContainerPosition;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

export declare const ToastItem: __VLS_WithTemplateSlots_15<typeof __VLS_component_15, __VLS_TemplateResult_15["slots"]>;

export declare type ToastItemVNode = VNode<typeof ToastItem, RendererElement, TToastItemProps>;

export declare type ToastItemVNodeList = Ref<[uuid: string, node: ToastItemVNode][]>;

declare type TPromiseFunctionExtractArgsAndReturn<Fn = (...args: any[]) => Promise<any>> = Fn extends (...args: infer Args) => Promise<infer R> ? {
    args: Args;
    response: R;
} : never;

declare type TProps = {
    modelValue?: boolean;
    header?: string;
    class?: TCss;
};

declare type TProps_2 = {
    modelValue?: boolean;
    header?: string;
    closeOutSiceClick?: boolean;
};

export declare const translateCss: (conf: TCss) => Record<string, boolean | Ref<boolean, boolean> | ComputedRef<boolean>>;

declare type TReactiveAsyncCallbackConf<C extends TPromiseFunctionExtractArgsAndReturn, E> = {
    onLoad?: TNoppNoArgs;
    onSuccess?: (data: C['response']) => void;
    onError?: (error: E) => void;
} & ({
    autoCall: true;
    args: C['args'];
} | {
    autoCall?: false;
});

declare type TRenderComponent = Component | (() => VNode);

export declare type TRowProps = {
    identifier?: string;
    cols?: number;
    cells?: TCellProps[];
    css?: TCss;
    customTemplateColumn?: string;
    events?: {
        onRowClick?: (e: MouseEvent) => void;
        onRowAuxclick?: (e: MouseEvent) => void;
        onRowDblclick?: (e: MouseEvent) => void;
    };
};

export declare type TRowProvide = (cell: TCellProps) => void;

export declare type TSlideHeader = string | {
    component: TRenderComponent;
    binds: Record<string, any>;
};

export declare type TTabInjections = {
    [TAB_ADD]: (data: TTabSlideData) => Ref<TTabSlideData>;
    [TAB_REMOVE]: (tabId: string) => void;
    [TAB_SET_ACTIVE]: (tabId: string) => void;
};

export declare type TTableProps = {
    cols: number;
    head?: THeaderProps;
    rows?: TRowProps[];
    css?: TCss;
    customTemplateColumn?: string;
};

export declare type TTableProvide = (row: TRowProps) => void;

export declare type TTableProvideHeader = (row: THeaderProps) => void;

export declare type TTabMenuDirection = typeof TAB_DIRECTION_LINE | typeof TAB_DIRECTION_COL;

export declare type TTabSlideData = {
    header: string | {
        component: TRenderComponent;
        binds: Record<string, any>;
    };
    id: string;
    active: boolean;
    emit: {
        clickTab: TNoppNoArgs;
        show: TNoppNoArgs;
        hide: TNoppNoArgs;
    };
};

declare type TToastContainerPosition = `${'top' | 'bottom'}-${'right' | 'center' | 'left'}`;

declare type TToastContainerProps = {
    css?: TCss;
    position?: TToastContainerPosition;
    target?: 'document' | 'parent';
    id?: string;
};

declare type TToastEmits = {
    'update:modelValue': [n: boolean];
    close: [];
};

declare type TToastItemBinds = Partial<TEventEmitterToBindings<TToastEmits>> & TToastItemProps & Pick<Required<TToastItemProps>, 'message'>;

declare type TToastItemProps = {
    message?: string | TRenderComponent;
    liveTime?: number;
    showLifeTime?: boolean;
    modelValue?: boolean;
    css?: TCss;
    id?: string;
    type?: 'success' | 'warning' | 'error';
    showIcon?: boolean;
};

export declare type TUseCssClasses = string | Record<string, boolean>;

declare type TWindowEventStorage = {
    [EventName in keyof WindowEventMap]: (this: Window, ev: WindowEventMap[EventName]) => void;
};

export declare const useApiConnector: (config?: CreateAxiosDefaults<any> | undefined) => {
    get: <Response>(conf?: TApiCallbackConfig<() => Promise<Response>>) => {
        data: Ref<Response, Response>;
        loading: Ref<boolean, boolean>;
        error: Ref<ApiConnectorError<AxiosError<unknown, any>> | null, ApiConnectorError<AxiosError<unknown, any>> | null>;
        call: (url: string, responseValidator?: TResponseValidator | undefined, config?: TMinAxiosConfig | undefined) => Promise<void>;
    };
    post: <Response>(conf?: TApiCallbackConfig<() => Promise<Response>>) => {
        data: Ref<Response, Response>;
        loading: Ref<boolean, boolean>;
        error: Ref<ApiConnectorError<AxiosError<unknown, any>> | null, ApiConnectorError<AxiosError<unknown, any>> | null>;
        call: (url: string, data: any, responseValidator?: TResponseValidator | undefined, config?: TMinAxiosConfig | undefined) => Promise<void>;
    };
    del: <Response>(conf?: TApiCallbackConfig<() => Promise<Response>>) => {
        data: Ref<Response, Response>;
        loading: Ref<boolean, boolean>;
        error: Ref<ApiConnectorError<AxiosError<unknown, any>> | null, ApiConnectorError<AxiosError<unknown, any>> | null>;
        call: (url: string, responseValidator?: TResponseValidator | undefined, config?: TMinAxiosConfig | undefined) => Promise<void>;
    };
    patch: <Response>(conf?: TApiCallbackConfig<() => Promise<Response>>) => {
        data: Ref<Response, Response>;
        loading: Ref<boolean, boolean>;
        error: Ref<ApiConnectorError<AxiosError<unknown, any>> | null, ApiConnectorError<AxiosError<unknown, any>> | null>;
        call: (url: string, data: any, responseValidator?: TResponseValidator | undefined, config?: TMinAxiosConfig | undefined) => Promise<void>;
    };
    put: <Response>(conf?: TApiCallbackConfig<() => Promise<Response>>) => {
        data: Ref<Response, Response>;
        loading: Ref<boolean, boolean>;
        error: Ref<ApiConnectorError<AxiosError<unknown, any>> | null, ApiConnectorError<AxiosError<unknown, any>> | null>;
        call: (url: string, data: any, responseValidator?: TResponseValidator | undefined, config?: TMinAxiosConfig | undefined) => Promise<void>;
    };
    request: <Response>(conf?: TApiCallbackConfig<() => Promise<Response>>) => {
        data: Ref<Response, Response>;
        loading: Ref<boolean, boolean>;
        error: Ref<ApiConnectorError<AxiosError<unknown, any>> | null, ApiConnectorError<AxiosError<unknown, any>> | null>;
        call: (method: Method, url: string, data: any, responseValidator?: TResponseValidator | undefined, config?: TMinAxiosConfig | undefined) => Promise<void>;
    };
    axiosInstance: AxiosInstance;
};

export declare const useBitCraft: () => (app: App, ..._options: any[]) => void;

export declare const useCarousel: ({ items, infinite }?: {
    items?: Ref<TCarrouselItem[]>;
    infinite?: boolean;
}) => {
    itemsList: Ref<TCarrouselItem[], TCarrouselItem[]>;
    currentIndex: Ref<number, number>;
    height: Ref<{
        height: string;
    }, {
        height: string;
    } | {
        height: string;
    }>;
    distpachListeners: (visible: number, left: number, right: number) => void;
    next: () => void;
    prev: () => void;
};

export declare const useCSSGenerator: (defaultCss?: TUseCssClasses) => {
    computedStyles: Ref<Record<string, boolean>, Record<string, boolean>>;
    setStyles: (cssConf: TUseCssClasses) => Ref<Record<string, boolean>, Record<string, boolean>> | undefined;
};

export declare const useDomNativeEventManager: (target: HTMLElement | Window | Document) => {
    on: <K extends keyof TWindowEventStorage>(eve: K, fn: TWindowEventStorage[K], conf?: boolean | AddEventListenerOptions) => () => void;
    clearAll: () => void;
};

export declare const useDragAndDropItem: (calls?: TDragAndDropCallbacks, draggable?: boolean) => {
    draggable: boolean;
    onDrag: (e: DragEvent) => void;
    onDragend: (e: DragEvent) => void;
    onDragenter: (e: DragEvent) => void;
    onDragleave: (e: DragEvent) => void;
    onDragover: (e: DragEvent) => void;
    onDragstart: (e: DragEvent) => void;
    onDrop: (e: DragEvent) => void;
    onDragexit: (e: DragEvent) => void;
};

declare type V = number | string | TRenderComponent;

export { }
