import {
DOC_ACREDITACION_CREATE_REQUEST,
 DOC_ACREDITACION_CREATE_SUCCESS,
 DOC_ACREDITACION_CREATE_FAIL,



 DOC_ACREDITACION_FILTER_LIST_REQUEST,
 DOC_ACREDITACION_FILTER_LIST_SUCCESS,
 DOC_ACREDITACION_FILTER_LIST_FAIL,

 DOC_ACREDITACION_LIST_REQUEST,
 DOC_ACREDITACION_LIST_SUCCESS,
 DOC_ACREDITACION_LIST_FAIL,
 

} from '../constants/documentosAcreditacion' 
 import {RUTA_SERVIDOR} from '../ApiRoutes'
import axios from 'axios'


// FILTRO POR EVIDENCIA
export const listDocumentosAcreditacionAllAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: DOC_ACREDITACION_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/documentos_acreditacion/list/all/`, config);

        dispatch({
            type: DOC_ACREDITACION_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: DOC_ACREDITACION_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}







export const createDocumentoAcreditacionAction = (id_evidencia,numeracion,documento,observacion,id_responsable,fecha_limite) => async (dispatch, getState) => {
    console.log("action")
    try {
        dispatch({
            type: DOC_ACREDITACION_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(RUTA_SERVIDOR + `/documentos_acreditacion/register/${id_evidencia}/${id_responsable}/`,
            {
                
                'numeracion':numeracion,
                'documento':documento,

                'observacion': observacion,
        
                'fecha_limite':fecha_limite
            }, 
            config
        )


        dispatch({
            type: DOC_ACREDITACION_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        console.log('error de accion')
        dispatch({
            type: DOC_ACREDITACION_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


// FILTRO POR EVIDENCIA
export const listDocumentosAcreditacionFilterAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: DOC_ACREDITACION_FILTER_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/documentos_acreditacion/list/filter/${id}/`, config);

        dispatch({
            type: DOC_ACREDITACION_FILTER_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: DOC_ACREDITACION_FILTER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}