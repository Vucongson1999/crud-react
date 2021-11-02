import {
  ADD_FAILURE,
  ADD_REQUEST,
  ADD_SUCCESS,
  DELETE_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  GET_FAILURE,
  GET_REQUEST,
  GET_SUCCESS,
  PAGINATION_FAILURE,
  PAGINATION_REQUEST,
  PAGINATION_SUCCESS,
  SEARCH_FAILURE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  UPDATE_FAILURE,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
} from "../constant";

const DEFAULT_STATE = {
  listStudents: "",
  isFetching: false,
  error: null,

  activePage: 1,
  totalPage: 1,
  textSearch: "",
};

const studentRuducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_REQUEST:
    case ADD_REQUEST:
    case DELETE_REQUEST:
    case UPDATE_REQUEST:
    case PAGINATION_REQUEST:
    case SEARCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case GET_SUCCESS:
      return {
        ...state,
        listStudents: action.payload,
        isFetching: false,
        error: null,
      };
    case ADD_SUCCESS:
    case DELETE_SUCCESS:
    case UPDATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case PAGINATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listStudents: action.payload.listStudents,
        totalPage: action.payload.totalPage,
        activePage: action.payload.activePage,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listStudents: action.payload.listStudents,
        totalPage: action.payload.totalPage,
        activePage: action.payload.activePage,
        textSearch: action.payload.textSearch,
      };

    case GET_FAILURE:
    case ADD_FAILURE:
    case DELETE_FAILURE:
    case UPDATE_FAILURE:
    case PAGINATION_FAILURE:
    case SEARCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return DEFAULT_STATE;
  }
};
export default studentRuducer;
