import React from "react";
import { render } from "@testing-library/react";

import ActionButton from "./ActionButton";

describe("ActionButton", () => {
  it("should render successfully", () => {
    const mockCallBack = jest.fn();
    const { baseElement } = render(<ActionButton text='' onClick={mockCallBack} alt='' />);
    expect(baseElement).toBeTruthy();
  });
});
