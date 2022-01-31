import { takeLatest, call, put } from 'redux-saga/effects';

import * as types from '../action/actionTypes';
import getDocumentDetails from '../api/api';

function* documentListSaga(action) {
  try {
    const documentDetails = yield call(getDocumentDetails);
    yield put({
      type: types.GET_DOCUMENT_LIST_SUCCESS,
      documentDetails: documentDetails.data,
    });
  } catch (e) {
    yield put({ type: types.GET_DOCUMENT_LIST_ERROR, message: e.message });
  }
}

function* getDocumentListSaga() {
  yield takeLatest(types.GET_DOCUMENT_LIST_REQUEST, documentListSaga);
}

export default getDocumentListSaga;
