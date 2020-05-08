import { StandardProps, RadioProps, FormControlProps } from "@material-ui/core";
import { LabelPositions } from "..";

export interface HvRadioButtonProps extends StandardProps<RadioProps, HvRadioButtonClassKey> {
  /**
   * The label to be added to the radio button.
   */
  label?: React.ReactNode;

  /**
   * The position of the Radio button label.
   *  - Accepted values:
   *    --"start",
   *    --"end"
   *  - note: the labelPositions object should be used to set this value.
   */
  labelPlacement?: LabelPositions;
  /**
   * Extra properties passed to the MUI FormControlLabel component.
   */
  formControlLabelProps?: FormControlProps;
}

export type HvRadioButtonClassKey =
  | "container"
  | "disableFocus"
  | "labelTypography"
  | "labelDisabled"
  | "labelEnd"
  | "labelStart"
  | "radio"
  | "icon";

export default function HvRadioButton(props: HvRadioButtonProps): JSX.Element | null;
