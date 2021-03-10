import React from 'react';
import { render } from '@testing-library/react';
import * as reactRedux from 'react-redux';

import DefaultError from './DefaultError';

describe('DefaultError', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  it('should render successfully', () => {
    useSelectorMock.mockReturnValue({});
    const { baseElement } = render(<DefaultError />);
    expect(baseElement).toBeTruthy();
  });
});
