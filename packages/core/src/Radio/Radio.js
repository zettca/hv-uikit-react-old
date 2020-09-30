import React, { useCallback, useState } from "react";

import PropTypes from "prop-types";
import clsx from "clsx";

import { withStyles } from "@material-ui/core";

import { HvBaseRadio, HvFormElement, HvLabel, HvWarningText, useUniqueId } from "..";

import { setId, useControlled } from "../utils";

import styles from "./styles";

/**
 * A Radio Button is a mechanism that allows user to select just an option from a group of options.
 *
 * It should used in a Radio Button Group to present the user with a range of options from
 * which the user <b>may select just one option</b> to complete their task.
 *
 * Individual use of radio buttons, at least uncontrolled, is unadvised as React state management doesn't
 * respond to the browser's native management of radio inputs checked state.
 */
const HvRadio = (props) => {
  const {
    classes,
    className,

    id,
    name,
    value = "on",
    required = false,
    readOnly = false,
    disabled = false,

    label,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,

    checked,
    defaultChecked = false,

    onChange,

    status = "standBy",
    statusMessage = "",

    semantic = false,

    inputProps,

    onFocusVisible,
    onBlur,

    ...others
  } = props;

  const elementId = useUniqueId(id, "hvradio");

  const [focusVisible, setFocusVisible] = useState(false);

  const onFocusVisibleCallback = useCallback(
    (evt) => {
      setFocusVisible(true);
      onFocusVisible?.(evt);
    },
    [onFocusVisible]
  );

  const onBlurCallback = useCallback(
    (evt) => {
      setFocusVisible(false);
      onBlur?.(evt);
    },
    [onBlur]
  );

  const [isChecked, setIsChecked] = useControlled({
    controlled: checked,
    default: Boolean(defaultChecked),
    name: "HvRadio",
    state: "checked",
  });

  const onLocalChange = useCallback(
    (evt, newChecked) => {
      setIsChecked(newChecked);

      onChange?.(evt, newChecked, value);
    },
    [onChange, setIsChecked, value]
  );

  // error message area will only be needed if the status is being controlled
  const canShowError = status !== undefined;

  const radio = (
    <HvBaseRadio
      id={label ? setId(elementId, "input") : null}
      name={name}
      className={classes.radio}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onLocalChange}
      value={value}
      checked={isChecked}
      semantic={semantic}
      inputProps={{
        "aria-invalid": status === "invalid" ? true : undefined,
        "aria-errormessage": status === "invalid" ? setId(elementId, "error") : undefined,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-describedby": ariaDescribedBy,
        ...inputProps,
      }}
      onFocusVisible={onFocusVisibleCallback}
      onBlur={onBlurCallback}
    />
  );

  return (
    <HvFormElement
      id={id}
      name={name}
      value={value}
      status={status || "standBy"}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      className={clsx(className, classes.root)}
      {...others}
    >
      {label ? (
        <div
          className={clsx(classes.container, {
            [classes.disabled]: disabled,
            [classes.focusVisible]: focusVisible && label,
          })}
        >
          {radio}
          <HvLabel
            id={setId(elementId, "label")}
            htmlFor={setId(elementId, "input")}
            label={label}
            className={clsx(classes.label)}
          />
        </div>
      ) : (
        radio
      )}
      {canShowError && (
        <HvWarningText id={setId(elementId, "error")}>{statusMessage}</HvWarningText>
      )}
    </HvFormElement>
  );
};

HvRadio.propTypes = {
  /**
   * Class names to be applied.
   */
  className: PropTypes.string,
  /**
   * A Jss Object used to override or extend the styles applied to the radio button.
   */
  classes: PropTypes.shape({
    /**
     * Styles applied to the component.
     */
    root: PropTypes.string,
    /**
     * Styles applied to the radio button+label container (only when a label is provided).
     */
    container: PropTypes.string,
    /**
     * Styles applied to the radio button+label container when the radio button is disabled.
     */
    disabled: PropTypes.string,
    /**
     * Styles applied to the HvBaseRadio.
     */
    radio: PropTypes.string,
    /**
     * Styles applied to the label.
     */
    label: PropTypes.string,
    /**
     * Class applied to the root element if keyboard focused.
     */
    focusVisible: PropTypes.string,
  }).isRequired,

  /**
   * Id to be applied to the form element root node.
   */
  id: PropTypes.string,

  /**
   * The form element name.
   */
  name: PropTypes.string,
  /**
   * The value of the form element.
   *
   * The default value is "on".
   */
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,

  /**
   * The label of the form element.
   *
   * The form element must be labeled for accessibility reasons.
   * If not provided, an aria-label or aria-labelledby must be provided.
   */
  label: PropTypes.node,
  /**
   * @ignore
   */
  "aria-label": PropTypes.string,
  /**
   * @ignore
   */
  "aria-labelledby": PropTypes.string,
  /**
   * @ignore
   */
  "aria-describedby": PropTypes.string,

  /**
   * Indicates that user input is required on the form element.
   *
   * If a single radio button in a group has the required attribute, a radio button in
   * that group must be check, though it doesn't have to be the one with the attribute is applied.
   *
   * For that reason, the component doesn't make any uncontrolled changes to its validation status.
   * That should ideally be managed in the context of a radio button group.
   */
  required: PropTypes.bool,
  /**
   * Indicates that the form element is not editable.
   */
  readOnly: PropTypes.bool,
  /**
   * Indicates that the form element is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true` the radio button is selected, if set to `false` the radio button is not selected.
   *
   * When defined the radio button state becomes controlled.
   */
  checked: PropTypes.bool,
  /**
   * When uncontrolled, defines the initial checked state.
   */
  defaultChecked: PropTypes.bool,

  /**
   * The status of the form element.
   *
   * Valid is correct, invalid is incorrect and standBy means no validations have run.
   */
  status: PropTypes.oneOf(["standBy", "valid", "invalid"]),
  /**
   * The error message to show when `status` is "invalid".
   */
  statusMessage: PropTypes.string,

  /**
   * The callback fired when the radio button is pressed.
   */
  onChange: PropTypes.func,

  /**
   * Whether the selector should use semantic colors.
   */
  semantic: PropTypes.bool,

  /**
   * Properties passed on to the input element.
   */
  inputProps: PropTypes.instanceOf(Object),

  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: PropTypes.func,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
};

export default withStyles(styles, { name: "HvRadio" })(HvRadio);
