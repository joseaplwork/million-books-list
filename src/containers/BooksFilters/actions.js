import { actionTypes as at } from './constants';

export const filterChange = (filters) => {
  return {
    type: at.FILTER_BOOKS,
    payload: filters
  };
};
