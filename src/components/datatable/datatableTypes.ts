import type { TRenderComponent } from '@/@core/types';
import { noop } from '@/globals';
import { inject, provide } from 'vue';
import type { TCss } from '../../composables/cssClassTranslator';

export type TRowProps = {
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

export type THeaderProps = {
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

export type TCellProps = {
    identifier?: string;
    colSpan?: number;
    css?: TCss;
    binds?: Record<string, any>;
    events?: {
        onCellClick?: (e: MouseEvent) => void;
        onCellAuxclick?: (e: MouseEvent) => void;
        onCellDblclick?: (e: MouseEvent) => void;
    };
} & (
    | {
          value?: {
              node: TRenderComponent;
              filterValue?: string;
          };
      }
    | {
          value?: string | number;
      }
);

export type TCellCore = {
    uuid: string;
} & TCellProps;

export type TTableProps = {
    cols: number;
    head?: THeaderProps;
    rows?: TRowProps[];
    css?: TCss;
    customTemplateColumn?: string;
};

// provides row
export type TRowProvide = (cell: TCellProps) => void;
export const ROW_PROVIDE = Symbol('addCell2Row');

export const rowProvide = (prov: typeof provide, callback: TRowProvide): void => {
    prov(ROW_PROVIDE, callback);
};
export const cellInjectFromRow = (inj: typeof inject): TRowProvide => {
    return inj(ROW_PROVIDE) ?? noop;
};

// provides header
export type THeaderProvide = (cell: TCellProps) => void;
export const HEADER_PROVIDE = Symbol('addCell2Header');

export const headerProvide = (prov: typeof provide, callback: THeaderProvide): void => {
    prov(HEADER_PROVIDE, callback);
};
export const cellInjectFromHeader = (inj: typeof inject): THeaderProvide => {
    return inj(HEADER_PROVIDE) ?? noop;
};

// provides table
export type TTableProvide = (row: TRowProps) => void;
export const TABLE_PROVIDE = Symbol('addrRow2Table');

export const tableProvide = (prov: typeof provide, callback: TTableProvide): void => {
    prov(TABLE_PROVIDE, callback);
};
export const rowInjectFromTable = (inj: typeof inject): TTableProvide => {
    return inj(TABLE_PROVIDE) ?? noop;
};
//
export type TTableProvideHeader = (row: THeaderProps) => void;
export const TABLE_PROVIDE_HEADER = Symbol('addrRow2Table');

export const tableProvideHeader = (prov: typeof provide, callback: TTableProvideHeader): void => {
    prov(TABLE_PROVIDE_HEADER, callback);
};
export const headerInjectFromTable = (inj: typeof inject): TTableProvideHeader => {
    return inj(TABLE_PROVIDE_HEADER) ?? noop;
};
