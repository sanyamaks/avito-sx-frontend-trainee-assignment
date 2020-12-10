import { ADD_NEWS, SET_LOADING, ADD_COMMENTS } from '../actions';

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
    default:
      return state;
  }
};
