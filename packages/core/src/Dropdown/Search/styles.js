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
    position: "relative",
    background: theme.hv.palette.atmosphere.atmo2,
    borderBottom: `1px solid ${theme.hv.palette.atmosphere.atmo5}`,
    height: 30,
    marginTop: 20
  },
  input: {
    border: "none",
    width: "100%",
    height: 30,
    padding: `5px ${theme.hv.spacing.md}px 5px 5px`,
    background: "transparent",
    "&:focus": {
      outline: "none"
    },
    ...theme.typography.body1
  },
  icon: {
    position: "absolute",
    right: 0,
    width: "32px",
    height: "32px"
  }
});

export default styles;