import React, {useCallback, useEffect} from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import style from './style';
import {getStoryContents, getStoryIds, getStoryItem} from '../../services';
import {NewsItem, HomeLoading} from '../../component/';
import {useDispatch, useSelector} from 'react-redux';
import {
  setContent,
  toggleIsLoading,
  toggleRefreshing,
} from '../../store/reducers';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {content, ...state} = useSelector(store => store.appReducer);
  const dispatch = useDispatch();

  const fetchContents = useCallback(async () => {
    let storiesArr = [];

    try {
      const idArr = await getStoryIds();
      dispatch(toggleIsLoading(true));
      dispatch(toggleRefreshing(false));

      console.log('ID LENGTH =>', idArr.length);

      for (let i = 0; i < idArr.length; i++) {
        const id = idArr[i];

        storiesArr.unshift(await getStoryItem(id));
      }
    } catch (error) {
      console.log('Error getting contents => ', error.message);
    } finally {
      console.log('STORIES ARR => ', storiesArr);
      dispatch(setContent(storiesArr));
      dispatch(toggleIsLoading(false));
    }
  }, []);

  useEffect(() => {
    fetchContents();
  }, []);

  useEffect(() => {
    console.log('=> ', {state, content});
  }, [state, content]);

  const onRefresh = async () => {
    dispatch(toggleRefreshing(true));
    fetchContents().finally(() => {
      dispatch(toggleRefreshing(false));
    });
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
