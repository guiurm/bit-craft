import type { Component, VNode } from 'vue';
import type { TCss } from '../cssClassTranslator';

export type TRowProps = {
    cols?: number;
    cells?: TCellProps[];
    class?: TCss;
    customTemplateColumn?: string;
    onRowClick?: (e: MouseEvent) => void;
    onRowAuxclick?: (e: MouseEvent) => void;
    onRowDblclick?: (e: MouseEvent) => void;
};

export type THeaderProps = {
    cols?: number;
    cells?: TCellProps[];
    class?: TCss;
    customTemplateColumn?: string;
    onHeaderClick?: (e: MouseEvent) => void;
    onHeaderAuxclick?: (e: MouseEvent) => void;
    onHeaderDblclick?: (e: MouseEvent) => void;
};

export type TCellProps = {
    value?: string | number | Component | (() => VNode);
    colSpan?: number;
    class?: TCss;
    onCellClick?: (e: MouseEvent) => void;
    onCellAuxclick?: (e: MouseEvent) => void;
    onCellDblclick?: (e: MouseEvent) => void;
    binds?: Record<string, any>;
};

export type TTableProps = {
    cols: number;
    head?: THeaderProps;
    rows?: TRowProps[];
    class?: TCss;
    customTemplateColumn?: string;
};
