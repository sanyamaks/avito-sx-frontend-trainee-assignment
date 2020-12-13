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
export const ADD_ACTIVE_NEWS = 'ADD_ACTIVE_NEWS';
export const addActiveNews = (activeNews) => ({
  type: ADD_ACTIVE_NEWS,
  payload: activeNews,
});

export const REMOVE_ACTIVE_NEWS = 'REMOVE_ACTIVE_NEWS';
export const removeActiveNews = () => ({
  type: REMOVE_ACTIVE_NEWS,
  payload: null,
});

export const findActiveNewsById = (id) => {
  return (dispatch, getState) => {
    const activeNews = getState().news.find(
      (newsItem) => newsItem.id === parseInt(id)
    );
    dispatch(addActiveNews(activeNews));
  };
};

export const requestActiveNews = (id) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    getNewsItemById(id)
      .then((activeNews) => convertTime(activeNews))
      .then((activeNews) => dispatch(addActiveNews(activeNews)))
      .catch((err) => {
        dispatch(setError(err.status));
      })
      .finally(() => dispatch(setLoading(false)));
  };
};

export const SET_ERROR = 'SET_ERROR';
export const setError = (status) => ({
  type: SET_ERROR,
  payload: status,
});

export const RESET_ERROR = 'RESET_ERROR';
export const resetError = () => ({
  type: RESET_ERROR,
  payload: null,
});

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
    dispatch(setLoading(true));
    getCommentsById(ids)
      .then((comments) =>
        comments.sort((a, b) => {
          return b.time - a.time;
        })
      )
      .then((comments) => {
        return comments.map((comment) => {
          comment.orderOfPriority = 0;
          return convertTime(comment);
        });
      })
      .then((comments) => dispatch(addComments(comments)))
      .finally(() => dispatch(setLoading(false)));
  };
};

export const ADD_CHILD_COMMENTS = 'ADD_CHILD_COMMENTS';
export const addChildComments = (parentId, comments) => ({
  type: ADD_CHILD_COMMENTS,
  payload: { parentId, comments },
});

export const RESET_ALL_COMMENTS = 'RESET_ALL_COMMENTS';
export const resetAllComments = () => ({
  type: RESET_ALL_COMMENTS,
  payload: [],
});

const requestEveryChildCommentsGroup = async (
  parentId,
  orderOfPriority,
  childCommentsIds
) => {
  const comments = await getCommentsById(childCommentsIds);
  comments.sort((a, b) => {
    return b.time - a.time;
  });

  let fullComments = Promise.all(
    comments.map(async (comment) => {
      comment.orderOfPriority = orderOfPriority + 1;
      if (comment.hasOwnProperty('kids') && comment.kids.length > 0) {
        comment.childComments = await requestEveryChildCommentsGroup(
          comment.id,
          comment.orderOfPriority,
          comment.kids
        );
      }
      return convertTime(comment);
    })
  );
  return fullComments;
};

export const requestAllChildComments = (
  parentId,
  orderOfPriority,
  childCommentsIds
) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    await requestEveryChildCommentsGroup(
      parentId,
      orderOfPriority,
      childCommentsIds
    )
      .then((comments) => dispatch(addChildComments(parentId, comments)))
      .finally(() => dispatch(setLoading(false)));
  };
};
