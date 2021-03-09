import React from 'react';
import { render } from '@testing-library/react';

import CardDetailsGroup from './CardDetailsGroup';

describe('CardDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardDetailsGroup children={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
