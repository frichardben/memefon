import { ResizeMode, Video } from 'expo-av';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { regexVideoMp4 } from '../../../constants';
import { IFeed } from '../../../data/model';
import styles from './Feed.styles';

export type FeedProps = Pick<IFeed, 'title' | 'mediaUrl'>;

export const Feed = ({ title, mediaUrl }: FeedProps) => {
  const [mute, setMute] = useState(true);

  return (
    <View>
      {regexVideoMp4.test(mediaUrl) ? (
        <>
          <Text style={styles.feedText}>{title}</Text>
          <TouchableOpacity onPress={() => setMute(!mute)}>
            <Video
              style={styles.feedImage}
              source={{
                uri: `${mediaUrl}`,
              }}
              // shouldPlay
              isMuted={false}
              resizeMode={ResizeMode.COVER}
            />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.feedText}>{title}</Text>
          <Image
            style={styles.feedImage}
            source={{
              uri: `${mediaUrl}`,
            }}
            resizeMode={'contain'}
          />
        </>
      )}
    </View>
  );
};
