import React from 'react';
import { Image } from 'react-native';
import styles from './Avatar.styles';

export const Avatar = () => {
	return (
		<Image
			style={styles.avatar}
			source={{
				uri: 'https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg',
			}}
		/>
	);
};
