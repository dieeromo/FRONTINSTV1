import {
    TIPO_INVENTARIO_LIST_REQUEST,
    TIPO_INVENTARIO_LIST_SUCCESS,
    TIPO_INVENTARIO_LIST_FAIL,

    ESTADO_INVENTARIO_LIST_REQUEST,
    ESTADO_INVENTARIO_LIST_SUCCESS,
    ESTADO_INVENTARIO_LIST_FAIL,

    UBICACION_INVENTARIO_LIST_REQUEST,
    UBICACION_INVENTARIO_LIST_SUCCESS,
    UBICACION_INVENTARIO_LIST_FAIL,

    INVENTARIO_CREATE_REQUEST,
    INVENTARIO_CREATE_SUCCESS,
    INVENTARIO_CREATE_FAIL,

    INVENTARIO_LIST_REQUEST,
    INVENTARIO_LIST_SUCCESS,
    INVENTARIO_LIST_FAIL,

} from '../constants/inventarioConstans'

export const inventariosCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case INVENTARIO_CREATE_REQUEST:
            return { loading: true }

        case INVENTARIO_CREATE_SUCCESS:
            return { loading: false, success: true, inventario_creado: action.payload }

        case INVENTARIO_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const inventarioListReducer = (state = { inventarioLista: [] }, action) => {
    switch (action.type) {
        case INVENTARIO_LIST_REQUEST:
            return { loading: true, inventarioLista: [] }

        case INVENTARIO_LIST_SUCCESS:
            return { loading: false, inventarioLista: action.payload }

        case INVENTARIO_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const tipo_inventario_ListReducer = (state = { tipo_inventario_Lista: [] }, action) => {
    switch (action.type) {
        case TIPO_INVENTARIO_LIST_REQUEST:
            return { loading: true, tipo_inventario_Lista: [] }

        case TIPO_INVENTARIO_LIST_SUCCESS:
            return { loading: false, tipo_inventario_Lista: action.payload }

        case TIPO_INVENTARIO_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const estado_inventario_ListReducer = (state = { estado_inventario_Lista: [] }, action) => {
    switch (action.type) {
        case ESTADO_INVENTARIO_LIST_REQUEST:
            return { loading: true, estado_inventario_Lista: [] }

        case ESTADO_INVENTARIO_LIST_SUCCESS:
            return { loading: false, estado_inventario_Lista: action.payload }

        case ESTADO_INVENTARIO_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const ubicacion_inventario_ListReducer = (state = { ubicacion_inventario_Lista: [] }, action) => {
    switch (action.type) {
        case UBICACION_INVENTARIO_LIST_REQUEST:
            return { loading: true, ubicacion_inventario_Lista: [] }

        case UBICACION_INVENTARIO_LIST_SUCCESS:
            return { loading: false, ubicacion_inventario_Lista: action.payload }

        case UBICACION_INVENTARIO_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
