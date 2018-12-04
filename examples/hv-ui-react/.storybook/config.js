import React from "react";
import { configure, addDecorator } from "@storybook/react";
import HvProvider from "../src/Provider";
import theme from "@hv-ui/themes/dist/theme";

const req = require.context("../stories", true, /\.js$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

addDecorator(story => (
  <HvProvider theme={theme} r>
    {story()}
  </HvProvider>
));

configure(loadStories, module);