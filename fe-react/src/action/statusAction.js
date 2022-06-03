import { ADD__STATUS_FAILURE, ADD__STATUS_REQUEST, ADD__STATUS_SUCCESS, DELETE__STATUS_FAILURE, DELETE__STATUS_REQUEST, DELETE__STATUS_SUCCESS, GET__STATUS_FAILURE, GET__STATUS_REQUEST, GET__STATUS_SUCCESS, UPDATE__STATUS_FAILURE, UPDATE__STATUS_REQUEST, UPDATE__STATUS_SUCCESS } from '../constant'

function getStatusRequest() {
    return {
        type: GET__STATUS_REQUEST
    }
}
function getStatusSuccess(payload) {
    return {
        type: GET__STATUS_SUCCESS,
        payload
    }
}
function getStatusFailure(payload) {
    return {
        type: GET__STATUS_FAILURE,
        payload
    }
}

function addStatusRequest(payload) {
    return {
        type: ADD__STATUS_REQUEST,
        payload
    }
}
function addStatusSuccess(payload) {
    return {
        type: ADD__STATUS_SUCCESS,
        payload
    }
}
function addStatusFailure(payload) {
    return {
        type: ADD__STATUS_FAILURE,
        payload
    }
}


function deleteStatusRequest(payload) {
    return {
        type: DELETE__STATUS_REQUEST,
        payload
    }
}
function deleteStatusSuccess(payload) {
    return {
        type: DELETE__STATUS_SUCCESS,
        payload
    }
}
function deleteStatusFailure(payload) {
    return {
        type: DELETE__STATUS_FAILURE,
        payload
    }
}


function updateStatusRequest(payload) {
    return {
        type: UPDATE__STATUS_REQUEST,
        payload
    }
}
function updateStatusSuccess(payload) {
    return {
        type: UPDATE__STATUS_SUCCESS,
        payload
    }
}
function updateStatusFailure(payload) {
    return {
        type: UPDATE__STATUS_FAILURE,
        payload
    }
}
export {
    getStatusRequest, getStatusSuccess, getStatusFailure,
    addStatusRequest, addStatusSuccess, addStatusFailure,
    deleteStatusRequest, deleteStatusSuccess, deleteStatusFailure,
    updateStatusRequest, updateStatusSuccess, updateStatusFailure
}