import { call, put, takeEvery } from 'redux-saga/effects';
import request from 'helpers/request';
import {
  bookChunkLoaded, fetchBooksSuccess,
  fetchBooksError
} from './actions';
import { actionTypes as at } from './constants';

const { REQUEST } = at;

function* fetchBooksSaga(action) {
  try {
    const { path, chunks } = action.payload;
    let index = 1;

    while (index <= chunks) {
      const composedUrl = `${path}/chunk-${index}.json`;
      const data = yield call(request, composedUrl);
      yield put(bookChunkLoaded(data));
      index++;
    }

    yield put(fetchBooksSuccess());
  } catch (e) {
    yield put(fetchBooksError(e.message));
  }
}

export default function* watcher() {
  yield takeEvery(REQUEST, fetchBooksSaga);
}
