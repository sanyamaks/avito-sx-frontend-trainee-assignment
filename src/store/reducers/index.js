import {
  ADD_NEWS,
  SET_LOADING,
  SET_ACTIVE_NEWS,
  RESET_ACTIVE_NEWS,
} from '../actions';

const initialState = {
  isLoading: false,
  news: [],
  activeNews: null,
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
    case SET_ACTIVE_NEWS:
      return {
        ...state,
        activeNews: action.payload,
      };
    case RESET_ACTIVE_NEWS:
      return {
        ...state,
        activeNews: action.payload,
      };
    default:
      return state;
  }
};
