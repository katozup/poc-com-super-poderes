import React from 'react';
import { render } from '@testing-library/react';

import RewardMainContent from './RewardMainContent';

describe('RewardMainContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RewardMainContent children={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
