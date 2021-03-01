import React, { forwardRef, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import capitalize from "lodash/capitalize";

import { withStyles } from "@material-ui/core";
import { getSortIcon, getSortDir } from "./utils";
import styles from "./styles";
import TableContext from "../TableContext";

/**
 * `HvTableCell` acts as a `td` element and inherits styles from its context
 */
const HvTableCell = forwardRef(function HvTableCell(props, ref) {
  const {
    align = "inherit",
    classes,
    className,
    component,
    padding: paddingProp,
    sortDirection,
    variant: variantProp,

    sorted,
    sortable,
    children,

    ...others
  } = props;

  const tableContext = useContext(TableContext);

  const isHeadCell = tableContext?.variant === "head";
  const Component = component || (isHeadCell && "th") || "td";

  const padding = paddingProp || (tableContext?.padding ?? "default");
  const variant = variantProp || tableContext?.variant;

  const Sort = useMemo(() => getSortIcon(sortDirection), [sortDirection]);

  return (
    <Component
      ref={ref}
      className={clsx(className, classes.root, classes[variant], {
        [classes.sortable]: sortable,
        [classes.sorted]: sorted,
        [classes[`align${capitalize(align)}`]]: align !== "inherit",
        [classes[`padding${capitalize(padding)}`]]: padding !== "default",
      })}
      aria-sort={getSortDir(sortDirection)}
      {...others}
    >
      {variant === "head" && sortable && <Sort className={classes.sortIcon} />}
      {children}
    </Component>
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
   * Whether or not the cell is sorted
   */
  sorted: PropTypes.bool,
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   * Defaults to td in tbody or th in thead
   */
  component: PropTypes.elementType,
  /**
   * Whether or not the cell is sortable
   */
  sortable: PropTypes.bool,
  /**
   * Set the text-align on the table cell content.
   */
  align: PropTypes.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * Sets the padding applied to the cell.
   * By default, the Table parent component set the value, which is the default padding specified by Design System.
   */
  padding: PropTypes.oneOf(["checkbox", "default", "none"]),
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
     * Styles applied to the component root when it is sorted.
     */
    sorted: PropTypes.string,
    /**
     * Styles applied to the component root when it is sortable.
     */
    sortable: PropTypes.string,
    /**
     * Styles applied to the sort icon component.
     */
    sortIcon: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles, { name: "HvTableCell" })(HvTableCell);
