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

    USER_DATOS_REQUEST,
    USER_DATOS_SUCCESS,
    USER_DATOS_FAIL,
    USER_DATOS_RESET,

    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,

} from '../constants/userConstants'

export const userDatosReducer = (state = {userInfo_datos:[]}, action) => {
    switch (action.type) {
        case USER_DATOS_REQUEST:
            console.log("request")
            return { loading: true,userInfo_datos:[]}
            

        case USER_DATOS_SUCCESS:
            console.log("succes")
            return { loading: false, userInfo_datos: action.payload }

        case USER_DATOS_FAIL:
            console.log("fail")
            return { loading: false,  error: action.payload }

        case USER_DATOS_RESET:
            console.log("reset")
            return {}

        default:
            console.log("default")
            return state
    }
}


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

