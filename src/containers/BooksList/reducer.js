import { actionTypes as booksFiltersAt } from 'containers/BooksFilters/constants';
import { actionTypes as at } from './constants';

const initialState = {
  filters: {},
  books: [],
  loading: true,
  done: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case at.REQUEST:
      return Object.assign({}, state, {
        loading: true,
        done: false
      });
    case at.SUCCESS:
      return Object.assign({}, state, {
        done: true
      });
    case at.BOOKS_CHUNK: {
      const books = state.books.concat(action.payload);

      return Object.assign({}, state, {
        books,
        loading: false
      });
    }
    case at.FAILURE:
      return Object.assign({}, state, {
        books: [],
        done: false
      });
    case booksFiltersAt.FILTER_BOOKS: {
      const { payload } = action;

      return Object.assign({}, state, {
        filters: payload
      });
    }
    case booksFiltersAt.BOOKS_BY_AUTHOR_NAME:
    case booksFiltersAt.BOOKS_BY_BOOK_NAME: {
      const { payload } = action;

      const updatedFilters = Object.assign({}, state.filters, {
        sortBooks: payload
      });

      return Object.assign({}, state, {
        filters: updatedFilters
      });
    }
    default:
      return state;
  }
};
