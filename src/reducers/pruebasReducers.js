import {
PRUEBAS_LIST_REQUEST,
PRUEBAS_LIST_SUCCESS,
PRUEBAS_LIST_FAIL,

PRUEBAS_CREATE_REQUEST,
PRUEBAS_CREATE_SUCCESS,
PRUEBAS_CREATE_FAIL ,

} from '../constants/pruebasConstants'






export const pruebasListReducer = (state = { pruebas: [] }, action) => {
    switch (action.type) {
        case PRUEBAS_LIST_REQUEST:
            return { loading: true, pruebas: [] }

        case PRUEBAS_LIST_SUCCESS:
            return { loading: false, pruebas: action.payload }

        case PRUEBAS_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const pruebasCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRUEBAS_CREATE_REQUEST:
            return { loading: true }

        case PRUEBAS_CREATE_SUCCESS:
            return { loading: false, success: true, blog: action.payload }

        case PRUEBAS_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}