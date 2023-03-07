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

  const dateDiff = (createdAt: string) => {
    const datePost = new Date(createdAt).getTime();
    const today = new Date().getTime();
    const differentBetweenDay = Math.round(
      (today - datePost) / (1000 * 60 * 60 * 24)
    );

    const postDay =
      differentBetweenDay === 0 ? 'Today' : `${differentBetweenDay} Days Ago`;

    return <Text style={styles.headerPastDay}>{postDay}</Text>;
  };

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
                <Avatar photo={item.user.photo} name={item.user.name} />
                <View style={styles.headerText}>
                  <Text style={styles.headerUsername}>
                    {item.user.username}
                  </Text>
                  {dateDiff(item.createdAt)}
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
              likesCount={item.likesCount}
              commentsCount={item.commentsCount}
            />
          </>
        )}
        onEndReached={fetchData}
        onEndReachedThreshold={0.1}
        testID="flat-list"
      />
    </SafeAreaView>
  );
};
