import { call, put, takeEvery } from 'redux-saga/effects';
import request from 'helpers/request';
import { bookChunkLoaded, fetchBooksError } from './actions';
import { actionTypes as at } from './constants';

const { REQUEST } = at;

function* fetchBooksSaga(action) {
  try {
    const { path, interaction } = action.payload;

    const composedUrl = `${path}/chunk-${interaction}.json`;
    const data = yield call(request, composedUrl);
    yield put(bookChunkLoaded(data));
  } catch (e) {
    yield put(fetchBooksError(e.message));
  }
}

export default function* watcher() {
  yield takeEvery(REQUEST, fetchBooksSaga);
}
