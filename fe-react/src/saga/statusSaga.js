import { put, takeEvery } from "@redux-saga/core/effects";
import * as actions from '../action/statusAction'
import * as callAPI from '../fetchAPI/statusAPI'
import { ADD__STATUS_REQUEST, DELETE__STATUS_REQUEST, GET__STATUS_REQUEST, UPDATE__STATUS_REQUEST } from '../constant'


function* handleGet() {
    try {
        const res = yield callAPI.getStatus()
        yield put(actions.getStatusSuccess(res))
    } catch (error) {
        yield put(actions.getStatusFailure(error))
    }
}
function* handleAdd(action) {
    try {
        yield callAPI.addStatus(action.payload)
        yield put(actions.addStatusSuccess())
        yield put(actions.getStatusRequest())
    }
    catch (error) {
        yield put(actions.addStatusFailure(error))
    }
}
function* handleDelete(action) {
    try {
        yield callAPI.deleteStatus(action.payload)
        yield put(actions.deleteStatusSuccess())
        yield put(actions.getStatusRequest())
    } catch (error) {
        yield put(actions.deleteStatusFailure(error))
    }
}


function* handleUpdate(action) {
    try {
        yield callAPI.updateStatus(action.payload)
        yield put(actions.updateStatusSuccess())
        yield put(actions.getStatusRequest())
    } catch (error) {
        yield put(actions.updateStatusFailure(error))
    }
}
const statusSaga = [
    takeEvery(GET__STATUS_REQUEST, handleGet),
    takeEvery(ADD__STATUS_REQUEST, handleAdd),
    takeEvery(DELETE__STATUS_REQUEST, handleDelete),
    takeEvery(UPDATE__STATUS_REQUEST, handleUpdate),
]
export default statusSaga