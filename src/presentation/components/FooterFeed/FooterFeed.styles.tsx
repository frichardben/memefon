import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  footerFeedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  footerFeedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
  },
  footerFeedText: {
    marginLeft: 4,
    color: '#fff',
  },
  divider: {
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default styles;
