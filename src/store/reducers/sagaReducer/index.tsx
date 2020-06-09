import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './../../../constants/index';

import { FetchActions } from '../../action/sagaActions'
import { Reducer } from 'redux';

interface IJSONPlaceholderResp {
    id: number;
    title: string;
    body: string;
    userId: number;
  }


export interface SagaState {
    data: IJSONPlaceholderResp[]
    loading: boolean
    error: null| Error
}

const initialState: SagaState = {
    data: [],
    loading: false,
    error: null
}

export const sagaReducer: Reducer<SagaState> = (state = initialState, action: FetchActions) => {
    switch(action.type){
        case FETCH_DATA:
            return {...state, loading: true, error: null}
        case FETCH_DATA_SUCCESS:
            return {...state, loading: false, data: action.payload}
        case FETCH_DATA_ERROR:
            return {...state, loading: false, error: action.payload}  
        default:
            return state;             
    } 
}


