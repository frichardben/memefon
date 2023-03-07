import React from 'react';
import { Text, View } from 'react-native';
import { ICategory } from '../../../data/model';
import styles from './Tag.styles';

export const Tag = ({ name }: ICategory) => {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{name}</Text>
    </View>
  );
};
