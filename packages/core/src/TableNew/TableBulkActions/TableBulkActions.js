import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { withStyles } from "@material-ui/core";

import { HvBulkActions } from "../..";
import styles from "./styles";

/**
 * TableBulkActions description/documentation paragraph
 */
const HvTableBulkActions = (props) => {
  const { className, classes, rtInstance = {}, ...others } = props;
  const { toggleAllRowsSelected, toggleAllPageRowsSelected, rows, selectedFlatRows } = rtInstance;

  return (
    <HvBulkActions
      className={clsx(className, classes.root)}
      numTotal={rows.length}
      numSelected={selectedFlatRows.length}
      showSelectAllPages
      onSelectAll={toggleAllPageRowsSelected}
      onSelectAllPages={toggleAllRowsSelected}
      {...others}
    />
  );
};

HvTableBulkActions.propTypes = {
  /**
   * Class names to be applied.
   */
  className: PropTypes.string,
  /**
   * React Table useTable instance
   */
  rtInstance: PropTypes.instanceOf(Object),
  /**
   * A Jss Object used to override or extend the styles applied.
   */
  classes: PropTypes.shape({
    /**
     * Styles applied to the component root class.
     */
    root: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles, { name: "HvTableBulkActions" })(HvTableBulkActions);
