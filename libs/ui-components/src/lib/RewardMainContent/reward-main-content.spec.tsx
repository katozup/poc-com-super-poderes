import React from "react";
import { render } from "@testing-library/react";

import RewardMainContent from "./reward-main-content";

describe("RewardMainContent", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<RewardMainContent />);
    expect(baseElement).toBeTruthy();
  });
});
