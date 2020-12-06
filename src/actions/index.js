import { getAllNewsId } from '../api/NewsAPI';

export const ADD_NEWS = 'ADD_NEWS';
export const addNews = (news) => ({
  type: ADD_NEWS,
  payload: news,
});

export const requestNews = () => {
  return (dispatch) => {
    dispatch(toggleLoader(true));
    getAllNewsId()
      .then((news) => dispatch(addNews(news)))
      .finally(() => dispatch(toggleLoader(false)));
  };
};

export const TOGGLE_LOADER = 'TOGGLE_LOADER';
export const toggleLoader = (isLoader) => ({
  type: TOGGLE_LOADER,
  payload: isLoader,
});
