import React from 'react';
import { View } from 'react-native';
import styles from './Header.styles';

type HeaderProps = {
  children: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return <View style={styles.header}>{children}</View>;
};
