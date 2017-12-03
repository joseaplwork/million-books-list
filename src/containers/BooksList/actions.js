import { RSAA } from 'redux-api-middleware';
import { actionTypes as at } from './constants';

export const fetchBooks = () => {
  return {
    [RSAA]: {
      endpoint: './books.json',
      method: 'GET',
      types: [at.REQUEST, at.SUCCESS, at.FAILURE]
    }
  };
};
