import { all } from 'redux-saga/effects'
import { watchFetchSaga } from './FetcSaga/fetchSaga'


export function* rootSaga() {
    yield all([watchFetchSaga()])
}