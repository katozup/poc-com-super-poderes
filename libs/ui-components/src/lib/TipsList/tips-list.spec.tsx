import React from "react";
import { render } from "@testing-library/react";

import TipsList from "./TipsList";

describe("TipsList", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TipsList />);
    expect(baseElement).toBeTruthy();
  });
});
