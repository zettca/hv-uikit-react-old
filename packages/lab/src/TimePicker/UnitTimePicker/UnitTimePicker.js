/*
 * Copyright 2019 Hitachi Vantara Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Input from "@hv/uikit-react-core/dist/Input";
import AddTimeIcon from "@hv/uikit-react-icons/dist/DropUp.XS";
import SubtractTimeIcon from "@hv/uikit-react-icons/dist/DropDown.XS";
import { isUnitTimeInValidRange } from "../timePickerUtils";
import { padTime } from "../timePickerFormatter";
import { TimePickerUnits } from "../enums";

class UnitTimePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minValue: TimePickerUnits[props.unit].min,
      maxValue: TimePickerUnits[props.unit].max,
      currentValue: props.unitValue,
      isFocused: false,
      isValid: true
    };
  }

  /**
   * Handles the unit time value change when it is done through a change on the input.
   * It only reflects on the state if the number of digits is between 0 and 2
   * @param {Number} value - new unit time value
   * @memberof UnitTimePicker
   */
  handleCurrentValueChange = value => {
    const unitTime = value === "" ? value : Number(value);
    if ((unitTime || unitTime === "") && unitTime.toString().length <= 2) {
      this.changeTimeUnit(unitTime);
    }
  };

  /**
   * Handles the change on the focus of the input
   * @memberof UnitTimePicker
   */
  handleFocusChange = () => {
    const { isFocused } = this.state;

    this.setState({
      isFocused: !isFocused
    });
  };

  /**
   * Handles the action to increase the unit time value
   * If the new value surpasses the max allowed, it updates the time to the min value.
   * @memberof UnitTimePicker
   */
  handleAddTime = () => {
    const { currentValue, maxValue, minValue } = this.state;
    let newUnitTime = currentValue === "" ? minValue : currentValue + 1;
    if (newUnitTime > maxValue) {
      newUnitTime = minValue;
    }
    this.changeTimeUnit(newUnitTime);
  };

  /**
   * Handles the action to decrease the unit time value
   * If the new value goes below the min allowed, it updates the time to the max value.
   * @memberof UnitTimePicker
   */
  handleSubtractTime = () => {
    const { currentValue, maxValue, minValue } = this.state;
    let newUnitTime = currentValue === "" ? maxValue : currentValue - 1;
    if (newUnitTime < minValue) {
      newUnitTime = maxValue;
    }
    this.changeTimeUnit(newUnitTime);
  };

  /**
   * Changes the time unit value in the state.
   * The onChange callback is only called if the new value is a valid one (in the allowed range)
   * 
   * @param {Number} value - new time unit value
   * @memberof UnitTimePicker
   */
  changeTimeUnit = value => {
    const { onChangeUnitTimeValue } = this.props;
    this.setState({
      currentValue: value
    });
    if (this.isUnitTimeValid(value)) {
      onChangeUnitTimeValue(value);
    }
  };

  /**
   * Checks if the unit time is valid, meaning that is between the min and max values for the specific unit time
   * @memberof UnitTimePicker
   */
  isUnitTimeValid = unitTime => {
    const { unit } = this.props;
    const isValid = isUnitTimeInValidRange(unitTime, unit);
    this.setState({
      isValid
    });
    return isValid;
  };

  /**
   * Renderers
   */

  /**
   * Renders the time unit value input in the correct format
   * @memberof UnitTimePicker
   */
  renderTimeUnit = () => {
    const { currentValue, isFocused } = this.state;
    return isFocused ? currentValue : padTime(currentValue);
  };

  /**
   * Renders the UnitTimePicker
   */
  render() {
    const { classes } = this.props;
    const { isValid } = this.state;

    return (
      <div className={classes.unitTimeContainer}>
        <AddTimeIcon
          className={classes.addIcon} 
          onClick={this.handleAddTime} 
        />
        <Input
          className={classes.unitTime}
          classes={{
            input: classes.unitTimeInput,
            container: classes.inputContainer,
            inputRoot: classNames(classes.unitTimeInputRoot, {
              [classes.unitTimeInputRootInvalid]: !isValid
            })
          }}
          inputValue={this.renderTimeUnit()}
          onChange={this.handleCurrentValueChange}
          onFocus={this.handleFocusChange}
          onBlur={this.handleFocusChange}
          validationIconVisible={false}
          showInfo={false}
          validation={this.validateUnitTime}
          labels={{
            placeholder: ""
          }}
        />
        <SubtractTimeIcon
          className={classes.subtractIcon}
          onClick={this.handleSubtractTime}
        />
      </div>
    );
  }
}

UnitTimePicker.propTypes = {
  /**
   * A Jss Object used to override or extend the styles applied to the input/popper
   */
  classes: PropTypes.instanceOf(Object).isRequired,
  /**
   * Type of Unit time picker (hour, minute or second)
   */
  unit: PropTypes.oneOf([
    TimePickerUnits.HOUR_24.type,
    TimePickerUnits.HOUR_12.type,
    TimePickerUnits.MINUTE.type,
    TimePickerUnits.SECOND.type
  ]).isRequired,
  /**
   * Default unit time value
   */
  unitValue: (otherProps, propName, componentName) => {
    const minValue = TimePickerUnits[otherProps.unit].min;
    const maxValue = TimePickerUnits[otherProps.unit].max;
    const unitValue = otherProps[propName];
    if (unitValue > maxValue || unitValue < minValue ) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Value not in the correct range ${minValue}-${maxValue}`);
    }
    return null;
  },
  /**
   * Callback function called when the unit time value changes
   */
  onChangeUnitTimeValue: PropTypes.func.isRequired
};

UnitTimePicker.defaultProps = {
  unitValue: 0
};

export default UnitTimePicker;