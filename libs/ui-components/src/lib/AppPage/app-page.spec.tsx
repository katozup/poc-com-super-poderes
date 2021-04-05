import React from 'react';
import { render } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import AppPage from './AppPage';

describe('AppPage', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

  beforeEach(() => {
    useSelectorMock.mockClear();
  });
  it('should render successfully', () => {
    useSelectorMock.mockReturnValue({pageLoad: {PAGE:true}});
    const { baseElement } = render(
      <AppPage
        analytics={{ analyticsFunction: jest.fn() }}
        backgroundImage=''
        children={[]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
