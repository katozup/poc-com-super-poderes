import React from "react";
import { render } from "@testing-library/react";

import ListItem from "./ListItem";

describe("ListItem", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ListItem children={[]} componentId=""/>);
    expect(baseElement).toBeTruthy();
  });
});
