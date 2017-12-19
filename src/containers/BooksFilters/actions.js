import { actionTypes as at } from './constants';

export const resetFilters = () => {
  return {
    type: at.RESET_FILTERS,
  };
};

export const filterChange = (filters) => {
  return {
    type: at.FILTER_BOOKS,
    payload: filters
  };
};
