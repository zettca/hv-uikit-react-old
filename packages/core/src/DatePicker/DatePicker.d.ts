import * as React from "react";
import { StandardProps } from "@material-ui/core";

export interface HvDatePickerProps
  extends StandardProps<React.HTMLAttributes<HTMLElement>, HvDatePickerClassKey, "onChange"> {
  /**
   * An Object containing the various text associated with the input.
   *
   * - applyLabel: Label for apply button.
   * - cancelLabel: Label for cancel button.
   */
  labels?: {
    applyLabel?: string;
    cancelLabel?: string;
    title?: string;
    rangeStart?: string;
    rangeEnd?: string;
    placeholder?: string;
  };
  /**
   * The initial value of the input when in single calendar mode.
   */
  value?: string;
  /**
   * The initial value for the start date when in range mode.
   */
  startValue?: string;
  /**
   * The initial value for the end date when in range mode.
   */
  endValue?: string;
  /**
   * Flag informing if the the component should be in range mode or in single mode.
   */
  rangeMode?: boolean;
  /**
   * The placement where the calendar should be placed according to the input. Options are `left` or `right`.
   * Note this prop only affects the calendar when in `rangeMode`.
   */
  horizontalPlacement?: "left" | "right";
  /**
   * The calendar locale. If undefined, it uses calendar default
   */
  locale?: string;
  /**
   * Controls if actions buttons are visible at the calendar.
   */
  showActions?: boolean;
  /**
   * Callback function to be triggered when the input value is changed
   */
  onChange?: (date?: string) => void;
  /**
   * Disable the portal behavior. The children stay within it's parent DOM hierarchy.
   */
  disablePortal?: boolean;
  /**
   * Sets if the calendar container should follow the date picker input out of the screen or stay visible.
   */
  escapeWithReference?: boolean;
}

export type HvDatePickerClassKey =
  | "inputCalendarClosed"
  | "inputCalendarOpen"
  | "noBorderTop"
  | "noBorderBottom"
  | "input"
  | "icon"
  | "iconClear"
  | "datePickerContainer"
  | "label"
  | "calendarContainer"
  | "singleCalendarFooter"
  | "rangeMainContainer"
  | "rangeCalendarsContainer"
  | "rangeLeftCalendarContainer"
  | "rangeRightCalendarContainer"
  | "rangeFooterLeft"
  | "rangeFooterRight"
  | "actionsContainer"
  | "borderTopNone"
  | "borderBottomNone"
  | "borderTopDisplay"
  | "borderBottomDisplay"
  | "popperRoot"
  | "listBorderDown"
  | "listBorderUp"
  | "calendarOpenDown"
  | "calendarOpenUp";

export default function HvDatePicker(props: HvDatePickerProps): JSX.Element | null;