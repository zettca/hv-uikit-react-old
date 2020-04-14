import * as React from "react";
import { StandardProps, IconButtonProps } from "@material-ui/core";
import { ListValueProp } from "../List";

export interface HvDropDownMenuProps
  extends StandardProps<IconButtonProps, HvDropDownMenuClassKey> {
  /**
   * Icon.
   */
  icon?: React.ReactNode;
  /**
   * A list containing the elements to be rendered.
   *
   * - label: The label of the element to be rendered.
   * - selected: The selection state of the element.
   * - disabled: The disabled state of the element.
   * - iconCallback: The icon node to be rendered on the left.
   * - showNavIcon: If true renders the navigation icon on the right.
   */
  dataList: ListValueProp[];
  /**
   * Placement of the dropdown.
   */
  placement?: "left" | "right";
  /**
   * Disable the portal behavior. The children stay within it's parent DOM hierarchy.
   */
  disablePortal?: boolean;
  /**
   * Function executed on toggle of the dropdown. Should receive the open status.
   */
  onToggleOpen?: (open: boolean) => void;
  /**
   * Keep the Dropdown Menu opened after clicking one option
   */
  keepOpened?: boolean;
  /**
   * Defines if the component is disabled.
   */
  disabled?: boolean;
  /**
   * If true it should be displayed open.
   */
  expanded?: boolean;
}

export type HvDropDownMenuClassKey = "root" | "icon" | "iconSelected" | "menuList";

export default function HvDropDownMenu(props: HvDropDownMenuProps): JSX.Element | null;