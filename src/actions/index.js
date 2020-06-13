import axios from 'axios'

import { FETCH_USER } from './types'
export const fetchUser = () => async dispatch => {
       
    const res = axios.get('/api/req_user')
       
      await dispatch({ type: FETCH_USER, payload: (await res).data })
    }
    
