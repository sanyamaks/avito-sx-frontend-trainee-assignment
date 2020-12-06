import { ADD_NEWS, TOGGLE_LOADER } from '../actions/index';
const initialState = {
  isLoader: false,
  news: [],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return {
        ...state,
        news: [...action.payload],
      };
    case TOGGLE_LOADER:
      return {
        ...state,
        isLoader: action.payload,
      };
    default:
      return state;
  }
};
