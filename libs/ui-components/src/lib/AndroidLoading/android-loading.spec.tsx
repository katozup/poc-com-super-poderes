import React from "react";
import { render } from "@testing-library/react";

import AndroidLoading from "./AndroidLoading";

describe("AndroidLoading", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AndroidLoading />);
    expect(baseElement).toBeTruthy();
  });
});
