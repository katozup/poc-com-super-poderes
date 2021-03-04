import React from "react";
import { render } from "@testing-library/react";
import * as reactRedux from 'react-redux'
import ActionButton from "./ActionButton";

describe("ActionButton", () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

  beforeEach(() => {
    useSelectorMock.mockClear();
  })
  it("should render successfully", () => {
    const mockCallBack = jest.fn();
    useSelectorMock.mockReturnValue({});
    const { baseElement } = render(<ActionButton styling='' componentId='' text='' onClick={mockCallBack} alt='' />);
    expect(baseElement).toBeTruthy();
  });
});
