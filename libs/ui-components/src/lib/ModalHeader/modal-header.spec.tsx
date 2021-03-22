import React from 'react';
import { render } from '@testing-library/react';

import ModalHeader from './ModalHeader';

describe('ModalHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModalHeader children={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
