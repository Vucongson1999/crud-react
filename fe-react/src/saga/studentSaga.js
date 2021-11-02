import { put, select, takeEvery } from "@redux-saga/core/effects";
import* as actions from '../action/studentAction'
import* as callAPI from '../fetchAPI/studentAPI'
import { ADD_REQUEST, DELETE_REQUEST, GET_REQUEST, PAGINATION_REQUEST, SEARCH_REQUEST, UPDATE_REQUEST } from '../constant'


function* handleGet () {
    try {
        const res = yield callAPI.getStudent()
        yield put(actions.getSuccess(res))
    } catch (error) {
        yield put(actions.getFailure(error))
    }
}

function* handleAdd(action) {
    try {
        const resAdd = yield callAPI.addStudent(action.payload)
        yield put(actions.addSuccess(resAdd))
        const reducer = yield select((state) => {
            return {
                listStudents: state.student.listStudents,
                activePage: state.student.activePage,
                totalPage: state.student.totalPage,
                textSearch: state.student.textSearch,
            }
        })
         
        if(reducer.textSearch !==""){
            const searchApi = yield callAPI.searchStudent({textSearch: reducer.textSearch})
            const nameAdd = action.payload.name
            if(nameAdd.includes(reducer.textSearch) === true){
                yield put(actions.searchRequest({
                    activePage: searchApi.totalPageSearch, //TRA VE TRANG CUOI
                    textSearch: reducer.textSearch
                }))
                
            } 
            
            else {            
                const addItemid = resAdd.id //ID CUA NAME VUA ADD
                const getOnly = yield callAPI.getOne({
                    id : addItemid, // gắn id bên node gửi sang = id nameadd 
                })
                yield put(actions.searchSuccess({
                        activePage: 1,
                        totalPage: 1,
                        listStudents: getOnly.arr
                    }))
                
            }
            
        } else {
            const pagi = yield callAPI.getPaginateStudent(action.payload)
            yield put(actions.paginationRequest(pagi.totalPage))
        }
    } catch (error) {
        yield put(actions.addFailure(error))
    }
}

function* handleDelete(action) {
    try {
        const resDelete = yield callAPI.deleteStudent(action.payload)
        yield put(actions.deleteSuccess(resDelete))
        const reducer = yield select((state) => {
            return {
                listStudents: state.student.listStudents,
                activePage: state.student.activePage,
                totalPage: state.student.totalPage,
                textSearch: state.student.textSearch,
            }
        })

        const searchAPI = yield callAPI.searchStudent({textSearch: reducer.textSearch})

        if(reducer.textSearch !=="") {
            if(reducer.listStudents.length > 1) {
                yield put(actions.searchRequest ({
                    activePage: reducer.activePage,
                    textSearch: reducer.textSearch
                }))
            } else {
                if(reducer.listStudents.length === 1 && searchAPI.totalRecord === 0 ){
                    yield put(actions.searchSuccess({
                        activePage: 1,
                        totalPage: 1,
                        listStudents: searchAPI.searchPagi,
                        textSearch: reducer.textSearch
                    }))
                } else {
                    yield put(actions.searchRequest({
                        activePage: reducer.activePage - 1,
                        textSearch: reducer.textSearch
                    }))
                }
            }
        } else {
            if(reducer.listStudents.length > 1) {
                yield put(actions.paginationRequest(
                    reducer.activePage
                ))
            } else {
                const paginationAPI = yield callAPI.getPaginateStudent({activePage: reducer.activePage})
                if (reducer.activePage === 1 && paginationAPI.totalRecord === 0) {
                    yield put(actions.paginationSuccess({
                        activePage: 1,
                        totalPage: 1,
                        listStudents: paginationAPI.pagination
                    }))
                } else {
                    yield put(actions.paginationRequest(reducer.activePage - 1))
                }
            }
        }
    } catch (error) {
        yield put(actions.deleteFailure(error))
    }
}
function* handleUpdate(action) {
    try {
        const resUpdate = yield callAPI.updateStudent(action.payload)
        yield put(actions.updateSuccess(resUpdate))
        const reducer = yield select((state) => {
            return {
                listStudents: state.student.listStudents,
                activePage: state.student.activePage,
                totalPage: state.student.totalPage,
                textSearch: state.student.textSearch,
            }
        })
        if(reducer.textSearch !=="") {
            const nameUpdate = action.payload.name

            if(nameUpdate.includes(reducer.textSearch) === true) {
                yield put(actions.searchRequest({
                    activePage: reducer.activePage,
                    textSearch: reducer.textSearch
                }))
            } else {
                const addItemid = resUpdate.id
                const getOnly = yield callAPI.getOne({
                    id : addItemid,
                    
                })
                yield put(actions.searchSuccess({
                        activePage: 1,
                        totalPage: 1,
                        listStudents: getOnly.arr
                    }))
            }
        } else {
            yield put(actions.paginationRequest(reducer.activePage))
        }
    } catch (error) {
        yield put(actions.updateFailure(error))
    }
}

function* handlePagination(action) {
    try {
        const listStudents = yield callAPI.getPaginateStudent(action.payload)
        if(action.payload === 1 && listStudents.totalRecord === 0) {
            yield put(actions.paginationSuccess({
                activePage: 1,
                totalPage: 1,
                listStudents: listStudents.pagination
            }))
        }else {
            yield put(actions.paginationSuccess({
                activePage: action.payload,
                listStudents: listStudents.pagination,
                totalPage: listStudents.totalPage
            }))
        }
    } catch (error) {
        yield put(actions.paginationFailure(error))
    }
}

function* handleSearch(action) {
    try {
        const searchS = yield callAPI.searchStudent(action.payload)
        if(action.payload.activePage === 1 && searchS.totalRecord === 0) {
            yield put(actions.searchSuccess({
                activePage: 1,
                totalPage: 1,
                listStudents: searchS.searchPagi
            }))
        } else {
            yield put(actions.searchSuccess({
                activePage: action.payload.activePage,
                textSearch: action.payload.textSearch,
                totalPage: searchS.totalPageSearch,
                listStudents: searchS.searchPagi
            }))
        }
    } catch (error) {
        yield put(actions.searchFailure(error))
    }
}

const studentSaga = [
    takeEvery(GET_REQUEST, handleGet),
    takeEvery(ADD_REQUEST, handleAdd),
    takeEvery(DELETE_REQUEST, handleDelete),
    takeEvery(UPDATE_REQUEST, handleUpdate),
    takeEvery(PAGINATION_REQUEST, handlePagination),
    takeEvery(SEARCH_REQUEST, handleSearch)
]
export default studentSaga