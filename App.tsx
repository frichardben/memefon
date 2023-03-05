import Home from './src/presentation/screen/Home';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Home />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#292a2e',
		paddingTop: 50,
		paddingHorizontal: 16
	},
});
