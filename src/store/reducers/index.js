import { ADD_NEWS, SET_LOADING } from '../actions';
const initialState = {
  isLoading: false,
  news: [],
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
    default:
      return state;
  }
};
