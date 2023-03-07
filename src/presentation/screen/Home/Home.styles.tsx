import { StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#292a2e',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 8,
  },
  headerUsername: {
    color: '#fff',
    fontSize: 14,
  },
  headerPastDay: {
    color: 'rgba(232, 230, 227, 0.5)',
    fontSize: 12,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default styles;
