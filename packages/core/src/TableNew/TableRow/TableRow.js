import React from "react";
import PropTypes from "prop-types";

import { TableRow, withStyles } from "@material-ui/core";

import styles from "./styles";

/**
 * TableRow description/documentation paragraph
 */
const HvTableRow = (props) => {
  const { className, classes, children, ...others } = props;

  return (
    <TableRow classes={classes} className={className} {...others}>
      {children}
    </TableRow>
  );
};

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
