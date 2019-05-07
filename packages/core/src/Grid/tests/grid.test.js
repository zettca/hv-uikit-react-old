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
import { mount } from "enzyme";

import HvProvider from "../../Provider";
import GridWithStyles from "../index";
import Grid from "../Grid";

window.matchMedia = jest.fn(() => ({ matches: false, addListener: jest.fn(), removeListener: jest.fn() }));

describe("Grid withStyles", () => {
  const wrapper = mount(
    <HvProvider>
      <GridWithStyles />
    </HvProvider>
  );

  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the Grid component", () => {
    const GridComponent = wrapper.find(Grid);
    expect(GridComponent.length).toBe(1);
  });
});