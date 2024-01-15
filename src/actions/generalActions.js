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
import {RUTA_SERVIDOR} from '../ApiRoutes'
import axios from 'axios'


export const list_Coor_carrera_Action = () => async (dispatch, getState) => {
    try {
        dispatch({ type: COOR_CARRERA_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/general/coordinaciones_carrera/list/`, config);

        dispatch({
            type: COOR_CARRERA_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: COOR_CARRERA_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}


export const list_Coor_institucionales_Action = () => async (dispatch, getState) => {
    try {
        dispatch({ type: COOR_INSTITUCIONALES_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/general/coordinaciones_institucionales/list/`, config);

        dispatch({
            type: COOR_INSTITUCIONALES_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: COOR_INSTITUCIONALES_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}


export const list_otras_comisiones_Action = () => async (dispatch, getState) => {
    try {
        dispatch({ type: OTRAS_COMISIONES_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/general/otras_comisiones/list/`, config);

        dispatch({
            type: OTRAS_COMISIONES_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: OTRAS_COMISIONES_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}