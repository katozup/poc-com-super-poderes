import React from "react";
import { render } from "@testing-library/react";

import TitleH1 from "./TitleH1";

describe("TitleH1", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TitleH1 text='' />);
    expect(baseElement).toBeTruthy();
  });
});
