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

    //GENERAL
    coor_carreraList : coor_carreraListReducer,
    coor_InstitucionalesList : coor_InstitucionalesListReducer,
    otras_comisionesList : otras_comisionesListReducer,
    //pruebas
    pruebasList: pruebasListReducer,
    pruebasCreate : pruebasCreateReducer ,
    


})



const userInfoStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoStorage }
}

const middleware = [thunk]


const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store