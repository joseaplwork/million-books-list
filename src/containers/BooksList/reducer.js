import { env } from 'config';
import { actionTypes as booksFiltersAt } from 'containers/BooksFilters/constants';
import { actionTypes as at } from './constants';

const initialState = {
  filters: {},
  books: [],
  chunks: env.chunkParts,
  chunkIteration: 1,
  error: false,
  sorting: false,
  loading: true,
  done: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case at.REQUEST:
      return Object.assign({}, state, {
        filters: {},
        loading: true,
        done: state.chunkIteration === state.chunks
      });
    case at.BOOKS_CHUNK: {
      const books = state.books.concat(action.payload);

      return Object.assign({}, state, {
        books,
        chunkIteration: state.chunkIteration + 1,
        loading: false
      });
    }
    case at.FAILURE:
      return Object.assign({}, state, {
        books: [],
        error: true,
        done: false
      });
    case booksFiltersAt.FILTER_BOOKS: {
      const { payload } = action;

      return Object.assign({}, state, {
        sorting: true,
        filters: payload
      });
    }
    case at.TRIGGER_FILTER:
      return Object.assign({}, state, {
        sorting: false
      });
    default:
      return state;
  }
};
