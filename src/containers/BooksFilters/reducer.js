import { actionTypes as at } from './constants';

const initialState = {
  resetFilters: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case at.FILTER_BOOKS:
      return Object.assign({}, state, {
        resetFilters: false,
      });
    case at.RESET_FILTERS:
      return Object.assign({}, state, {
        resetFilters: true,
      });
    default:
      return state;
  }
};
