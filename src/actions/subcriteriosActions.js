import {RUTA_SERVIDOR} from '../ApiRoutes'
import axios from 'axios'

import {
    SUBCRITERIOS_FILTER_LIST_REQUEST,
    SUBCRITERIOS_FILTER_LIST_SUCCESS ,
    SUBCRITERIOS_FILTER_LIST_FAIL ,
    } from '../constants/subcriteriosConstants'
// FILTRO POR CRITERIO
    export const listSubCriteriosFilterAction = (id) => async (dispatch, getState) => {
        try {
            dispatch({ type: SUBCRITERIOS_FILTER_LIST_REQUEST })
    
            const {
                userLogin: { userInfo },
            } = getState()
    
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
    
            const { data } = await axios.get(RUTA_SERVIDOR + `/subcriterios/list_por_criterio/${id}`, config);
    
            dispatch({
                type: SUBCRITERIOS_FILTER_LIST_SUCCESS,
                payload: data
            })
    
        } catch (error) {
            dispatch({
                type: SUBCRITERIOS_FILTER_LIST_FAIL,
                payload: error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
            })
    
        }
    }