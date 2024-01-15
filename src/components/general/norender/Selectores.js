import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {list_Coor_carrera_Action,list_Coor_institucionales_Action,list_otras_comisiones_Action } from '../../../actions/generalActions'

export  function SelectorCarrera() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(list_Coor_carrera_Action())
    }, [dispatch])

    const coor_carreraList = useSelector(state => state.coor_carreraList)
    const { error, loading, coor_carrera } = coor_carreraList

    const carrera_lista = coor_carrera.map((item) => ({
        label: item.nombre,
        value: item.id,
    }))


    return ( carrera_lista )
}


export  function SelectorCoordinacionesInstitucionales() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(list_Coor_institucionales_Action())
    }, [dispatch])

    const coor_InstitucionalesList = useSelector(state => state.coor_InstitucionalesList)
    const { error, loading, coor_institucionales } = coor_InstitucionalesList 

    const coordinaciones_lista = coor_institucionales.map((item) => ({
        label: item.nombre,
        value: item.id,
    }))


    return ( coordinaciones_lista )
}



export  function SelectorOtrasComisiones() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(list_otras_comisiones_Action ())
    }, [dispatch])

    const otras_comisionesList = useSelector(state => state.otras_comisionesList)
    const { error, loading,  otras_comisiones} = otras_comisionesList 

    const coordinaciones_lista = otras_comisiones.map((item) => ({
        label: item.nombre,
        value: item.id,
    }))


    return ( coordinaciones_lista )
}