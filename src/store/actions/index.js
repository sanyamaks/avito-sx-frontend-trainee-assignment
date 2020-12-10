import {
  getAllNewsId,
  getNewsItemById,
  getCommentsById,
} from '../../api/NewsAPI';
import { convertTime } from '../../utils/timeConverter';

export const ADD_NEWS = 'ADD_NEWS';
export const addNews = (news) => ({
  type: ADD_NEWS,
  payload: news,
});

export const requestNews = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    getAllNewsId()
      .then((news) =>
        news.sort((a, b) => {
          return b.time - a.time;
        })
      )
      .then((news) => {
        return news.map((item) => convertTime(item));
      })
      .then((news) => dispatch(addNews(news)))
      .finally(() => dispatch(setLoading(false)));
  };
};

export const SET_LOADING = 'SET_LOADING';
export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const ADD_COMMENTS = 'ADD_COMMENTS';
export const addComments = (comments) => ({
  type: ADD_COMMENTS,
  payload: comments,
});

export const requestComments = (ids) => {
  return (dispatch) => {
    getCommentsById(ids)
      .then((comments) =>
        comments.sort((a, b) => {
          return b.time - a.time;
        })
      )
      .then((comments) => {
        return comments.map((item) => convertTime(item));
      })
      .then((comments) => dispatch(addComments(comments)));
  };
};
