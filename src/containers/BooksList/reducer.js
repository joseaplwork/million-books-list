import { actionTypes as booksFiltersAt } from 'containers/BooksFilters/constants';
import { actionTypes as at } from './constants';

const initialState = {
  data: [],
  books: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case at.REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case at.SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        books: action.payload
      });
    case at.FAILURE:
      return Object.assign({}, state, {
        data: [],
        books: []
      });
    case booksFiltersAt.FILTER_BY_AUTHOR_GENDER:
      const { payload } = action;

      const filteredBooks = state.data.filter(({ author }) => {
        return payload.includes(author.gender);
      });

      return Object.assign({}, state, {
        books: filteredBooks
      });
    default:
      return state;
  }
};
