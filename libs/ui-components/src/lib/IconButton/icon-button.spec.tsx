import React from "react";
import { render } from "@testing-library/react";

import IconButton from "./IconButton";

describe("IconButton", () => {
  it("should render successfully", () => {
    const mockCallBack = jest.fn();
    const { baseElement } = render(<IconButton componentId="" onClick={mockCallBack} />);
    expect(baseElement).toBeTruthy();
  });
});
