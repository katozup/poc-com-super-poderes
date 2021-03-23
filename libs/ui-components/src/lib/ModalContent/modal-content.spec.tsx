import React from 'react';
import { render } from '@testing-library/react';
import * as reactRedux from 'react-redux';

import ModalContent from './ModalContent';

describe('ModalContent', () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const mockedDispatch = jest.fn();

  beforeEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });
  it('should render successfully', () => {
    useDispatchMock.mockReturnValue(mockedDispatch);
    useSelectorMock.mockReturnValue({});
    const { baseElement } = render(
      <ModalContent componentId='' analytics={{}} children={[]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
