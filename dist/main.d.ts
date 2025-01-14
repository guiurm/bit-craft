import { App } from 'vue';
import { Component } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { inject } from 'vue';
import { PropType } from 'vue';
import { provide } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import { StyleValue } from 'vue';
import { VNode } from 'vue';

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_10<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_11<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_12<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_13<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_14<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_2<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_3<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_4<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_5<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_6<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_7<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_8<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_9<T> = T extends undefined ? never : T;

declare type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_PrettifyLocal_10<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_PrettifyLocal_11<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_PrettifyLocal_12<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_PrettifyLocal_13<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_PrettifyLocal_2<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_PrettifyLocal_3<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_PrettifyLocal_4<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_PrettifyLocal_5<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_PrettifyLocal_6<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_PrettifyLocal_7<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_PrettifyLocal_8<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_PrettifyLocal_9<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToOption_10<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_10<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToOption_11<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_11<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToOption_12<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_12<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToOption_13<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_13<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToOption_14<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_14<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToOption_2<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_2<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToOption_3<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_3<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToOption_4<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_4<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToOption_5<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_5<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToOption_6<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_6<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToOption_7<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_7<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToOption_8<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_8<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToOption_9<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_9<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_10<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal_10<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_11<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal_11<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_12<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal_12<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_13<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal_13<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_2<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal_2<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_3<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal_3<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_4<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal_4<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_5<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal_5<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_6<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal_6<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_7<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal_7<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_8<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal_8<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_9<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal_9<P[K] & {
        default: D[K];
    }> : P[K];
};

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

export declare const BaseModal: __VLS_WithTemplateSlots_9<DefineComponent<__VLS_WithDefaults_8<__VLS_TypePropsToOption_9<TBaseModalProps & {
    modalCss?: string | Record<string, boolean> | undefined;
    modalStyle?: StyleValue;
}>, {
    beforeAccept: () => true;
    afterAccept: () => void;
    closeOnClickOutside: boolean;
    outsideClickHandler: () => true;
    visible: boolean;
    modalCss: string;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    cancel: () => void;
    close: () => void;
    "update:visible": (n: boolean) => void;
    open: () => void;
    accept: () => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_8<__VLS_TypePropsToOption_9<TBaseModalProps & {
    modalCss?: string | Record<string, boolean> | undefined;
    modalStyle?: StyleValue;
}>, {
    beforeAccept: () => true;
    afterAccept: () => void;
    closeOnClickOutside: boolean;
    outsideClickHandler: () => true;
    visible: boolean;
    modalCss: string;
}>>> & {
    onClose?: (() => any) | undefined;
    onCancel?: (() => any) | undefined;
    "onUpdate:visible"?: ((n: boolean) => any) | undefined;
    onOpen?: (() => any) | undefined;
    onAccept?: (() => any) | undefined;
}, {
    visible: boolean;
    beforeAccept: () => boolean;
    afterAccept: TNoppNoArgs;
    closeOnClickOutside: boolean;
    outsideClickHandler: (event: MouseEvent) => boolean;
    modalCss: string | Record<string, boolean>;
}, {}>, Readonly<{
    header: (data: {
        close: () => void;
        accept: () => void;
        cancel: () => void;
        open: () => void;
        isVisible: ComputedRef<boolean>;
    }) => {};
    body: (data: {
        close: () => void;
        accept: () => void;
        cancel: () => void;
        open: () => void;
        isVisible: ComputedRef<boolean>;
    }) => {};
    footer: (data: {
        close: () => void;
        accept: () => void;
        cancel: () => void;
        open: () => void;
        isVisible: ComputedRef<boolean>;
    }) => {};
}> & {
    header: (data: {
        close: () => void;
        accept: () => void;
        cancel: () => void;
        open: () => void;
        isVisible: ComputedRef<boolean>;
    }) => {};
    body: (data: {
        close: () => void;
        accept: () => void;
        cancel: () => void;
        open: () => void;
        isVisible: ComputedRef<boolean>;
    }) => {};
    footer: (data: {
        close: () => void;
        accept: () => void;
        cancel: () => void;
        open: () => void;
        isVisible: ComputedRef<boolean>;
    }) => {};
}>;

export declare const buildDatatableCell: (cell: TCellProps & {
    value: NonNullable<TCellProps['value']>;
}) => TCellProps;

export declare const buildDatatableRow: (row?: TRowProps) => TRowProps;

export declare const buildDatatableRows: (rows?: TRowProps[]) => TRowProps[];

export declare const CarouselCard: __VLS_WithTemplateSlots<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    change: (position: TCarrouselCardPosition) => void;
    left: () => void;
    visible: () => void;
    hidden: () => void;
    right: () => void;
}, string, PublicProps, Readonly<ExtractPropTypes<    {}>> & {
    onChange?: ((position: TCarrouselCardPosition) => any) | undefined;
    onLeft?: (() => any) | undefined;
    onVisible?: (() => any) | undefined;
    onHidden?: (() => any) | undefined;
    onRight?: (() => any) | undefined;
}, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const CarouselContainer: __VLS_WithTemplateSlots_2<DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    infinite?: boolean | undefined;
}>, {
    infinite: boolean;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    infinite?: boolean | undefined;
}>, {
    infinite: boolean;
}>>>, {
    infinite: boolean;
}, {}>, Readonly<{
    default(): void;
    prev(props: {
        prev: TNoppNoArgs;
    }): void;
    next(props: {
        next: TNoppNoArgs;
    }): void;
}> & {
    default(): void;
    prev(props: {
        prev: TNoppNoArgs;
    }): void;
    next(props: {
        next: TNoppNoArgs;
    }): void;
}>;

