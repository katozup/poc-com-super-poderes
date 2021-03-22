import React from 'react';
import { render } from '@testing-library/react';

import NavigationButtonList from './NavigationButtonList';

describe('NavigationButtonList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <NavigationButtonList componentId='' children={[]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
