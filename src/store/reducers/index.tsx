import { combineReducers } from "redux";
import {itemReducer} from './itemReducer'
import {sagaReducer} from '../reducers/sagaReducer'

export const rootReducer = combineReducers({itemReducer, sagaReducer})
