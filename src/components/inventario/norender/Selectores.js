import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
    list_tipo_inventario_action,
    list_estado_inventario_action,
    list_ubicacion_inventario_action
} from '../actions/inventarioActions'


export function SelectorTipoInventario() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(list_tipo_inventario_action())
    }, [dispatch])

    const tipo_inventario_List = useSelector(state => state.tipo_inventario_List)

    let error, loading, tipo_inventario_Lista;

    if (tipo_inventario_List !== undefined) {
        ({ error, loading, tipo_inventario_Lista } = tipo_inventario_List);
    } else {
        console.log('tipo_inventario_List es undefined');
    }

    const tipo_inventario = tipo_inventario_Lista.map((item) => ({
        label: item.tipo,
        value: item.id,
    }))

    return (tipo_inventario)
}



export  function SelectorEstadoInventario() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(list_estado_inventario_action())
    }, [dispatch])

    const estado_inventario_List = useSelector(state => state.estado_inventario_List)
    const { error, loading, estado_inventario_Lista } = estado_inventario_List

    const estado_inventario = estado_inventario_Lista.map((item) => ({
        label: item.estado,
        value: item.id,
    }))


    return ( estado_inventario )
}


export  function SelectorUbicacionInventario() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(list_ubicacion_inventario_action())
    }, [dispatch])

    const ubicacion_inventario_List = useSelector(state => state.ubicacion_inventario_List)
    const { error, loading, ubicacion_inventario_Lista } = ubicacion_inventario_List

    const ubicacion_inventario = ubicacion_inventario_Lista.map((item) => ({
        label: item.ubicacion + ' ' + item.referencia,
        value: item.id,
    }));


    return ( ubicacion_inventario )
}
