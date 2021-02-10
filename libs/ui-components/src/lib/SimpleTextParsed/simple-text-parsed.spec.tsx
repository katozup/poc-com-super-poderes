import React from "react";
import { render } from "@testing-library/react";
import SimpleTextParsed from './SimpleTextParsed';

describe("SimpleTextParsed", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SimpleTextParsed text='' />);
    expect(baseElement).toBeTruthy();
  });
});
