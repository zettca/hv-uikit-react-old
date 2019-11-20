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
  selectCell: {
    width: "32px"
  },
  root: {
    background: theme.hv.palette.atmosphere.atmo1,
    width: "100%",
    marginTop: "10px",
    position: "relative"
  },
  button: {
    padding: `0 ${theme.hv.spacing.sm}px`,
    position: "relative"
  },
  dropdownMenu: {
    position: "relative"
  },
  actionSeparator: {
    "&::before": {
      content: "''",
      height: "100%",
      width: 2,
      display: "block",
      background: theme.hv.palette.atmosphere.atmo2,
      position: "absolute",
      top: 0,
      left: 0
    }
  },
  actionGrid: {
    display: "flex"
  },
  box:{
    width: "30px", 
    padding: "7px",
    "&>svg": {
      display: "block",
      margin: "auto"
    }
  }
});

export default styles;