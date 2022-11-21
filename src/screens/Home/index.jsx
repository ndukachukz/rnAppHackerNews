import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import style from './style';
import {getStoryContents} from '../../services';
import {NewsItem, HomeLoading} from '../../component/';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [state, setState] = useState({
    isLoading: false,
    refreshing: false,
  });
  const [content, setContent] = useState([]);
  const triggerRef = useRef(null);

  useEffect(() => {
    (async () => {
      setState(prevState => ({
        ...prevState,
        isLoading: true,
        refreshing: false,
      }));
      setContent(await getStoryContents());
      setState(prevState => ({
        ...prevState,
        isLoading: false,
      }));
    })();
  }, []);

  const onRefresh = async () => {
    setContent(null);
    setState(prevState => ({
      ...prevState,
      refreshing: true,
      isLoading: true,
    }));
    const res = await getStoryContents();
    setContent(await getStoryContents());
    setState(prevState => ({
      ...prevState,
      refreshing: false,
      isLoading: true,
    }));
  };
  return (
    <SafeAreaView style={style.screen}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {state.isLoading ? (
        <FlatList
          data={Array(10)}
          renderItem={() => <HomeLoading />}
          ItemSeparatorComponent={<View style={{marginBottom: 25}} />}
        />
      ) : (
        <FlatList
          contentInsetAdjustmentBehavior="automatic"
          data={content}
          refreshControl={
            <RefreshControl
              refreshing={state.refreshing}
              onRefresh={onRefresh}
            />
          }
          renderItem={({item, index}) => <NewsItem key={index} {...item} />}
          ItemSeparatorComponent={<View style={{marginBottom: 25}} />}
        />
      )}
    </SafeAreaView>
  );
};
