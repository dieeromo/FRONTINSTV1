import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_EDIT_REQUEST,
    USER_EDIT_SUCCESS,
    USER_EDIT_FAIL,
    USER_EDIT_RESET,

    USER_SOLO_REQUEST,
    USER_SOLO_SUCCESS,
    USER_SOLO_FAIL,
    USER_SOLO_RESET,

    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,

} from '../constants/userConstants'
export const userListreducer = (state = { lista_usuarios: [] }, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return { loading: true, lista_usuarios: [] }

        case USER_LIST_SUCCESS:
            return { loading: false, lista_usuarios: action.payload }

        case USER_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }

        case USER_LOGIN_SUCCESS:
            return { loading: false,estado_login:false, userInfo: action.payload }

        case USER_LOGIN_FAIL:
            return { loading: false, estado_login:false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}




export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }

        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

