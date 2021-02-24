import { TableBodyProps, StandardProps } from "@material-ui/core";

export type HvTableBodyClassKey = "root";

export type HvTableBodyProps = StandardProps<TableBodyProps, HvTableBodyClassKey>;

export default function HvTableBody(props: HvTableBodyProps): JSX.Element | null;
