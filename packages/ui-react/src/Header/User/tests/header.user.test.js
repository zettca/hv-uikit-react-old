/**
 * Copyright (c) 2018 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

/* eslint-env jest */

import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { shallow, mount } from "enzyme";

import UserWithStyles from "../index";
import User from "../User";

describe("User withStyles", () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = shallow(<UserWithStyles />);
  });

  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render User component", () => {
    const userComponent = wrapper.find(User);
    expect(userComponent.length).toBe(1);
  });

  it("should render User component with Props", () => {
    const logout = jest.fn();
    const logoutCallback = () => logout();

    wrapper = shallow(
      <UserWithStyles
        userData={{ name: "UserName", role: "UserRole" }}
        logout={logoutCallback}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should render dropdown properly", () => {
    wrapper = mount(
      <UserWithStyles
        userData={{ name: "UserName", role: "UserRole" }}
        dropDown={false}
      />
    );

    const divWithoutDropdown = wrapper.find("div");
    expect(divWithoutDropdown.length).toBe(2);

    wrapper = mount(
      <UserWithStyles
        userData={{ name: "UserName", role: "UserRole" }}
        dropDown={true}
      />
    );

    const divWithDropdown = wrapper.find("div");
    expect(divWithDropdown.length).toBe(5);
    expect(divWithDropdown.at(3).props().children).toBe("Profile");
    expect(divWithDropdown.at(4).props().children).toBe("Logout");
  });

  it("should logout when the click on the Logout button", () => {
    const logout = jest.fn();
    const logoutCallback = () => logout();

    wrapper = mount(
      <UserWithStyles
        userData={{ name: "UserName", role: "UserRole" }}
        logout={logoutCallback}
        dropDown={true}
      />
    );

    wrapper
      .find("div")
      .at(4)
      .simulate("click");
    expect(logout).toHaveBeenCalled();
  });
});
