import React from 'react';
import { render } from '@testing-library/react-native';
import { Avatar } from '../Avatar';

const props = {
  photo: 'https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg',
  name: 'John Doe',
};

describe('<Avatar/>', () => {
  it('should be render <Avatar/>', () => {
    const { getByAccessibilityState } = render(<Avatar {...props} />);
    expect(getByAccessibilityState).toBeDefined();
  });
});
