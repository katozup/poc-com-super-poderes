import React from "react";
import { render } from "@testing-library/react";

import TitleH2 from "./TitleH2";

describe("TitleH2", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TitleH2 />);
    expect(baseElement).toBeTruthy();
  });
});
