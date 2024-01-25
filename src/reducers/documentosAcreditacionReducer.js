
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
//FILTRO POR EVIDENCIA
export const documentosAcreditacionFilterListReducer = (state = { doc_acreditacion_filter: [] }, action) => {
    switch (action.type) {
        case DOC_ACREDITACION_FILTER_LIST_REQUEST:
            return { loading: true, doc_acreditacion_filter: [] }

        case DOC_ACREDITACION_FILTER_LIST_SUCCESS:
            return { loading: false, doc_acreditacion_filter: action.payload }

        case DOC_ACREDITACION_FILTER_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const documentosAcreditacionAllListReducer = (state = { doc_acreditacion_all: [] }, action) => {
    switch (action.type) {
        case DOC_ACREDITACION_LIST_REQUEST:
            return { loading: true, doc_acreditacion_all: [] }

        case DOC_ACREDITACION_LIST_SUCCESS:
            return { loading: false, doc_acreditacion_all: action.payload }

        case DOC_ACREDITACION_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}




export const doc_acreditacionCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case DOC_ACREDITACION_CREATE_REQUEST:
            return { loading: true }

        case DOC_ACREDITACION_CREATE_SUCCESS:
            return { loading: false, success: true, docAcreditacion: action.payload }

        case DOC_ACREDITACION_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}




