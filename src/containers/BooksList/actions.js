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

export const bookChunkLoaded = (chunk) => {
  return {
    type: at.BOOKS_CHUNK,
    payload: chunk
  }
};
