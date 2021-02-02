import React from "react";
import { render } from "@testing-library/react";

import ButtonListContent from "./ButtonListContent";

describe("ButtonListContent", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ButtonListContent children={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
