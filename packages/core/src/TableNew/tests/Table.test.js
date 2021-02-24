/* eslint-env jest */

import React from "react";

import { render } from "testing-utils";

import { Main } from "../stories/Table.stories";

describe("Table2", () => {
  describe("sample simple testing", () => {
    it("Main", () => {
      const { container } = render(<Main />);
      expect(container).toBeDefined();
    });
  });
});
