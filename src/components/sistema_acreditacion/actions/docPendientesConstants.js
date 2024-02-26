import {
    

    DOC_ACREDITACION_DOCENTE_LIST_REQUEST,
     DOC_ACREDITACION_DOCENTE_LIST_SUCCESS,
     DOC_ACREDITACION_DOCENTE_LIST_FAIL,
    
    
    } from '../constants/docPendientesConstants'



    import {RUTA_SERVIDOR} from '../../../ApiRoutes'
    import axios from 'axios'
    
    
    // FILTRO POR DOCENTE
    export const listDocumentosAcreditacionDocenteAction  = (id) => async (dispatch, getState) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 200));
            dispatch({ type: DOC_ACREDITACION_DOCENTE_LIST_REQUEST  })
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
            const { data } = await axios.get(RUTA_SERVIDOR + `/documentos_acreditacion/list/filter/docente/${id}`, config);
    
            dispatch({
                type: DOC_ACREDITACION_DOCENTE_LIST_SUCCESS,
                payload: data
            })
    
        } catch (error) {
            dispatch({
                type: DOC_ACREDITACION_DOCENTE_LIST_FAIL,
                payload: error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
            })
        }
    }

    // export const listDocumentosAcreditacionDocenteAction = (id) => async (dispatch, getState) => {
    //     try {
    //         dispatch({ type: DOC_ACREDITACION_DOCENTE_LIST_REQUEST })
    
    //         const {
    //             userLogin: { userInfo },
    //         } = getState()
    
    //         const config = {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Authorization: `JWT ${userInfo.access}`
    //             }
    //         }
    
    //         const { data } = await axios.get(RUTA_SERVIDOR + `/documentos_acreditacion/list/all/`, config);
    
    //         dispatch({
    //             type: DOC_ACREDITACION_DOCENTE_LIST_SUCCESS,
    //             payload: data
    //         })
    
    //     } catch (error) {
    //         dispatch({
    //             type: DOC_ACREDITACION_DOCENTE_LIST_FAIL,
    //             payload: error.response && error.response.data.detail
    //                 ? error.response.data.detail
    //                 : error.message,
    //         })
    
    //     }
    // }
    