import { fork } from 'redux-saga/effects';
import getDocumentListSaga from './DocumentSaga';

function* sagas() {
  yield fork(getDocumentListSaga);
}

export default sagas;
