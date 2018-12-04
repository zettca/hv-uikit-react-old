import React from "react";
import { storiesOf } from "@storybook/react";
import HvDatePicker from "../src/DatePicker";

const Wrapper = () => (
  <div>
    <HvDatePicker label="Date range" />
  </div>
);

storiesOf("Date picker", module).add("Date picker", () => <Wrapper />);