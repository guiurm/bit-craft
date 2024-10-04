import { v6 } from 'uuid';
import type { TCellProps, TRowProps } from './datatableTypes';

export const buildDatatableCell = (cell: TCellProps & { value: NonNullable<TCellProps['value']> }): TCellProps => ({
    identifier: v6(),
    ...cell
});

export const buildDatatableRow = (row?: TRowProps): TRowProps => ({ cells: [], identifier: v6(), ...row });
export const buildDatatableRows = (rows: TRowProps[] = []): TRowProps[] =>
    rows.map(r => ({ ...buildDatatableRow(), ...r }));
