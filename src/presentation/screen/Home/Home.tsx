import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Avatar from '../../components/Avatar';
import styles from './Home.styles';
import Tag from '../../components/Tag';
import Header from '../../components/Header';
import Feed from '../../components/Feed';
import FooterFeed from '../../components/FooterFeed';
import { PostService } from '../../../data/services';
import { IFeed } from '../../../data/model';

export const Home = () => {
  const [feedList, setFeedList] = useState<IFeed[]>([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    PostService.getAllPosts(page)
      .then((res: any) => {
        setFeedList(res.data.data);
      })
      .catch((err: Error) => {
        console.log(err);
      });

    if (feedList) {
      const current = feedList;

      setFeedList((prev) => [...prev, ...current]);
      setPage(page + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={feedList}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListFooterComponent={
          <ActivityIndicator size={'large'} color={'rgb(0, 161, 122)'} />
        }
        renderItem={({ item }) => (
          <>
            <Header key={item._id}>
              <View style={styles.container}>
                <Avatar photo={item.user.photo} />
                <View style={styles.headerText}>
                  <Text style={styles.headerUsername}>
                    {item.user.username}
                  </Text>
                  <Text style={styles.headerPastDay}>{item.createdAt}</Text>
                </View>
              </View>
              <View style={styles.container}>
                <Tag name={item.category.name} />
                <Feather
                  name="more-horizontal"
                  size={24}
                  color="gray"
                  style={{ marginLeft: 6 }}
                />
              </View>
            </Header>
            <Feed title={item.title} mediaUrl={item.mediaUrl} />
            <FooterFeed
              linksCount={item.commentsCount}
              commentsCount={item.commentsCount}
            />
          </>
        )}
        onEndReached={fetchData}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
};
