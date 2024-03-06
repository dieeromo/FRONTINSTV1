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

import { RUTA_SERVIDOR } from '../../../ApiRoutes'
import axios from 'axios'

export const createInventarioAction = (cod_unico, cod_senescyt, cod_instituto, tipo, descripcion, materiales, marca, modelo, serie, color, estado, ubicacion, asignado, digitador, observacion) => async (dispatch, getState) => {

    try {
        dispatch({
            type: INVENTARIO_CREATE_REQUEST
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

        const { data } = await axios.post(RUTA_SERVIDOR + `/inventario/register_inventario/`,
            {

                'cod_unico': cod_unico,
                'cod_senescyt': cod_senescyt,
                'cod_instituto': cod_instituto,
                'tipo': tipo,
                'descripcion': descripcion,
                'materiales': materiales,
                'marca': marca,
                'modelo': modelo,

                'serie': serie,
                'color': color,
                'estado': estado,
                'ubicacion': ubicacion,
                'asignado': asignado,
                'digitador': digitador,

                'observacion': observacion
            },
            config
        )


        dispatch({
            type: INVENTARIO_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        console.log('error de accion')
        dispatch({
            type: INVENTARIO_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listInventarioAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: INVENTARIO_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${userInfo.access}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/inventario/list_inventario/`, config);

        dispatch({
            type: INVENTARIO_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: INVENTARIO_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const list_tipo_inventario_action = () => async (dispatch, getState) => {
    try {
        dispatch({ type: TIPO_INVENTARIO_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${userInfo.access}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/inventario/list_tipo/`, config);

        dispatch({
            type: TIPO_INVENTARIO_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TIPO_INVENTARIO_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}




export const list_estado_inventario_action = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ESTADO_INVENTARIO_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${userInfo.access}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/inventario/list_estado/`, config);

        dispatch({
            type: ESTADO_INVENTARIO_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ESTADO_INVENTARIO_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}



export const list_ubicacion_inventario_action = () => async (dispatch, getState) => {
    try {
        dispatch({ type: UBICACION_INVENTARIO_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/inventario/list_ubicacion/`, config);

        dispatch({
            type: ESTADO_INVENTARIO_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UBICACION_INVENTARIO_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

