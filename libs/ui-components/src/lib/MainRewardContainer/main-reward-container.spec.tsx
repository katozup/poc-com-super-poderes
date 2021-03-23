import React from "react";
import { render } from "@testing-library/react";

import MainRewardContainer from "./MainRewardContainer";

describe("MainRewardContainer", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MainRewardContainer children={[]} componentId="" />);
    expect(baseElement).toBeTruthy();
  });
});
