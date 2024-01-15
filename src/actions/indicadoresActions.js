import {RUTA_SERVIDOR} from '../ApiRoutes'
import axios from 'axios'

import {
    INDICADORES_FILTER_LIST_REQUEST,
    INDICADORES_FILTER_LIST_SUCCESS,
    INDICADORES_FILTER_LIST_FAIL,
    } from '../constants/indicadoresConstants'

    // FILTRO POR CRITERIO
    export const listIndicadoresFilterAction = (id) => async (dispatch, getState) => {
        try {
            dispatch({ type: INDICADORES_FILTER_LIST_REQUEST })
    
            const {
                userLogin: { userInfo },
            } = getState()
    
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
    
            const { data } = await axios.get(RUTA_SERVIDOR + `/indicadores/list_por_subcriterio/${id}`, config);
    
            dispatch({
                type: INDICADORES_FILTER_LIST_SUCCESS,
                payload: data
            })
    
        } catch (error) {
            dispatch({
                type: INDICADORES_FILTER_LIST_FAIL,
                payload: error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
            })
    
        }
    }