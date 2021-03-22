import React from "react";
import { render } from "@testing-library/react";

import ModalToggleButton from "./ModalToggleButton";

describe("ModalToggleButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ModalToggleButton />);
    expect(baseElement).toBeTruthy();
  });
});
