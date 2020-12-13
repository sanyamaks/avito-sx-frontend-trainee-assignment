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
