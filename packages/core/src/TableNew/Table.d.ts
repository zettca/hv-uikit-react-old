import { TableProps, StandardProps } from "@material-ui/core";

export type HvTableNewClassKey = "root";

export type HvTableNewProps = StandardProps<TableProps, HvTableNewClassKey>;

export default function HvTable(props: HvTableNewProps): JSX.Element | null;
