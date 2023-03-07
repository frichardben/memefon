import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './FooterFeed.styles';
import { IFeed } from '../../../data/model';

export type UserFeedCountProps = Pick<IFeed, 'linksCount' | 'commentsCount'>;

export const FooterFeed = ({
  linksCount,
  commentsCount,
}: UserFeedCountProps) => {
  return (
    <>
      <View style={styles.footerFeedContainer}>
        <TouchableOpacity style={styles.footerFeedButton}>
          <Feather name="heart" size={24} color="rgb(0, 161, 122)" />
          <Text style={styles.footerFeedText}>{linksCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerFeedButton}>
          <Feather name="message-circle" size={24} color="rgb(0, 161, 122)" />
          <Text style={styles.footerFeedText}>{commentsCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="share-2" size={24} color="rgb(0, 161, 122)" />
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
    </>
  );
};
