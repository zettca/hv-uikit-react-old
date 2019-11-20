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
    display: "flex",
    flexDirection: "row"
  },
  selectionContainer: {
    order: 2,
    background: theme.hv.palette.atmosphere.atmo1,
    margin: `${theme.hv.spacing.sm}px`,
    minWidth: "200px"
  },
  controlsContainer: {
    order: 1,
    margin: `10px 0 ${theme.hv.spacing.sm}px 0`,
  },
  button: {
    margin: "5px 2px 0 0",
  }
});

export default styles;