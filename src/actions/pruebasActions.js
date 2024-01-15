
import {
PRUEBAS_LIST_REQUEST,
PRUEBAS_LIST_SUCCESS,
PRUEBAS_LIST_FAIL,

PRUEBAS_CREATE_REQUEST,
PRUEBAS_CREATE_SUCCESS,
PRUEBAS_CREATE_FAIL ,

} from '../constants/pruebasConstants'

import axios from 'axios';
import {RUTA_SERVIDOR} from '../ApiRoutes'
export const listPruebasAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PRUEBAS_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/pruebas/list/`, config);

        dispatch({
            type: PRUEBAS_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRUEBAS_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}



export const pruebasCreateAction = (nombre, archivo) => async (dispatch, getState) => {
   
    try {
        dispatch({
            type: PRUEBAS_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(RUTA_SERVIDOR + `/pruebas/register/`,
            {
                'nombre': nombre,
                'archivo':archivo

            },
            config
        )


        dispatch({
            type: PRUEBAS_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        console.log('error de accion')
        dispatch({
            type: PRUEBAS_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}