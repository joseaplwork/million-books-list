import { actionTypes as at } from './constants';

export const fetchBooks = () => {
  return {
    type: at.REQUEST,
    payload: {
      path: './books',
      chunks: 10
    }
  }
};

export const setSortingStatus = (payload) => ({
  type: at.SET_SORTING_STATUS,
  payload
});

export const fetchBooksSuccess = () => ({
  type: at.SUCCESS
});

export const fetchBooksError = error => ({
  type: at.ERROR,
  error
});

export const bookChunkLoaded = (chunk) => {
  return {
    type: at.BOOKS_CHUNK,
    payload: chunk
  }
};

export const triggerFilter = () => ({
  type: at.TRIGGER_FILTER
});
