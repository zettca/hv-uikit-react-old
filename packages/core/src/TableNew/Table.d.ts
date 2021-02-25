import { TableProps, StandardProps } from "@material-ui/core";

export type HvTableClassKey = "root";

export type HvTableProps = StandardProps<TableProps, HvTableClassKey>;

export default function HvTable(props: HvTableProps): JSX.Element | null;
