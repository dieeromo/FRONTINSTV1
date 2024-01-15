import {
SUBCRITERIOS_FILTER_LIST_REQUEST,
SUBCRITERIOS_FILTER_LIST_SUCCESS ,
SUBCRITERIOS_FILTER_LIST_FAIL ,
} from '../constants/subcriteriosConstants'
    
    //FILTRO POR CRITERIO
    export const subcriteriosFilterListReducer = (state = { subcriterios_filter_lista: [] }, action) => {
        switch (action.type) {
            case SUBCRITERIOS_FILTER_LIST_REQUEST:
                return { loading: true, subcriterios_filter_lista: [] }
    
            case SUBCRITERIOS_FILTER_LIST_SUCCESS:
                return { loading: false, subcriterios_filter_lista: action.payload }
    
            case SUBCRITERIOS_FILTER_LIST_FAIL:
                return { loading: false, error: action.payload }
    
            default:
                return state
        }
    }
    