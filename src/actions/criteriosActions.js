import {
    CRITERIOS_LIST_REQUEST ,
    CRITERIOS_LIST_SUCCESS ,
    CRITERIOS_LIST_FAIL ,

    PROCESO_EVALUACION_LIST_REQUEST,
PROCESO_EVALUACION_LIST_SUCCESS ,
PROCESO_EVALUACION_LIST_FAIL,

    } from '../constants/criteriosConstants'


    import {RUTA_SERVIDOR} from '../ApiRoutes'
    import axios from 'axios'

    export const listProcesosEvaluacionAction = () => async (dispatch, getState) => {
        try {
            dispatch({ type: PROCESO_EVALUACION_LIST_REQUEST })
    
            const {
             
                userLogin: { userInfo },
            } = getState()
    
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    //Authorization: `Bearer ${userInfo.access}`
                    Authorization: `JWT ${userInfo.access}`
                }
            }
    
            const { data } = await axios.get(RUTA_SERVIDOR + `/criterios/list/`, config);
    
            dispatch({
                type: PROCESO_EVALUACION_LIST_SUCCESS,
                payload: data
            })
    
        } catch (error) {
            dispatch({
                type: PROCESO_EVALUACION_LIST_FAIL,
                payload: error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
            })
    
        }
    }

export const listCriteriosAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: CRITERIOS_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                //'Content-Type': 'application/json',
                //Authorization: `Bearer ${userInfo.token}`

                'Content-Type': 'application/json',
                //Authorization: `Bearer ${userInfo.access}`
                Authorization: `JWT ${userInfo.access}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/criterios/list/`, config);

        dispatch({
            type: CRITERIOS_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CRITERIOS_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}
//comentario inventario2