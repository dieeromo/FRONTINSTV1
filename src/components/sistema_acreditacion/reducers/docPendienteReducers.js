import {
    

DOC_ACREDITACION_DOCENTE_LIST_REQUEST,
 DOC_ACREDITACION_DOCENTE_LIST_SUCCESS,
 DOC_ACREDITACION_DOCENTE_LIST_FAIL,


} from '../constants/docPendientesConstants'


export const documentosAcreditacionDocenteListReducer = (state = { doc_acreditacion_docente: [] }, action) => {
    switch (action.type) {
        case DOC_ACREDITACION_DOCENTE_LIST_REQUEST:
            return { loading: true, doc_acreditacion_docente: [] }

        case DOC_ACREDITACION_DOCENTE_LIST_SUCCESS:
            return { loading: false, doc_acreditacion_docente: action.payload }

        case DOC_ACREDITACION_DOCENTE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}