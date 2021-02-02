import React from "react";
import { render } from "@testing-library/react";

import BtnBack from "./BtnBack";

describe("BtnBack", () => {
  it("should render successfully", () => {
    const mockCallBack = jest.fn();
    const { baseElement } = render(<BtnBack onClick={mockCallBack} />);
    expect(baseElement).toBeTruthy();
  });
});
