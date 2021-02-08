import React from "react";
import { render } from "@testing-library/react";

import TitleH2Parsed from "./TitleH2Parsed";

describe("TitleH2Parsed", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TitleH2Parsed text='' />);
    expect(baseElement).toBeTruthy();
  });
});
