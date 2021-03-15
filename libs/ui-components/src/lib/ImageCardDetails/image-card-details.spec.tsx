import React from 'react';
import { render } from '@testing-library/react';

import ImageCardDetails from './ImageCardDetails';

describe('ImageCardDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageCardDetails children={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
