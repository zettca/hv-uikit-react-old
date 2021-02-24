import { TableHeadProps, StandardProps } from "@material-ui/core";

export type HvTableHeadClassKey = "root";

export type HvTableHeadProps = StandardProps<TableHeadProps, HvTableHeadClassKey>;

export default function HvTableHead(props: HvTableHeadProps): JSX.Element | null;
