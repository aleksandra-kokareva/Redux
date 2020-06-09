import {put, call, takeEvery} from 'redux-saga/effects'
import { FETCH_DATA } from '../../../constants'
import { fetchDataSuccess, fetchDataError } from '../../action/sagaActions'


function* workFetchSaga() {
    try{
        const data = yield call(fetchTodo)
        yield put(fetchDataSuccess(data))
    }catch(error) {
        yield put (fetchDataError(error))

    }
}

export function* watchFetchSaga() {
    yield takeEvery(FETCH_DATA, workFetchSaga)
}

async function fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json()
  }