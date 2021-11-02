import { ADD_FAILURE, ADD_REQUEST, ADD_SUCCESS, 
    DELETE_FAILURE, DELETE_REQUEST, DELETE_SUCCESS, 
    GET_FAILURE, GET_REQUEST, GET_SUCCESS, 
    PAGINATION_FAILURE, PAGINATION_REQUEST, PAGINATION_SUCCESS,
     SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS, 
     UPDATE_FAILURE, UPDATE_REQUEST, UPDATE_SUCCESS } from '../constant'

function getRequest() {
    return {
        type: GET_REQUEST
    }
}
function getSuccess(payload) {
    return {
        type: GET_SUCCESS,
        payload
    }
}
function getFailure(payload) {
    return {
        type: GET_FAILURE,
        payload
    }
}

function addRequest(payload) {
    return {
        type: ADD_REQUEST,
        payload
    }
}
function addSuccess(payload) {
    return {
        type: ADD_SUCCESS,
        payload
    }
}
function addFailure(payload) {
    return {
        type: ADD_FAILURE,
        payload
    }
}


function deleteRequest(payload) {
    return {
        type: DELETE_REQUEST,
        payload
    }
}
function deleteSuccess(payload) {
    return {
        type: DELETE_SUCCESS,
        payload
    }
}
function deleteFailure(payload) {
    return {
        type: DELETE_FAILURE,
        payload
    }
}


function updateRequest(payload) {
    return {
        type: UPDATE_REQUEST,
        payload
    }
}
function updateSuccess(payload) {
    return {
        type: UPDATE_SUCCESS,
        payload
    }
}
function updateFailure(payload) {
    return {
        type: UPDATE_FAILURE,
        payload
    }
}

function paginationRequest(payload) {
    return {
        type: PAGINATION_REQUEST,
        payload
    }
}
function paginationSuccess(payload) {
    return {
        type: PAGINATION_SUCCESS,
        payload
    }
}
function paginationFailure(payload) {
    return {
        type: PAGINATION_FAILURE,
        payload
    }
}


function searchRequest(payload) {
    return {
        type: SEARCH_REQUEST,
        payload
    }
}
function searchSuccess(payload) {
    return {
        type: SEARCH_SUCCESS,
        payload
    }
}
function searchFailure(payload) {
    return {
        type: SEARCH_FAILURE,
        payload
    }
}

export {
    getRequest, getSuccess, getFailure,
    addRequest, addSuccess, addFailure,
    deleteRequest, deleteSuccess, deleteFailure,
    updateRequest, updateSuccess, updateFailure,
    paginationRequest, paginationSuccess, paginationFailure,
    searchRequest, searchSuccess, searchFailure
}