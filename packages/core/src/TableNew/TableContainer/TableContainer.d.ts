import { TableContainerProps, StandardProps } from "@material-ui/core";

export type HvTableContainerClassKey = "root";

export type HvTableContainerProps = StandardProps<TableContainerProps, HvTableContainerClassKey>;

export default function HvTableContainer(props: HvTableContainerProps): JSX.Element | null;
