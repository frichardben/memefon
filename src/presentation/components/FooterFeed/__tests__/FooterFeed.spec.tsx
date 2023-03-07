import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';
import { FooterFeed } from '../FooterFeed';

jest.mock('@expo/vector-icons');

const props = {
  likesCount: 2,
  commentsCount: 9,
};

describe('<FooterFeed/>', () => {
  it('should be render <FooterFeed/>', () => {
    const { getByTestId } = render(<FooterFeed {...props} />);

    expect(getByTestId('likesCount')).toBeTruthy();
    expect(getByTestId('commentsCount')).toBeTruthy();
  });
});
