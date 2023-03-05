import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Avatar from '../../components/Avatar';
import styles from './Home.styles';
import Tag from '../../components/Tag';
import Header from '../../components/Header';

export const Home = () => {
	return (
		<Header>
			<View style={styles.container}>
				<Avatar />
				<View style={styles.headerText}>
					<Text style={styles.headerUsername}>hackerman</Text>
					<Text style={styles.headerPastDay}>22 days ago</Text>
				</View>
			</View>
			<View style={styles.container}>
				<Tag />
				<Feather name="more-horizontal" size={24} color="gray" style={{ marginLeft: 6 }}/>
			</View>
		</Header>
	);
};