export declare class CarouselSubscriber {
    private _handlers;
    constructor();
    on(fn: TCarrouselSubscriberCallback): void;
    distpach(...data: Parameters<TCarrouselSubscriberCallback>): void;
    clear(): void;
}

export declare const CARROUSEL_ACTIONS = "carrousel.actions";

export declare const CDatatable: __VLS_WithTemplateSlots_3<DefineComponent<__VLS_WithDefaults_2<__VLS_TypePropsToOption_2<TTableProps>, {
    head: () => {};
    rows: () => never[];
    css: string;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_2<__VLS_TypePropsToOption_2<TTableProps>, {
    head: () => {};
    rows: () => never[];
    css: string;
}>>>, {
    head: THeaderProps;
    css: TCss;
    rows: TRowProps[];
}, {}>, {
    header?(_: {}): any;
    body?(_: {}): any;
}>;

export declare const CDatatableCell: __VLS_WithTemplateSlots_4<DefineComponent<__VLS_WithDefaults_3<__VLS_TypePropsToOption_3<TCellProps>, {
    cell: () => {
        value: string;
    };
    css: string;
    binds: () => {};
    events: () => {
        onCellClick: (...args: any[]) => void;
        onCellAuxclick: (...args: any[]) => void;
        onCellDblclick: (...args: any[]) => void;
    };
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    cellClick: (e: MouseEvent) => void;
    cellAuxclick: (e: MouseEvent) => void;
    cellDblclick: (e: MouseEvent) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_3<__VLS_TypePropsToOption_3<{
    identifier?: string | undefined;
    colSpan?: number | undefined;
    css?: TCss | undefined;
    binds?: Record<string, any> | undefined;
    events?: {
        onCellClick?: ((e: MouseEvent) => void) | undefined;
        onCellAuxclick?: ((e: MouseEvent) => void) | undefined;
        onCellDblclick?: ((e: MouseEvent) => void) | undefined;
    } | undefined;
} & {
    value?: {
        node: Component | (() => VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>);
        filterValue?: string | undefined;
    } | undefined;
}>, {
    cell: () => {
        value: string;
    };
    css: string;
    binds: () => {};
    events: () => {
        onCellClick: (...args: any[]) => void;
        onCellAuxclick: (...args: any[]) => void;
        onCellDblclick: (...args: any[]) => void;
    };
}>> | ExtractPropTypes<__VLS_WithDefaults_3<__VLS_TypePropsToOption_3<{
    identifier?: string | undefined;
    colSpan?: number | undefined;
    css?: TCss | undefined;
    binds?: Record<string, any> | undefined;
    events?: {
        onCellClick?: ((e: MouseEvent) => void) | undefined;
        onCellAuxclick?: ((e: MouseEvent) => void) | undefined;
        onCellDblclick?: ((e: MouseEvent) => void) | undefined;
    } | undefined;
} & {
    value?: string | number | undefined;
}>, {
    cell: () => {
        value: string;
    };
    css: string;
    binds: () => {};
    events: () => {
        onCellClick: (...args: any[]) => void;
        onCellAuxclick: (...args: any[]) => void;
        onCellDblclick: (...args: any[]) => void;
    };
}>>> & {
    onCellClick?: ((e: MouseEvent) => any) | undefined;
    onCellAuxclick?: ((e: MouseEvent) => any) | undefined;
    onCellDblclick?: ((e: MouseEvent) => any) | undefined;
}, {
    css: TCss;
    binds: Record<string, any>;
    events: {
        onCellClick?: ((e: MouseEvent) => void) | undefined;
        onCellAuxclick?: ((e: MouseEvent) => void) | undefined;
        onCellDblclick?: ((e: MouseEvent) => void) | undefined;
    };
} | {
    css: TCss;
    binds: Record<string, any>;
    events: {
        onCellClick?: ((e: MouseEvent) => void) | undefined;
        onCellAuxclick?: ((e: MouseEvent) => void) | undefined;
        onCellDblclick?: ((e: MouseEvent) => void) | undefined;
    };
}, {}>, {
    default?(_: {}): any;
}>;

export declare const CDatatableCellHeader: __VLS_WithTemplateSlots_5<DefineComponent<__VLS_WithDefaults_4<__VLS_TypePropsToOption_4<TCellProps>, {
    cell: () => {
        value: string;
    };
    css: string;
    binds: () => {};
    events: () => {
        onCellClick: (...args: any[]) => void;
        onCellAuxclick: (...args: any[]) => void;
        onCellDblclick: (...args: any[]) => void;
    };
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    cellClick: (e: MouseEvent) => void;
    cellAuxclick: (e: MouseEvent) => void;
    cellDblclick: (e: MouseEvent) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_4<__VLS_TypePropsToOption_4<{
    identifier?: string | undefined;
    colSpan?: number | undefined;
    css?: TCss | undefined;
    binds?: Record<string, any> | undefined;
    events?: {
        onCellClick?: ((e: MouseEvent) => void) | undefined;
        onCellAuxclick?: ((e: MouseEvent) => void) | undefined;
        onCellDblclick?: ((e: MouseEvent) => void) | undefined;
    } | undefined;
} & {
    value?: {
        node: Component | (() => VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>);
        filterValue?: string | undefined;
    } | undefined;
}>, {
    cell: () => {
        value: string;
    };
    css: string;
    binds: () => {};
    events: () => {
        onCellClick: (...args: any[]) => void;
        onCellAuxclick: (...args: any[]) => void;
        onCellDblclick: (...args: any[]) => void;
    };
}>> | ExtractPropTypes<__VLS_WithDefaults_4<__VLS_TypePropsToOption_4<{
    identifier?: string | undefined;
    colSpan?: number | undefined;
    css?: TCss | undefined;
    binds?: Record<string, any> | undefined;
    events?: {
        onCellClick?: ((e: MouseEvent) => void) | undefined;
        onCellAuxclick?: ((e: MouseEvent) => void) | undefined;
        onCellDblclick?: ((e: MouseEvent) => void) | undefined;
    } | undefined;
} & {
    value?: string | number | undefined;
}>, {
    cell: () => {
        value: string;
    };
    css: string;
    binds: () => {};
    events: () => {
        onCellClick: (...args: any[]) => void;
        onCellAuxclick: (...args: any[]) => void;
        onCellDblclick: (...args: any[]) => void;
    };
}>>> & {
    onCellClick?: ((e: MouseEvent) => any) | undefined;
    onCellAuxclick?: ((e: MouseEvent) => any) | undefined;
    onCellDblclick?: ((e: MouseEvent) => any) | undefined;
}, {
    css: TCss;
    binds: Record<string, any>;
    events: {
        onCellClick?: ((e: MouseEvent) => void) | undefined;
        onCellAuxclick?: ((e: MouseEvent) => void) | undefined;
        onCellDblclick?: ((e: MouseEvent) => void) | undefined;
    };
} | {
    css: TCss;
    binds: Record<string, any>;
    events: {
        onCellClick?: ((e: MouseEvent) => void) | undefined;
        onCellAuxclick?: ((e: MouseEvent) => void) | undefined;
        onCellDblclick?: ((e: MouseEvent) => void) | undefined;
    };
}, {}>, {
    default?(_: {}): any;
}>;

export declare const CDatatableHeader: __VLS_WithTemplateSlots_6<DefineComponent<__VLS_WithDefaults_5<__VLS_TypePropsToOption_5<THeaderProps>, {
    cells: () => never[];
    css: string;
    events: () => {
        onHeaderClick: (...args: any[]) => void;
        onHeaderAuxclick: (...args: any[]) => void;
        onHeaderDblclick: (...args: any[]) => void;
    };
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    cellClick: (column: number, cellId: string) => void;
    rowClick: (e: MouseEvent) => void;
    rowAuxclick: (e: MouseEvent) => void;
    rowDblclick: (e: MouseEvent) => void;
    "update:cells": (cells: TCellProps[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_5<__VLS_TypePropsToOption_5<THeaderProps>, {
    cells: () => never[];
    css: string;
    events: () => {
        onHeaderClick: (...args: any[]) => void;
        onHeaderAuxclick: (...args: any[]) => void;
        onHeaderDblclick: (...args: any[]) => void;
    };
}>>> & {
    onCellClick?: ((column: number, cellId: string) => any) | undefined;
    onRowClick?: ((e: MouseEvent) => any) | undefined;
    onRowAuxclick?: ((e: MouseEvent) => any) | undefined;
    onRowDblclick?: ((e: MouseEvent) => any) | undefined;
    "onUpdate:cells"?: ((cells: TCellProps[]) => any) | undefined;
}, {
    css: TCss;
    events: {
        onHeaderClick?: ((e: MouseEvent) => void) | undefined;
        onHeaderAuxclick?: ((e: MouseEvent) => void) | undefined;
        onHeaderDblclick?: ((e: MouseEvent) => void) | undefined;
    };
    cells: TCellProps[];
}, {}>, {
    default?(_: {}): any;
}>;

export declare const CDatatableRow: __VLS_WithTemplateSlots_7<DefineComponent<__VLS_WithDefaults_6<__VLS_TypePropsToOption_6<TRowProps>, {
    cells: () => never[];
    css: string;
    events: () => {
        onRowClick: (...args: any[]) => void;
        onRowAuxclick: (...args: any[]) => void;
        onRowDblclick: (...args: any[]) => void;
    };
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    rowClick: (e: MouseEvent) => void;
    rowAuxclick: (e: MouseEvent) => void;
    rowDblclick: (e: MouseEvent) => void;
    "update:cells": (cells: TCellProps[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_6<__VLS_TypePropsToOption_6<TRowProps>, {
    cells: () => never[];
    css: string;
    events: () => {
        onRowClick: (...args: any[]) => void;
        onRowAuxclick: (...args: any[]) => void;
        onRowDblclick: (...args: any[]) => void;
    };
}>>> & {
    onRowClick?: ((e: MouseEvent) => any) | undefined;
    onRowAuxclick?: ((e: MouseEvent) => any) | undefined;
    onRowDblclick?: ((e: MouseEvent) => any) | undefined;
    "onUpdate:cells"?: ((cells: TCellProps[]) => any) | undefined;
}, {
    css: TCss;
    events: {
        onRowClick?: ((e: MouseEvent) => void) | undefined;
        onRowAuxclick?: ((e: MouseEvent) => void) | undefined;
        onRowDblclick?: ((e: MouseEvent) => void) | undefined;
    };
    cells: TCellProps[];
}, {}>, {
    default?(_: {}): any;
}>;

export declare const cellInjectFromHeader: (inj: typeof inject) => THeaderProvide;

export declare const cellInjectFromRow: (inj: typeof inject) => TRowProvide;

export declare const createToast: (conf: TToastItemBinds, id?: string) => void;

declare const customNoop: (e: DragEvent) => void;

export declare const DragableSortable: DefineComponent<__VLS_TypePropsToOption_7<{
    data: V[];
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_TypePropsToOption_7<{
    data: V[];
}>>>, {}, {}>;

declare const dragEventsKeys: readonly ["drag", "dragend", "dragenter", "dragstart", "dragover", "dragexit", "dragleave", "drop"];

export declare const DropdownComponent: __VLS_WithTemplateSlots_8<DefineComponent<__VLS_WithDefaults_7<__VLS_TypePropsToOption_8<TProps>, {
    modelValue: boolean;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:model-value": (status: boolean) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_7<__VLS_TypePropsToOption_8<TProps>, {
    modelValue: boolean;
}>>> & {
    "onUpdate:model-value"?: ((status: boolean) => any) | undefined;
}, {
    modelValue: boolean;
}, {}>, Readonly<{
    header(): void;
    default(): void;
}> & {
    header(): void;
    default(): void;
}>;

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

export declare const reactiveAsyncCallback: <Fn extends (...agrs: any[]) => Promise<any>, E = Error>(fn: Fn, conf: TConf<TFn<Fn>, E>) => {
    data: Ref<TFn<Fn>["response"]>;
    loading: Ref<boolean>;
    error: Ref<Error | null>;
    call: (...args: TFn<Fn>['args']) => void;
};

export declare const ROW_PROVIDE: unique symbol;

export declare const rowInjectFromTable: (inj: typeof inject) => TTableProvide;

export declare const rowProvide: (prov: typeof provide, callback: TRowProvide) => void;

export declare const StyledModal: __VLS_WithTemplateSlots_10<DefineComponent<__VLS_WithDefaults_9<__VLS_TypePropsToOption_10<TBaseModalProps>, {
    beforeAccept: () => true;
    afterAccept: () => void;
    visible: boolean;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    cancel: () => void;
    close: () => void;
    "update:visible": (n: boolean) => void;
    open: () => void;
    accept: () => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_9<__VLS_TypePropsToOption_10<TBaseModalProps>, {
    beforeAccept: () => true;
    afterAccept: () => void;
    visible: boolean;
}>>> & {
    onClose?: (() => any) | undefined;
    onCancel?: (() => any) | undefined;
    "onUpdate:visible"?: ((n: boolean) => any) | undefined;
    onOpen?: (() => any) | undefined;
    onAccept?: (() => any) | undefined;
}, {
    visible: boolean;
    beforeAccept: () => boolean;
    afterAccept: TNoppNoArgs;
}, {}>, Readonly<{
    header: (data: {
        close: () => void;
        accept: () => void;
        cancel: () => void;
        open: () => void;
        isVisible: ComputedRef<boolean>;
    }) => {};
    body: (data: {
        close: () => void;
        accept: () => void;
        cancel: () => void;
        open: () => void;
        isVisible: ComputedRef<boolean>;
    }) => {};
    footer: (data: {
        close: () => void;
        accept: () => void;
        cancel: () => void;
        open: () => void;
        isVisible: ComputedRef<boolean>;
    }) => {};
}> & {
    header: (data: {
        close: () => void;
        accept: () => void;
        cancel: () => void;
        open: () => void;
        isVisible: ComputedRef<boolean>;
    }) => {};
    body: (data: {
        close: () => void;
        accept: () => void;
        cancel: () => void;
        open: () => void;
        isVisible: ComputedRef<boolean>;
    }) => {};
    footer: (data: {
        close: () => void;
        accept: () => void;
        cancel: () => void;
        open: () => void;
        isVisible: ComputedRef<boolean>;
    }) => {};
}>;

export declare const TAB_ADD: "add_tab";

export declare const TAB_DIRECTION_COL = "col";

export declare const TAB_DIRECTION_LINE = "line";

export declare const TAB_REMOVE: "rm_tab";

export declare const TAB_SET_ACTIVE: "set_active_tab";

export declare const TABLE_PROVIDE: unique symbol;

export declare const TABLE_PROVIDE_HEADER: unique symbol;

export declare const tableProvide: (prov: typeof provide, callback: TTableProvide) => void;

export declare const tableProvideHeader: (prov: typeof provide, callback: TTableProvideHeader) => void;

export declare const TabMenu: __VLS_WithTemplateSlots_11<DefineComponent<__VLS_WithDefaults_10<__VLS_TypePropsToOption_11<{
    direction?: TTabMenuDirection | undefined;
    allHidden?: boolean | undefined;
}>, {
    direction: string;
    allHidden: boolean;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_10<__VLS_TypePropsToOption_11<{
    direction?: TTabMenuDirection | undefined;
    allHidden?: boolean | undefined;
}>, {
    direction: string;
    allHidden: boolean;
}>>>, {
    direction: TTabMenuDirection;
    allHidden: boolean;
}, {}>, {
    default?(_: {}): any;
}>;

export declare const TabSlide: __VLS_WithTemplateSlots_12<DefineComponent<__VLS_WithDefaults_11<__VLS_TypePropsToOption_12<{
    header: string | {
        component: Component | (() => VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>);
        binds: Record<string, any>;
    };
    id?: string | undefined;
    active?: boolean | undefined;
    transitionName?: string | undefined;
    class?: TCss | undefined;
}>, {
    active: boolean;
    transitionName: string;
    class: string;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    clickTab: () => void;
    show: () => void;
    hide: () => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_11<__VLS_TypePropsToOption_12<{
    header: string | {
        component: Component | (() => VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>);
        binds: Record<string, any>;
    };
    id?: string | undefined;
    active?: boolean | undefined;
    transitionName?: string | undefined;
    class?: TCss | undefined;
}>, {
    active: boolean;
    transitionName: string;
    class: string;
}>>> & {
    onClickTab?: (() => any) | undefined;
    onShow?: (() => any) | undefined;
    onHide?: (() => any) | undefined;
}, {
    class: TCss;
    active: boolean;
    transitionName: string;
}, {}>, {
    default?(_: {}): any;
}>;

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
        node: Component | (() => VNode);
        filterValue?: string;
    };
} | {
    value?: string | number;
});

declare type TConf<C extends TFn, E> = {
    onLoad?: TNoppNoArgs;
    onSuccess?: (data: C['response']) => void;
    onError?: (error: E) => void;
} & ({
    autoCall: true;
    args: C['args'];
} | {
    autoCall?: false;
});

export declare type TCss = string | string[] | Record<string, boolean | Ref<boolean> | ComputedRef<boolean>>;

declare type TCustomNoop = typeof customNoop;

export declare type TDragAndDropCallbacks = {
    [K in (typeof dragEventsKeys)[number]]?: TCustomNoop;
};

export declare type TDragAndDropEvents = {
    [K in keyof TDragAndDropCallbacks as `on${Capitalize<K>}`]-?: TDragAndDropCallbacks[K];
};

declare type TEventEmitterToBindings<E extends Record<string, any[]>, T extends string = `update:${string}`> = {
    [K in keyof E as K extends T ? never : `on${Capitalize<K & string>}`]: (...args: E[K]) => void;
};

declare type TFn<Fn = (...args: any[]) => Promise<any>> = Fn extends (...args: infer Args) => Promise<infer R> ? {
    args: Args;
    response: R;
} : never;

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

declare type TNoppNoArgs = () => void;

export declare const ToastContainer: DefineComponent<__VLS_WithDefaults_12<__VLS_TypePropsToOption_13<TToastContainerProps>, {
    position: string;
    css: () => never[];
    target: string;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_12<__VLS_TypePropsToOption_13<TToastContainerProps>, {
    position: string;
    css: () => never[];
    target: string;
}>>>, {
    css: TCss;
    position: "top-center" | "top-left" | "top-right" | "bottom-center" | "bottom-left" | "bottom-right";
    target: "document" | "parent";
}, {}>;

export declare const ToastItem: __VLS_WithTemplateSlots_13<DefineComponent<__VLS_WithDefaults_13<__VLS_TypePropsToOption_14<TToastItemProps>, {
    liveTime: number;
    showLifeTime: boolean;
    modelValue: boolean;
    css: () => never[];
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    close: () => void;
    "update:modelValue": (n: boolean) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_13<__VLS_TypePropsToOption_14<TToastItemProps>, {
    liveTime: number;
    showLifeTime: boolean;
    modelValue: boolean;
    css: () => never[];
}>>> & {
    onClose?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((n: boolean) => any) | undefined;
}, {
    liveTime: number;
    showLifeTime: boolean;
    modelValue: boolean;
    css: TCss;
}, {}>, {
    default?(_: {}): any;
}>;

export declare type ToastItemVNode = VNode<typeof ToastItem, RendererElement, TToastItemProps>;

export declare type ToastItemVNodeList = Ref<[uuid: string, node: ToastItemVNode][]>;

declare type TProps = {
    modelValue?: boolean;
    header?: string;
    closeOutSiceClick?: boolean;
};

export declare const translateCss: (conf: TCss) => Record<string, boolean | Ref<boolean> | ComputedRef<boolean>>;

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
        component: Component | (() => VNode);
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
    message?: string | Component | (() => VNode);
    liveTime?: number;
    showLifeTime?: boolean;
    modelValue?: boolean;
    css?: TCss;
    id?: string;
};

export declare type TUseCssClasses = string | Record<string, boolean>;

declare type TWindowEventStorage = {
    [EventName in keyof WindowEventMap]: (this: Window, ev: WindowEventMap[EventName]) => void;
};

declare const useBitCraft: () => (app: App, ..._options: any[]) => void;
export default useBitCraft;

export declare const useCarousel: ({ items, infinite }?: {
    items?: Ref<TCarrouselItem[]>;
    infinite?: boolean;
}) => {
    itemsList: Ref<TCarrouselItem[]>;
    currentIndex: Ref<number>;
    height: Ref<{
        height: string;
    }>;
    distpachListeners: (visible: number, left: number, right: number) => void;
    next: () => void;
    prev: () => void;
};

export declare const useCSSGenerator: (defaultCss?: TUseCssClasses) => {
    computedStyles: Ref<Record<string, boolean>>;
    setStyles: (cssConf: TUseCssClasses) => Ref<Record<string, boolean>> | undefined;
};

export declare const useDomNativeEventManager: (target: HTMLElement | Window | Document) => {
    on: <K extends keyof WindowEventMap>(eve: K, fn: TWindowEventStorage[K], conf?: boolean | AddEventListenerOptions) => () => void;
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

declare type V = number | string | Component | (() => VNode);

export { }
