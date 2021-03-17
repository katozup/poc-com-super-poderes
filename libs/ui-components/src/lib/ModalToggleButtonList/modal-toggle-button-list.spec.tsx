import React from 'react';
import { render } from '@testing-library/react';

import ModalToggleButtonList from './ModalToggleButtonList';

describe('ModalToggleButtonList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModalToggleButtonList children={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
