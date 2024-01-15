import {
INDICADORES_FILTER_LIST_REQUEST,
INDICADORES_FILTER_LIST_SUCCESS,
INDICADORES_FILTER_LIST_FAIL,
} from '../constants/indicadoresConstants'

    //FILTRO POR SUBCRITERIO
    export const indicadoresFilterListReducer = (state = { indicadores_filter_lista: [] }, action) => {
        switch (action.type) {
            case INDICADORES_FILTER_LIST_REQUEST:
                return { loading: true, indicadores_filter_lista: [] }
    
            case INDICADORES_FILTER_LIST_SUCCESS:
                return { loading: false, indicadores_filter_lista: action.payload }
    
            case INDICADORES_FILTER_LIST_FAIL:
                return { loading: false, error: action.payload }
    
            default:
                return state
        }
    }
    