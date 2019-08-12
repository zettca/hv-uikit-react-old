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

const styles = theme => ({
  root: {
    display: "block",
    padding: 0,
    margin: 0
  },
  listItem: {
    display: "flex",
    justifyContent: "flex-start",
    height: "32px",
    listStyleType: "none",
    "&:hover": {
      background: theme.hv.palette.atmosphere.atmo4,
      cursor: "pointer"
    },
    "&:not(:last-child)": {
      marginBottom: "8px"
    },
    "& svg:last-child": {
      marginLeft: "auto"
    },
    "& a": {
      display: "block",
      width: "100%"
    }
  },
  condensed: {
    marginBottom: "0 !important"
  },
  selected: {
    background: theme.hv.palette.accent.acce1,
    color: theme.hv.palette.atmosphere.atmo1,
    "&:hover": {
      background: theme.hv.palette.accent.acce1,
      color: theme.hv.palette.atmosphere.atmo1
    }
  },
  focusDisabled: {
    outline: "none !important"
  },
  typography: {
    lineHeight: "32px",
    padding: `0 ${theme.hv.spacing.xs}px`
  },
  iconLeftPadding: {
    paddingLeft: 0
  },
  noIconLeftPadding: {
    paddingLeft: "32px"
  },
  navIcon: {
    marginLeft: "auto"
  },
  selectorContainer: {
    width: "100%"
  },
  selectAll: {
    "& > span": {
      ...theme.hv.typography.highlightText
    }
  },
  truncate: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }
});

export default styles;