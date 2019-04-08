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
    backgroundColor: theme.hv.palette.atmosphere.atmo2
  },
  mainContainer: {
    display: "flex",
    backgroundColor: theme.hv.palette.atmosphere.atmo3
  },
  navContainer: {
    maxWidth: "200px",
    paddingTop: `${theme.hv.spacing.md}px`
  },
  componentContainer: {
    width: "100%",
    maxHeight: "400px",
    overflowY: "auto",
    padding: `${theme.hv.spacing.md}px`
  },
  title: {
    ...theme.hv.typography.xlargeTitle,
    padding: `${theme.hv.spacing.sm}px 0`
  },
  groupTitle: {
    ...theme.hv.typography.mediumTitle
  },
  footer: {
    padding: `${theme.hv.spacing.sm}px`,
    textAlign: "right"
  }
});

export default styles;