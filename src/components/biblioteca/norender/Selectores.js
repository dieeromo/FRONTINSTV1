import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
    listCategoriaLibroAction,
    list_tipo_obraAction,
    list_tipo_material_obraAction
} from '../../../actions/biblioteca/bibliotecaActions'


export  function SelectorTipoMaterial() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(list_tipo_material_obraAction())
    }, [dispatch])

    const tipoMaterial_Libros_List = useSelector(state => state.tipoMaterial_Libros_List)
    const { error, loading, tipo_material_Libros_Lista } = tipoMaterial_Libros_List 

    const tipo_material = tipo_material_Libros_Lista.map((item) => ({
        label: item.material,
        value: item.id,
    }))


    return ( tipo_material )
}




export  function SelectorTipoObra() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(list_tipo_obraAction())
    }, [dispatch])

    const tipoObraLibros_List = useSelector(state => state.tipoObraLibros_List)
    const { error, loading, tipo_obraLibros_Lista } = tipoObraLibros_List

    const tipo_lista = tipo_obraLibros_Lista .map((item) => ({
        label: item.tipo,
        value: item.id,
    }))


    return ( tipo_lista )
}


export  function SelectorCategoriaLibro() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listCategoriaLibroAction())
    }, [dispatch])

    const categoriaLibros_List = useSelector(state => state.categoriaLibros_List)
    const { error, loading, categoriaLibros_Lista } = categoriaLibros_List

    const categoria_lista = categoriaLibros_Lista.map((item) => ({
        label: item.categoria,
        value: item.id,
    }))


    return ( categoria_lista )
}
