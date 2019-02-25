/**
 * Copyright (c) 2018 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ArrowDown from "@hv-ui/icons/core/XS-icons/AngleUp12";
import ArrowUp from "@hv-ui/icons/core/XS-icons/AngleDown12";
import List from "../List";

const defaultLabels = {
  select: "Select...",
  selectAll: "All",
  cancelLabel: "Cancel",
  applyLabel: "Apply",
  multiSelectionAction: "Selected",
  multiSelectionConjuction: "of"
};

class Main extends React.Component {
  constructor(props) {
    super(props);

    const labels = {
      ...defaultLabels,
      ...props.labels
    };

    this.state = {
      isOpen: props.expanded,
      selectionLabel: props.multiSelect ? labels.selectAll : labels.select,
      labels
    };
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  }

  /**
   *  Closes the dropdown whenever there is a click outside the document.
   *
   * @param {Object} evt - the event produced by clicking outside.
   */
  handleClickOutside = evt => {
    if (!this.node.contains(evt.target)) {
      this.setState({ isOpen: false });
    }
  };

  /**
   *  Opens and closes the dropdown
   *
   * @param {Object} evt - the event produced by the click action.
   * @returns {undefined}
   * @memberof Main
   */
  handleToggle(evt) {
    const { disabled } = this.props;
    const { isOpen } = this.state;

    if (evt) evt.stopPropagation();
    if (disabled) return;

    this.setState({
      isOpen: !isOpen
    });
  }

  /**
   * Applies the selected values to the state
   *
   * @param {Array} selection - An array containing the selected values.
   * @param {Boolean} commitChanges - If `true` the selection if finally committed the dropdown header text should reflect the new selection
   * @param {Boolean} toggle -If `true` the dropdown should toggle it's current state
   * @memberof Main
   */
  handleSelection(selection, commitChanges, toggle) {
    const { values, multiSelect, onChange } = this.props;
    const { labels } = this.state;
    const hasSelection = selection.length > 0;
    const isSingleSelection = selection.length === 1;

    let selectionLabel = multiSelect ? labels.selectAll : labels.select;

    if (commitChanges) {
      if (hasSelection && isSingleSelection) {
        selectionLabel = selection[0].label;
      } else if (hasSelection && multiSelect) {
        selectionLabel = `${labels.multiSelectionAction} ${selection.length} ${
          labels.multiSelectionConjuction
        } ${values.length}`;
      }

      this.setState({ selectionLabel });
    }

    if (toggle) this.handleToggle();

    onChange(multiSelect ? selection : selection[0]);
  }

  renderLabel() {
    const { classes, label } = this.props;

    return <div className={classes.label}>{label}</div>;
  }

  renderHeader() {
    const { classes, disabled } = this.props;
    const { isOpen, selectionLabel } = this.state;

    return (
      <div
        id="header"
        className={classNames([
          classes.header,
          {
            [classes.headerDisabled]: disabled
          }
        ])}
        onClick={evt => this.handleToggle(evt)}
        role="presentation"
      >
        <div className={classNames([classes.selection, classes.truncate])}>
          {selectionLabel}
        </div>
        {isOpen ? (
          <ArrowDown className={classes.arrow} />
        ) : (
          <ArrowUp className={classes.arrow} />
        )}
      </div>
    );
  }

  renderList() {
    const { classes, values, multiSelect, showSearch } = this.props;
    const { isOpen, labels } = this.state;

    return (
      <div
        className={classNames([
          classes.list,
          classes.listClosed,
          {
            [classes.open]: isOpen
          }
        ])}
      >
        <List
          values={values}
          multiSelect={multiSelect}
          isOpen={isOpen}
          showSearch={showSearch}
          onChange={(selected, commitChanges, toggle) =>
            this.handleSelection(selected, commitChanges, toggle)
          }
          labels={labels}
        />
      </div>
    );
  }

  render() {
    const { classes, label, disabled } = this.props;

    const { isOpen } = this.state;

    return (
      <React.Fragment>
        {label ? this.renderLabel() : null}
        <div
          className={classNames([
            classes.root,
            {
              [classes.rootDisabled]: disabled,
              [classes.rootActive]: isOpen
            }
          ])}
          ref={el => {
            this.node = el;
          }}
        >
          {this.renderHeader()}
          {this.renderList()}
        </div>
      </React.Fragment>
    );
  }
}

Main.propTypes = {
  /**
   * A Jss Object used to override or extend the component styles.
   */
  classes: PropTypes.instanceOf(Object).isRequired,
  /**
   * Label to display
   */
  label: PropTypes.string,
  /**
   * The list to be rendered by the dropdown.
   */
  values: PropTypes.instanceOf(Array),
  /**
   * If the ´true´ the dropdown is multiselect if ´false´ the dropdown is single select.
   */
  multiSelect: PropTypes.bool,
  /**
   * If ´true´ the dropdown is rendered with a search bar, if ´false´ there won't be a search bar.
   */
  showSearch: PropTypes.bool,
  /**
   * If ´true´ the dropdown is disabled unable to be interacted, if ´false´ it is enabled.
   */
  disabled: PropTypes.bool,
  /**
   * If ´true´ the dropdown starts opened if ´false´ it starts closed.
   */
  expanded: PropTypes.bool,
  /**
   * A function to be executed whenever a item is selected in the dropdown, the function receives the selected item(s).
   */
  onChange: PropTypes.func,
  /**
   * An object containing all the labels for the dropdown.
   *
   * - select: The default when there are no options avaible.
   * - selectAll: The label used for the All checkbox action.
   * - cancelLabel: The label used for the cancel button.
   * - applyLabel: The label used for the apply button.
   * - multiSelectionAction: The label used preceding the multiselection count.
   * - multiSelectionConjuction: The label used in the middle of the multiselection count.
   */
  labels: PropTypes.shape({
    select: PropTypes.string,
    selectAll: PropTypes.string,
    cancelLabel: PropTypes.string,
    applyLabel: PropTypes.string,
    multiSelectionAction: PropTypes.string,
    multiSelectionConjuction: PropTypes.string
  })
};

Main.defaultProps = {
  label: null,
  values: null,
  multiSelect: false,
  showSearch: false,
  disabled: false,
  expanded: false,
  onChange() {},
  labels: {}
};

export default Main;