import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { TableHead, withStyles } from "@material-ui/core";

import styles from "./styles";

/**
 * TableHead description/documentation paragraph
 */
const HvTableHead = (props) => {
  const { className, classes, children, ...others } = props;

  return (
    <TableHead className={clsx(className, classes.root)} {...others}>
      {children}
    </TableHead>
  );
};

HvTableHead.propTypes = {
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

export default withStyles(styles, { name: "HvTableHead" })(HvTableHead);
