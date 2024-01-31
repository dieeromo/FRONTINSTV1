import {
 
    CATEGORIA_LIBROS_LIST_REQUEST,
CATEGORIA_LIBROS_LIST_SUCCESS ,
CATEGORIA_LIBROS_LIST_FAIL,


TIPO_OBRA_LIBROS_LIST_REQUEST ,
TIPO_OBRA_LIBROS_LIST_SUCCESS ,
TIPO_OBRA_LIBROS_LIST_FAIL,

TIPO_MATERIAL_LIBROS_LIST_REQUEST,
TIPO_MATERIAL_LIBROS_LIST_SUCCESS,
TIPO_MATERIAL_LIBROS_LIST_FAIL,

LIBROS_CREATE_REQUEST,
LIBROS_CREATE_SUCCESS ,
LIBROS_CREATE_FAIL ,



} from '../../constants/biblioteca/bibliotecaConstans'



export const obrasCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case LIBROS_CREATE_REQUEST:
            return { loading: true }

        case LIBROS_CREATE_SUCCESS:
            return { loading: false, success: true, libro_creado: action.payload }

        case LIBROS_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const tipoMaterial_Libros_ListReducer = (state = { tipo_material_Libros_Lista: [] }, action) => {
    switch (action.type) {
        case TIPO_MATERIAL_LIBROS_LIST_REQUEST:
            return { loading: true, tipo_material_Libros_Lista: [] }

        case TIPO_MATERIAL_LIBROS_LIST_SUCCESS:
            return { loading: false, tipo_material_Libros_Lista: action.payload }

        case TIPO_MATERIAL_LIBROS_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const tipoObraLibros_ListReducer = (state = { tipo_obraLibros_Lista: [] }, action) => {
    switch (action.type) {
        case TIPO_OBRA_LIBROS_LIST_REQUEST:
            return { loading: true, tipo_obraLibros_Lista: [] }

        case TIPO_OBRA_LIBROS_LIST_SUCCESS:
            return { loading: false, tipo_obraLibros_Lista: action.payload }

        case TIPO_OBRA_LIBROS_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const categoriaLibros_ListReducer = (state = { categoriaLibros_Lista: [] }, action) => {
    switch (action.type) {
        case CATEGORIA_LIBROS_LIST_REQUEST:
            return { loading: true, categoriaLibros_Lista: [] }

        case CATEGORIA_LIBROS_LIST_SUCCESS:
            return { loading: false, categoriaLibros_Lista: action.payload }

        case CATEGORIA_LIBROS_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}