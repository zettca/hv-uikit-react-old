import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { withStyles } from "@material-ui/core";

import { HvFormElement, HvLabel, HvInfoMessage, HvWarningText, useUniqueId } from "..";

import { setId, useControlled } from "../utils";

import styles from "./styles";

/**
 *
 */
const HvRadioGroup = (props) => {
  const {
    classes,
    className,

    id,
    name,
    value: valueProp,
    required = false,
    readOnly = false,
    disabled = false,

    label,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    description,
    "aria-describedby": ariaDescribedBy,

    onChange,

    status,
    statusMessage,

    orientation = "vertical",

    children,
    ...others
  } = props;

  const elementId = useUniqueId(id, "HvRadioGroup");

  const [value, setValue] = useControlled(
    valueProp,
    (() => {
      // when uncontrolled, extract the initial selected value from the children own state
      let selectedValue = null;

      const childrenArray = React.Children.toArray(children);
      const childrenCount = childrenArray.length;
      for (let i = 0; i !== childrenCount; i += 1) {
        const child = childrenArray[i];

        const childIsControlled = child.props.checked !== undefined;
        const childValue = child.props.value;

        let childIsSelected = false;
        if (childIsControlled) {
          childIsSelected = child.props.checked;
        } else {
          childIsSelected = child.props.defaultChecked;
        }

        if (childIsSelected) {
          selectedValue = childValue;
          break;
        }
      }

      return selectedValue;
    })()
  );

  const onChildChangeInterceptor = useCallback(
    (childOnChange, evt, isChecked, newValue) => {
      childOnChange?.(evt, isChecked, newValue);

      onChange?.(evt, newValue);

      setValue(newValue);
    },
    [onChange, setValue]
  );

  const modifiedChildren = useMemo(() => {
    return React.Children.map(children, (child) => {
      const childValue = child.props.value || "on";

      const childIsSelected = childValue === value;

      return React.cloneElement(child, {
        checked: childIsSelected,
        name: child.props.name || name || elementId,
        onChange: (evt, isChecked, newValue) =>
          onChildChangeInterceptor(child.props.onChange, evt, isChecked, newValue),
        inputProps: {
          ...child.props.inputProps,
          // set the required attribute directly in the input
          // the radio form element context shouldn't be aware so the
          // label doesn't show redundant asterisk
          required,
        },
        disabled: disabled || child.props.disabled,
        readOnly: readOnly || child.props.readOnly,
      });
    });
  }, [children, disabled, elementId, name, onChildChangeInterceptor, readOnly, required, value]);

  // error message area will only be needed if the status is being controlled
  const canShowError = status !== undefined;

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
    >
      {label && (
        <HvLabel
          id={setId(elementId, "label")}
          htmlFor={setId(elementId, "group")}
          label={label}
          className={clsx(classes.label)}
        />
      )}
      {description && (
        <HvInfoMessage id={setId(elementId, "description")}>{description}</HvInfoMessage>
      )}
      <div
        id={label && setId(elementId, "group")}
        role="radiogroup"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-invalid={status === "invalid" ? true : undefined}
        aria-errormessage={status === "invalid" ? setId(elementId, "error") : undefined}
        aria-describedby={
          ariaDescribedBy != null ? ariaDescribedBy : description && setId(elementId, "description")
        }
        className={clsx(classes.group, {
          [classes.vertical]: orientation === "vertical",
          [classes.horizontal]: orientation === "horizontal",
        })}
        {...others}
      >
        {modifiedChildren}
      </div>
      {canShowError && (
        <HvWarningText id={setId(elementId, "error")} className={clsx(classes.error)}>
          {statusMessage}
        </HvWarningText>
      )}
    </HvFormElement>
  );
};

HvRadioGroup.propTypes = {
  /**
   * Class names to be applied.
   */
  className: PropTypes.string,
  /**
   * A Jss Object used to override or extend the component styles applied.
   */
  classes: PropTypes.shape({
    /**
     * Styles applied to the component root class.
     */
    root: PropTypes.string,
    /**
     * Styles applied to the label.
     */
    label: PropTypes.string,
    /**
     * Styles applied to the radio button group.
     */
    group: PropTypes.string,
    /**
     * Styles applied to the radio button group when orientation is vertical.
     */
    vertical: PropTypes.string,
    /**
     * Styles applied to the radio button group when orientation is horizontal.
     */
    horizontal: PropTypes.string,
    /**
     * Styles applied to the error area.
     */
    error: PropTypes.string,
  }).isRequired,

  /**
   * Id to be applied to the form element root node.
   */
  id: PropTypes.string,

  /**
   * The form element name.
   * It is propagated to the children radio buttons, unless they already have one (which they shouldn't).
   */
  name: PropTypes.string,
  /**
   * The value of the form element, represented in one of the child radio buttons values.
   *
   * When defined the radio button group state becomes controlled.
   */
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,

  /**
   * The label of the form element.
   *
   * The form element must be labeled for accessibility reasons.
   * If not provided, an aria-label or aria-labelledby must be provided instead.
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
   * Provide additional descriptive text for the form element.
   */
  description: PropTypes.node,
  /**
   * @ignore
   */
  "aria-describedby": PropTypes.string,

  /**
   * Indicates that the form element is disabled.
   * If `true` the state is propagated to the children radio buttons.
   */
  disabled: PropTypes.bool,
  /**
   * Indicates that the form element is not editable.
   * If `true` the state is propagated to the children radio buttons.
   */
  readOnly: PropTypes.bool,
  /**
   * Indicates that user input is required on the form element.
   * If `true` the state is propagated to the children radio buttons' input element.
   */
  required: PropTypes.bool,

  /**
   * The status of the form element.
   *
   * Valid is correct, invalid is incorrect and standBy means no validations have run.
   *
   * When uncontrolled and unspecified it will default to "standBy" and change to either "valid"
   * or "invalid" after any change to the state.
   */
  status: PropTypes.oneOf(["standBy", "valid", "invalid"]),
  /**
   * The error message to show when `status` is "invalid". Defaults to "Required".
   */
  statusMessage: PropTypes.node,

  /**
   * The callback fired when the value changes.
   */
  onChange: PropTypes.func,

  /**
   * Indicates whether the radio buttons group's orientation is horizontal or vertical.
   *
   * Defaults to vertical.
   */
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),

  /**
   * The radio buttons that are part of the group.
   *
   * Their state will always be controlled by the group.
   * However the individual radio button onChange callback will still be called if defined.
   */
  children: PropTypes.node,
};

export default withStyles(styles, { name: "HvRadioGroup" })(HvRadioGroup);
