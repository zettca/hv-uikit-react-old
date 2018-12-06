"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

/**
 * Copyright (c) 2018 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */
var Logo = function Logo(_ref) {
  var classes = _ref.classes,
      companyLogo = _ref.companyLogo,
      productLogo = _ref.productLogo;
  return _react.default.createElement("div", {
    className: classes.companyLogoContainer
  }, _react.default.createElement("img", {
    src: companyLogo,
    className: classes.companyLogoImage,
    alt: "Company logo"
  }), _react.default.createElement("span", {
    className: classes.separator
  }), _react.default.createElement("div", {
    className: classes.companyLogoIcon
  }), _react.default.createElement("div", {
    className: classes.companyLogoText
  }, _react.default.createElement(_Typography.default, {
    className: classes.companyLogoText1
  }, "Maintenance Insights")));
};

Logo.propTypes = {
  classes: _propTypes.default.instanceOf(Object).isRequired,
  companyLogo: _propTypes.default.string,
  productLogo: _propTypes.default.string
};
Logo.defaultProps = {
  companyLogo: null,
  productLogo: null
};
var _default = Logo;
exports.default = _default;
//# sourceMappingURL=Logo.js.map