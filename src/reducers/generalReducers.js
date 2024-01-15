import {

    COOR_CARRERA_LIST_REQUEST,
    COOR_CARRERA_LIST_SUCCESS,
    COOR_CARRERA_LIST_FAIL,


    COOR_INSTITUCIONALES_LIST_REQUEST,
    COOR_INSTITUCIONALES_LIST_SUCCESS,
    COOR_INSTITUCIONALES_LIST_FAIL,

    OTRAS_COMISIONES_LIST_REQUEST,
    OTRAS_COMISIONES_LIST_SUCCESS,
    OTRAS_COMISIONES_LIST_FAIL,
} from '../constants/generalConstants'



export const coor_carreraListReducer = (state = { coor_carrera: [] }, action) => {
    switch (action.type) {
        case COOR_CARRERA_LIST_REQUEST:
            return { loading: true, coor_carrera: [] }

        case COOR_CARRERA_LIST_SUCCESS:
            return { loading: false, coor_carrera: action.payload }

        case COOR_CARRERA_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const coor_InstitucionalesListReducer = (state = { coor_institucionales: [] }, action) => {
    switch (action.type) {
        case COOR_INSTITUCIONALES_LIST_REQUEST:
            return { loading: true, coor_institucionales: [] }

        case COOR_INSTITUCIONALES_LIST_SUCCESS:
            return { loading: false, coor_institucionales: action.payload }

        case COOR_INSTITUCIONALES_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const otras_comisionesListReducer = (state = { otras_comisiones: [] }, action) => {
    switch (action.type) {
        case OTRAS_COMISIONES_LIST_REQUEST:
            return { loading: true, otras_comisiones: [] }

        case OTRAS_COMISIONES_LIST_SUCCESS:
            return { loading: false, otras_comisiones: action.payload }

        case OTRAS_COMISIONES_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
