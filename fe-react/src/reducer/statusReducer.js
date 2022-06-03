import { ADD__STATUS_FAILURE, ADD__STATUS_REQUEST, ADD__STATUS_SUCCESS, DELETE__STATUS_FAILURE, DELETE__STATUS_REQUEST, DELETE__STATUS_SUCCESS, GET__STATUS_FAILURE, GET__STATUS_REQUEST, GET__STATUS_SUCCESS, UPDATE__STATUS_FAILURE, UPDATE__STATUS_REQUEST, UPDATE__STATUS_SUCCESS } from "../constant";
  
  const DEFAULT_STATE = {
    listStatus: [],
    isFetching: false,
    error: null,
  };
  
  const statusReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
      case GET__STATUS_REQUEST:
      case ADD__STATUS_REQUEST:
      case DELETE__STATUS_REQUEST:
      case UPDATE__STATUS_REQUEST:
        return {
          ...state,
          isFetching: true,
        };
  
      case GET__STATUS_SUCCESS:
        return {
          ...state,
          listStatus: action.payload.getData,
          isFetching: false,
          error: null,
        };
      case ADD__STATUS_SUCCESS:
      case DELETE__STATUS_SUCCESS:
      case UPDATE__STATUS_SUCCESS:
        return {
          ...state,
          isFetching: false,
        };
  
      case GET__STATUS_FAILURE:
      case ADD__STATUS_FAILURE:
      case DELETE__STATUS_FAILURE:
      case UPDATE__STATUS_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        };
      default:
        return DEFAULT_STATE;
    }
  };
  export default statusReducer;
  