import React from 'react';
import { render } from '@testing-library/react-native';
import { Tag } from '../Tag';

const props = {
  name: 'category',
};

describe('<Tag/>', () => {
  it('should be render <Tag/>', () => {
    const { getByText } = render(<Tag {...props} />);

    expect(getByText('category')).toBeTruthy();
  });
});
