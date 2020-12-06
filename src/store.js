import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { newsReducer } from './reducers/index';

const store = createStore(newsReducer, applyMiddleware(thunk));

export default store;
