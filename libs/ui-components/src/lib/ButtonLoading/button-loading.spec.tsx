import React from "react";
import { render } from "@testing-library/react";

import ButtonLoading from "./ButtonLoading";

describe("ButtonLoading", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ButtonLoading />);
    expect(baseElement).toBeTruthy();
  });
});
