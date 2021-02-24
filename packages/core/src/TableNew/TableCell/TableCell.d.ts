import { TableCellProps, StandardProps } from "@material-ui/core";

export type HvTableCellClassKey =
  | "root"
  | "head"
  | "body"
  | "footer"
  | "sticky"
  | "sortable"
  | "sorted";

export interface HvTableCellProps extends StandardProps<TableCellProps, HvTableCellClassKey> {
  /**
   * Whether or not the cell is sticky
   */
  sticky?: boolean;
  /**
   * Whether or not the cell is sorted
   */
  sorted: boolean;
  /**
   * Whether or not the cell is sortable
   */
  sortable: boolean;
}

export default function HvTableCell(props: HvTableCellProps): JSX.Element | null;
