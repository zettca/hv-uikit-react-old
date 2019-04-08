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
import Typography from "@material-ui/core/Typography";

/**
 * Builds the title component. This component can be render by the props:
 *  - titletext - overrides the default "Welcome" text.
 *  - logo - an url for a icon to be used in junction with the titletext.
 *  - titleComponent - a component to be render, overriding the titletext.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Title = ({ classes, logo, titleText, titleComponent }) => {
  let logoComponent = null;
  let span = null;

  if (titleComponent !== null) {
    return <div className={classes.logoContainer}>{titleComponent}</div>;
  }

  if (logo != null) {
    logoComponent = (
      <img src={logo} className={classes.logoImage} alt="Company logo" />
    );
    span = <span className={classes.separator} />;
  }
  return (
    <div className={classes.logoContainer}>
      {logoComponent}
      {span}
      <Typography variant="h3" className={classes.root}>
        {titleText}
      </Typography>
    </div>
  );
};

Title.propTypes = {
  /**
   * the classes object to be applied into the root object.
   */
  classes: PropTypes.instanceOf(Object).isRequired,
  /**
   * the welcome message
   */
  titleText: PropTypes.string,
  /**
   * the url for the logo in the welcome message.
   */
  logo: PropTypes.string,
  /**
   * a component to replace the welcome message
   */
  titleComponent: PropTypes.node
};

Title.defaultProps = {
  logo: "",
  titleText: "Welcome",
  titleComponent: null
};

export default Title;