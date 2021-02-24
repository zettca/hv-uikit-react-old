import { TableRowProps, StandardProps } from "@material-ui/core";

export type HvTableRowClassKey = "root";

export type HvTableRowProps = StandardProps<TableRowProps, HvTableRowClassKey>;

export default function HvTableRow(props: HvTableRowProps): JSX.Element | null;
