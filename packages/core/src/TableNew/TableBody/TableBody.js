import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { TableBody, withStyles } from "@material-ui/core";

import styles from "./styles";

/**
 * TableBody description/documentation paragraph
 */
const HvTableBody = (props) => {
  const { className, classes, children, ...others } = props;

  return (
    <TableBody className={clsx(className, classes.root)} {...others}>
      {children}
    </TableBody>
  );
};

HvTableBody.propTypes = {
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

export default withStyles(styles, { name: "HvTableBody" })(HvTableBody);
