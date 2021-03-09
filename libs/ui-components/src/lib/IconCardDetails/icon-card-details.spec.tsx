import React from 'react';
import { render } from '@testing-library/react';

import IconCardDetails from './IconCardDetails';

describe('IconCardDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IconCardDetails children={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
