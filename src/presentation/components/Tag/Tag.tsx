import React from 'react';
import { Text, View } from 'react-native';
import styles from './Tag.styles';


export const Tag = () => {
	return (
		<View style={styles.tag}>
			<Text style={styles.tagText}>Hacking</Text>
		</View>
	);
};
