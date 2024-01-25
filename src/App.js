import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/pubicasLogueo/Landing'
import Login from './components/pubicasLogueo/Login'
import Register from './components/users/Register'
import ListCrietriosPage from './components/criterios/ListCriteriosPage'
import ListSubcriteriosPage_id from './components/subcriterios/ListSubcriteriosPage_id'
import ListIndicadoresPage_id from './components/indicadores/ListIndicadoresPage_id'
import ListEvidenciasPage from './components/evidencias/ListEvidenciasPage'

import Reg_documentosAcreditacion from './components/documentos_acreditacion/Reg_documentosAcreditacion'
import List_documentosAcreditacion from './components/documentos_acreditacion/List_documentosAcreditacion'
import CargaDocumentoAcreditacion from './components/documentos_acreditacion/CargaDocumentoAcreditacion'
import TodaDocumentacionList from './components/documentos_acreditacion/TodaDocumentacionList'

import PruebasList from './components/pruebas/PruebasList'
import PruebasRegister from './components/pruebas/PruebasRegister'
import Pruebascarga from './components/pruebas/Pruebascarga'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/criterios/list' element={<ListCrietriosPage />} />

        <Route path='/subcriterios/list/:id' element={<ListSubcriteriosPage_id />} />
        <Route path='/indicadores/list/:id' element={< ListIndicadoresPage_id />} />
        <Route path='/evidencias/list/:id' element={< ListEvidenciasPage />} />

        <Route path='/documentos_acreditacion/register/:id' element={<  Reg_documentosAcreditacion />} />
        <Route path='/documentos_acreditacion/list/:id' element={<  List_documentosAcreditacion />} />
        <Route path='/documentos_acreditacion/subir_archivo/:id/:id_evidencia/' element={<  CargaDocumentoAcreditacion />} />
        <Route path='/documentos_acreditacion/all/' element={<  TodaDocumentacionList />} />



        <Route path='/pruebas/list' element={<PruebasList />} />
        <Route path='/pruebas/register' element={<  PruebasRegister />} />

        <Route path='/carga/:id' element={<Pruebascarga />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
