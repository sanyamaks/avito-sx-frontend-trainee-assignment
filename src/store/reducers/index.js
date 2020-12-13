import {
  ADD_NEWS,
  SET_LOADING,
  ADD_COMMENTS,
  ADD_CHILD_COMMENTS,
  RESET_ALL_COMMENTS,
} from '../actions';

const initialState = {
  isLoading: false,
  news: [],
  comments: [],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return {
        ...state,
        news: [...action.payload],
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ADD_COMMENTS:
      return {
        ...state,
        comments: [...action.payload],
      };
    case ADD_CHILD_COMMENTS:
      return {
        ...state,
        comments: [
          ...state.comments.map((item) => {
            if (item.id === action.payload.parentId) {
              item.childComments = action.payload.comments;
            }
            return { ...item };
          }),
        ],
      };
    case RESET_ALL_COMMENTS:
      return {
        ...state,
        comments: [],
      };
    default:
      return state;
  }
};
