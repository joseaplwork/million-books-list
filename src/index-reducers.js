import { combineReducers } from 'redux';

import booksListReducer from './containers/BooksList/reducer';

export default combineReducers({
  booksList: booksListReducer
});
