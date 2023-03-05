import React, { Children } from 'react';
import { Text, View } from 'react-native';
import styles from './Header.styles';

interface HeaderProps {
    children: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => {
	return (
		<View style={styles.header}>
			{children}
		</View>
	);
};
