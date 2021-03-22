import React from "react";
import { render } from "@testing-library/react";
import * as reactRedux from 'react-redux'
import { BrowserRouter } from "react-router-dom";

import App from "./app";

describe("App", () => {

  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  const mockedDispatch = jest.fn();

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  })
  it("should render successfully", () => {
    useSelectorMock.mockReturnValue({});
    useDispatchMock.mockReturnValue(mockedDispatch);
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });
});
