import React from "react";
import { render } from "@testing-library/react";

import DefaultError from "./DefaultError";

describe("DefaultError", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DefaultError />);
    expect(baseElement).toBeTruthy();
  });
});
