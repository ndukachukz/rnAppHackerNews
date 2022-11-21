/* eslint-disable curly */
/* eslint-disable prettier/prettier */
import axios from 'axios';

export {createTable, getDBConnection, saveUser} from './db';

export const baseUrl = 'https://hacker-news.firebaseio.com';
export const newStoriesUrl = `${baseUrl}/v0/newstories.json`;
export const storyUrl = `${baseUrl}/v0/item`;

export const getStoryIds = async setState => {
  try {
    const result = await axios.get(newStoriesUrl);
    return result.data;
  } catch (error) {
    console.log('Error getting IDs => ', error.message);
    if (error.code === 'ERR_NETWORK')
      setState(prevState => ({
        ...prevState,
        error: `${error.message}, Please try again with an internet connection`,
      }));
  }
};

export const getStoryItem = async id => {
  try {
    const result = await axios.get(`${storyUrl}/${id}.json`);
    // console.log(result.data);
    return result.data;
  } catch (error) {
    console.log('Error getting item => ', error.message);
  }
};

export const getStoryContents = async () => {
  let storiesArr = [];
  try {
    const idArr = await getStoryIds();

    console.log('ID LENGTH =>', idArr.length);

    if (idArr)
      for (let i = 0; i < idArr.length; i++) {
        const id = idArr[i];

        storiesArr.unshift(await getStoryItem(id));
      }
    return storiesArr;
  } catch (error) {
    console.log('Error getting contents => ', error.message);
  }
};
