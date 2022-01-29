import * as types from '../action/actionTypes';

const initialState = {
  isFetching: false,
  documentDetails: [],
};

export default function getDocumentDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_DOCUMENT_LIST_REQUEST:
      return { ...state, isFetching: true };

    case types.GET_DOCUMENT_LIST_SUCCESS:
      return { isFetching: false, documentDetails: action.documentDetails };

    case types.GET_DOCUMENT_LIST_ERROR:
      return { ...state, isFetching: false, error: action.message };

    default:
      return state;
  }
}
