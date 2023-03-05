import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './Feed.styles';

export const Feed = () => {
	return (
		<View>
			<Text style={styles.feedText}>I’m a hacker myself</Text>
			<Image
				style={styles.feedImage}
				source={{
					uri: 'https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg',
				}}
				resizeMode={'cover'}
			/>
		</View>
	);
};
