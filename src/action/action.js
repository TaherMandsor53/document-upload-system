import * as types from './actionTypes';

export function getDocumentList() {
  return {
    type: types.GET_DOCUMENT_LIST_REQUEST,
  };
}
