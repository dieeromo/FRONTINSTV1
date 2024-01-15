import {
    EVIDENCIAS_FILTER_LIST_REQUEST,
EVIDENCIAS_FILTER_LIST_SUCCESS ,
EVIDENCIAS_FILTER_LIST_FAIL,

    } from '../constants/evidenciasConstants'

    import {RUTA_SERVIDOR} from '../ApiRoutes'
    import axios from 'axios'


    // FILTRO POR SUBCRITERIO
    export const listEvidenciaFilterAction = (id) => async (dispatch, getState) => {
        try {
            dispatch({ type: EVIDENCIAS_FILTER_LIST_REQUEST })
    
            const {
                userLogin: { userInfo },
            } = getState()
    
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
    
            const { data } = await axios.get(RUTA_SERVIDOR + `/evidencias/list_por_subcriterio/${id}`, config);
    
            dispatch({
                type: EVIDENCIAS_FILTER_LIST_SUCCESS,
                payload: data
            })
    
        } catch (error) {
            dispatch({
                type: EVIDENCIAS_FILTER_LIST_FAIL,
                payload: error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
            })
    
        }
    }