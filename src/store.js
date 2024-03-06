import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';



import {
    userLoginReducer,
    userRegisterReducer,
    userListreducer,
    userDatosReducer, 
} from './reducers/userReducers'

import {
    criteriosListReducer,
    procesosEvaluacionListReducer
} from './reducers/criteriosReducers'

import {
    subcriteriosFilterListReducer,
} from './reducers/subcriteriosReducer'
 import {
    indicadoresFilterListReducer
 } from './reducers/indicadoresReducers'
 import {
    evidenciasFilterListReducer 
 } from './reducers/evidenciasReducers'

 import {
    doc_acreditacionCreateReducer,
    documentosAcreditacionFilterListReducer,
    documentosAcreditacionAllListReducer ,

 } from './reducers/documentosAcreditacionReducer'

 import {
    coor_carreraListReducer,
    coor_InstitucionalesListReducer,
    otras_comisionesListReducer,


 } from './reducers/generalReducers'


import {
    pruebasListReducer,
    pruebasCreateReducer 
} from './reducers/pruebasReducers'

//BIBLIOTECA
import {categoriaLibros_ListReducer,
    tipoObraLibros_ListReducer,
    tipoMaterial_Libros_ListReducer,
    obrasCreateReducer,
    
} from './reducers/biblioteca/bibliotecaReducers'

//INVENTARIO
import {
    ubicacion_inventario_ListReducer,
    tipo_inventario_ListReducer,
    estado_inventario_ListReducer,
    inventariosCreateReducer,
    inventarioListReducer,
    
} from './components/inventario/reducers/inventarioReducers'


import {
    documentosAcreditacionDocenteListReducer,
} from './components/sistema_acreditacion/reducers/docPendienteReducers'





const reducer = combineReducers({
    //user
    userLogin: userLoginReducer,
    userRegister:userRegisterReducer,
    userList : userListreducer ,
    userDatos: userDatosReducer,
    //Criterios
    criteriosList :criteriosListReducer ,
    procesosEvaluacionList:procesosEvaluacionListReducer,
    //Subcriterios
    subcriteriosFilterList : subcriteriosFilterListReducer ,
    //INDICADORES
    indicadoresFilterList: indicadoresFilterListReducer,
    //EVIDENCIAS
    evidenciasFilterList:evidenciasFilterListReducer ,
    //DOCUMENTOS
    doc_acreditacionCreate:doc_acreditacionCreateReducer,
    documentosAcreditacionFilterList:documentosAcreditacionFilterListReducer,
    documentosAcreditacionAllList:documentosAcreditacionAllListReducer ,

    //sistema acreditacion
    documentosAcreditacionDocenteList:documentosAcreditacionDocenteListReducer,

    //GENERAL
    coor_carreraList : coor_carreraListReducer,
    coor_InstitucionalesList : coor_InstitucionalesListReducer,
    otras_comisionesList : otras_comisionesListReducer,

    //BIBLIOTECA
    categoriaLibros_List: categoriaLibros_ListReducer,
    tipoObraLibros_List :tipoObraLibros_ListReducer,
    tipoMaterial_Libros_List: tipoMaterial_Libros_ListReducer,
    obrasCreate :  obrasCreateReducer,

     //INVENTARIO
     tipo_inventario_List: tipo_inventario_ListReducer,
     estado_inventario_List: estado_inventario_ListReducer,
     ubicacion_inventario_List: ubicacion_inventario_ListReducer,
     InventarioCreate: inventariosCreateReducer,
     inventarioList: inventarioListReducer,
     
    //pruebas
    pruebasList: pruebasListReducer,
    pruebasCreate : pruebasCreateReducer ,
})



const userInfoStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const userInfoDatosStorage = localStorage.getItem('userInfo_datos') ?
    JSON.parse(localStorage.getItem('userInfo_datos')) : null

const initialState = {
    userLogin: { userInfo: userInfoStorage },
    userDatos: { userInfo_datos: userInfoDatosStorage }
}

const middleware = [thunk]


const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store