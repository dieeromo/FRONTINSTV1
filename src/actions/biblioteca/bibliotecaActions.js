import {
    CATEGORIA_LIBROS_LIST_REQUEST,
    CATEGORIA_LIBROS_LIST_SUCCESS,
    CATEGORIA_LIBROS_LIST_FAIL,

    TIPO_OBRA_LIBROS_LIST_REQUEST,
    TIPO_OBRA_LIBROS_LIST_SUCCESS,
    TIPO_OBRA_LIBROS_LIST_FAIL,

    TIPO_MATERIAL_LIBROS_LIST_REQUEST,
    TIPO_MATERIAL_LIBROS_LIST_SUCCESS,
    TIPO_MATERIAL_LIBROS_LIST_FAIL,

    LIBROS_CREATE_REQUEST,
    LIBROS_CREATE_SUCCESS,
    LIBROS_CREATE_FAIL,

} from '../../constants/biblioteca/bibliotecaConstans'

import { RUTA_SERVIDOR } from '../../ApiRoutes'
import axios from 'axios'




export const createLibroAction = (codigo,titulo,editorial,autor,anio_publicacion,tomo,ubicacion,categoria,tipo_obra,tipo_material,estado_obra,digitador,observacion) => async (dispatch, getState) => {
    
    try {
        dispatch({
            type: LIBROS_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${userInfo.access}`
            }
        }

        const { data } = await axios.post(RUTA_SERVIDOR + `/biblioteca/register/`,
            {
                
                'codigo':codigo,
                'titulo':titulo,
                'editorial':editorial,
                'autor': autor,
                'anio_publicacion':anio_publicacion,
                'tomo':tomo,
                'ubicacion':ubicacion,
    
                'categoria' : categoria,
                'tipo_obra' : tipo_obra,
                'tipo_material' : tipo_material,
                'estado_obra' : estado_obra,
            
                'digitador' : digitador,
                'observacion' : observacion
            }, 
            config
        )


        dispatch({
            type: LIBROS_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        console.log('error de accion')
        dispatch({
            type: LIBROS_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}





export const list_tipo_material_obraAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: TIPO_MATERIAL_LIBROS_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${userInfo.access}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/biblioteca/list/tipo_material/`, config);

        dispatch({
            type: TIPO_MATERIAL_LIBROS_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TIPO_MATERIAL_LIBROS_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}




export const list_tipo_obraAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: TIPO_OBRA_LIBROS_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${userInfo.access}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/biblioteca/list/tipo_obras/`, config);

        dispatch({
            type: TIPO_OBRA_LIBROS_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TIPO_OBRA_LIBROS_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}



export const listCategoriaLibroAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: CATEGORIA_LIBROS_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/biblioteca/list/categoria_obra/`, config);

        dispatch({
            type: CATEGORIA_LIBROS_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CATEGORIA_LIBROS_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}