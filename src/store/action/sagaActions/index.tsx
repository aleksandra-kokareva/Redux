import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './../../../constants/index';

interface FetchDataAction {
    type: typeof FETCH_DATA
  }
  
  export const fetchData = (): FetchDataAction => ({
    type: FETCH_DATA
  })
  
  
  interface FetchDataActionSuccess {
    type: typeof FETCH_DATA_SUCCESS
    payload: any
  }
  
  export const fetchDataSuccess = (payload: any): FetchDataActionSuccess  => ({
    type: FETCH_DATA_SUCCESS,
    payload
  })
  
  interface FetchDataActionError {
    type: typeof FETCH_DATA_ERROR
    payload: Error
  }
  
  export const fetchDataError = (error: Error): FetchDataActionError => ({
    type: FETCH_DATA_ERROR,
    payload: error
  })

export type FetchActions = FetchDataActionSuccess | FetchDataAction | FetchDataActionError  

// interface FetchDataAction {
//   type: typeof FETCH_DATA
// }

// export const fetchData = (): FetchDataAction => ({
//   type: FETCH_DATA
// })


// interface FetchDataActionSuccess {
//   type: typeof FETCH_DATA_SUCCESS
//   payload: any
// }

// export const fetchDataSuccess = (payload: any): FetchDataActionSuccess  => ({
//   type: FETCH_DATA_SUCCESS,
//   payload
// })

// interface FetchDataActionError {
//   type: typeof FETCH_DATA_ERROR
//   payload: Error
// }

// export const fetchDataError = (error: Error): FetchDataActionError => ({
//   type: FETCH_DATA_ERROR,
//   payload: error
// })

// export type FetchActions = FetchDataActionSuccess | FetchDataAction | FetchDataActionError  