import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import { TableRow, withStyles } from "@material-ui/core";

import styles from "./styles";

/**
 * `HvTableRow` acts as a `tr` element and inherits styles from its context
 */
const HvTableRow = forwardRef((props, ref) => {
  const { className, classes, children, ...others } = props;

  return (
    <TableRow ref={ref} classes={classes} className={className} {...others}>
      {children}
    </TableRow>
  );
});

HvTableRow.propTypes = {
  /**
   * Class names to be applied.
   */
  className: PropTypes.string,
  /**
   * Content to be rendered
   */
  children: PropTypes.node.isRequired,
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

export default withStyles(styles, { name: "HvTableRow" })(HvTableRow);
