import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { TableCell, withStyles } from "@material-ui/core";
import { getSortComponent } from "./utils";
import styles from "./styles";

/**
 * `HvTableCell` acts as a `td` element and inherits styles from its context
 */
const HvTableCell = forwardRef((props, ref) => {
  const {
    className,
    classes,
    children,
    variant,
    sortable,
    sorted,
    sortDirection,
    sticky,
    ...others
  } = props;

  const renderSort = () => {
    if (variant !== "head" || !sortable) return null;

    const SortComponent = getSortComponent(sortDirection);
    return <SortComponent style={{ display: "inline-flex" }} />;
  };

  return (
    <TableCell
      ref={ref}
      classes={{
        root: classes.root,
        head: classes.head,
        body: classes.body,
        footer: classes.footer,
      }}
      sortDirection={sortDirection}
      className={clsx(className, {
        [classes.sticky]: sticky,
        [classes.sortable]: sortable,
        [classes.sorted]: sorted,
      })}
      variant={variant}
      {...others}
    >
      {renderSort()}
      {children}
    </TableCell>
  );
});

HvTableCell.propTypes = {
  /**
   * Class names to be applied.
   */
  className: PropTypes.string,
  /**
   * Content to be rendered
   */
  children: PropTypes.node,
  /**
   * Whether or not the cell is sticky
   */
  sticky: PropTypes.bool,
  /**
   * Whether or not the cell is sorted
   */
  sorted: PropTypes.bool,
  /**
   * Whether or not the cell is sortable
   */
  sortable: PropTypes.bool,
  /**
   * Specify the cell type.
   * The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.
   */
  variant: PropTypes.oneOf(["body", "footer", "head"]),
  /**
   * Set sort direction icon and aria-sort.
   */
  sortDirection: PropTypes.oneOf(["asc", "desc", false]),
  /**
   * A Jss Object used to override or extend the styles applied.
   */
  classes: PropTypes.shape({
    /**
     * Styles applied to the component root class.
     */
    root: PropTypes.string,
    /**
     * Styles applied to the cell when it's in the table head.
     */
    head: PropTypes.string,
    /**
     * Styles applied to the cell when it's in the table body.
     */
    body: PropTypes.string,
    /**
     * Styles applied to the cell when it's in the table footer.
     */
    footer: PropTypes.string,
    /**
     * Styles applied to the component root when it is sticky.
     */
    sticky: PropTypes.string,
    /**
     * Styles applied to the component root when it is sorted.
     */
    sorted: PropTypes.string,
    /**
     * Styles applied to the component root when it is sortable.
     */
    sortable: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles, { name: "HvTableCell" })(HvTableCell);
