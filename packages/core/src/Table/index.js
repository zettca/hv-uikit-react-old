import React from "react";
import TableNew from "../TableNew";
import TableOld from "../TableOld";

const TableSwitcher = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return children ? <TableNew {...props} /> : <TableOld {...props} />;
};

export default TableSwitcher;

export * from "../TableNew";
