import { call, put, takeEvery } from 'redux-saga/effects'
import request from 'helpers/request';
import { bookChunkLoaded } from './actions';
import { actionTypes as at } from './constants';

const { REQUEST, SUCCESS, FAILURE } = at;

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

    yield put({type: SUCCESS, payload: []});
  } catch (e) {
    yield put({type: FAILURE, message: e.message});
  }
}

function* fetchBooksWatcher() {
  yield takeEvery(REQUEST, fetchBooksSaga);
}

export default fetchBooksWatcher;
