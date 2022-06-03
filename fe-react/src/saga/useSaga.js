import { put, takeEvery } from "@redux-saga/core/effects";
import * as actions from '../action/useAction'
import * as callAPI from '../fetchAPI/studentAPI'
import { ADD_REQUEST, DELETE_REQUEST, GET_REQUEST, UPDATE_REQUEST } from '../constant'


function* handleGet() {
    try {
        const res = yield callAPI.getStudent()
        yield put(actions.getSuccess(res))
    } catch (error) {
        yield put(actions.getFailure(error))
    }
}
function* handleAdd(action) {
    try {
        yield callAPI.addStudent(action.payload)
        yield put(actions.addSuccess())
        yield put(actions.getRequest())
    }
    catch (error) {
        yield put(actions.addFailure(error))
    }
}
function* handleDelete(action) {
    try {
        yield callAPI.deleteStudent(action.payload)
        yield put(actions.deleteSuccess())
        yield put(actions.getRequest())
    } catch (error) {
        yield put(actions.deleteFailure(error))
    }
}


function* handleUpdate(action) {
    try {
        yield callAPI.updateStudent(action.payload)
        yield put(actions.updateSuccess())
        yield put(actions.getRequest())
    } catch (error) {
        yield put(actions.updateFailure(error))
    }
}
const useSaga = [
    takeEvery(GET_REQUEST, handleGet),
    takeEvery(ADD_REQUEST, handleAdd),
    takeEvery(DELETE_REQUEST, handleDelete),
    takeEvery(UPDATE_REQUEST, handleUpdate),
]
export default useSaga