import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './FooterFeed.styles';

export const FooterFeed = () => {
	return (
		<>
			<View style={styles.footerFeedContainer}>
				<TouchableOpacity style={styles.footerFeedButton}>
					<Feather name="heart" size={24} color="rgb(0, 161, 122)" />
					<Text style={styles.footerFeedText}>0</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.footerFeedButton}>
					<Feather name="message-circle" size={24} color="rgb(0, 161, 122)" />
					<Text style={styles.footerFeedText}>0</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Feather name="share-2" size={24} color="rgb(0, 161, 122)" />
				</TouchableOpacity>
			</View>
			<View style={styles.divider} />
		</>
	);
};
