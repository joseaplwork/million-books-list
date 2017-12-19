import { combineReducers } from 'redux';

import booksListReducer from './containers/BooksList/reducer';
import booksFiltersReducer from './containers/BooksFilters/reducer';

export default combineReducers({
  booksList: booksListReducer,
  booksFilters: booksFiltersReducer
});
