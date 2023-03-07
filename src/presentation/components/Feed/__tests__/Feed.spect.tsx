import React from 'react';
import { render } from '@testing-library/react-native';
import { Feed } from '../Feed';

const props = {
  title: 'Random',
  mediaUrl: 'https://source.unsplash.com/user/c_v_r/1900x800',
};

describe('<Feed/>', () => {
  it('should be render title', () => {
    const { getByText } = render(<Feed {...props} />);
    expect(getByText('Random')).toBeTruthy();
  });
  it('should be render mediaUrl', () => {
    const { getByAccessibilityState } = render(<Feed {...props} />);
    expect(getByAccessibilityState).toBeDefined();
  });
});
