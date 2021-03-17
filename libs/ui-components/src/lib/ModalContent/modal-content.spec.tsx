import React from "react";
import { render } from "@testing-library/react";

import ModalContent from "./ModalContent";

describe("ModalContent", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ModalContent />);
    expect(baseElement).toBeTruthy();
  });
});
