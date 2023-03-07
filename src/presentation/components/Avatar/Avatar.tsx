import React from 'react';
import { Image } from 'react-native';
import { IUser } from '../../../data/model';
import styles from './Avatar.styles';

export type AvatarProps = Pick<IUser, 'photo' | 'name'>;

export const Avatar = ({ photo, name }: AvatarProps) => {
  return (
    <Image
      style={styles.avatar}
      source={{
        uri: photo,
      }}
      alt={name}
    />
  );
};
