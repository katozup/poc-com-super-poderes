import React from "react";
import { render } from "@testing-library/react";

import ModalHeader from "./modal-header";

describe("ModalHeader", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ModalHeader />);
    expect(baseElement).toBeTruthy();
  });
});
