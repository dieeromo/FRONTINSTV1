import {


    EVIDENCIAS_FILTER_LIST_REQUEST,
EVIDENCIAS_FILTER_LIST_SUCCESS ,
EVIDENCIAS_FILTER_LIST_FAIL,



    } from '../constants/evidenciasConstants'
        
        //FILTRO POR SUBCRITERIO
        export const evidenciasFilterListReducer = (state = { evidencias_filter_lista: [] }, action) => {
            switch (action.type) {
                case EVIDENCIAS_FILTER_LIST_REQUEST:
                    return { loading: true, evidencias_filter_lista: [] }
        
                case EVIDENCIAS_FILTER_LIST_SUCCESS:
                    return { loading: false, evidencias_filter_lista: action.payload }
        
                case EVIDENCIAS_FILTER_LIST_FAIL:
                    return { loading: false, error: action.payload }
        
                default:
                    return state
            }
        }
        