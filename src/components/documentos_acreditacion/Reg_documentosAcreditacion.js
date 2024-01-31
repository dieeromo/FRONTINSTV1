import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select';
import { useEffect } from 'react';

import { userDatosAction } from '../../actions/userActions';

import Navbar_acreditacion from '../comunes/Navbar_acreditacionIST';
import {
  SelectorCarrera,
  SelectorCoordinacionesInstitucionales,
  SelectorOtrasComisiones
} from '../general/norender/Selectores';
import { SelectorUsuarios } from '../users/norender/Selectores';
import { createDocumentoAcreditacionAction } from '../../actions/documentosAcreditacionActions';

export default function RegDocumentosAcreditacion() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const path = `/documentos_acreditacion/list/${id}`;

  useEffect(() => {

    dispatch(userDatosAction());
  }, [dispatch]);


  const userDatos = useSelector(state => state.userDatos);
  const { error: userError, loading: userLoading, userInfo_datos } = userDatos;



  const [numeracion, setNumeracion] = useState('');
  const [documento, setDocumento] = useState('');
  const [observacion, setObservacion] = useState('');
  const [responsable, setResponsable] = useState('');
  const [fechaLimite, setFechaLimite] = useState('');
  const [carrera, setCarrera] = useState('');
  const [coor_institucionales, set_coor_institucionales] = useState('');
  const [otrasComisiones, set_otrasComisiones] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDocumentoAcreditacionAction(id, numeracion, documento, observacion, responsable, fechaLimite, userInfo_datos.id, carrera, coor_institucionales, otrasComisiones));
    navigate(path);
  };



  return (
    <>
      <Navbar_acreditacion />
      <h3 className="text-2xl font-bold mb-4 text-center" >Registro de documentos</h3>
      <form onSubmit={handleSubmit} method="POST" action="#">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div></div>

          <div className="mb-4">
            <label htmlFor="numeracion" className="block text-lg font-semibold text-gray-500">* Numeración:</label>
            <textarea
              value={numeracion}
              onChange={(e) => setNumeracion(e.target.value)}
              type="text"
              id="numeracion"
              name="numeracion"
              rows={2}
              className="w-full  p-2 border rounded-md shadow-md "
              placeholder="Número de documento"
              required
            />
          </div>


          <div className="mb-4">
            <label htmlFor="documento" className="block text-lg font-semibold text-gray-500">* Documento:</label>
            <textarea
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              type="text"
              id="documento"
              name="documento"
              rows={2}
              className="w-full p-2 border rounded-md shadow-md "
              placeholder="Nombre de documento"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="observacion" className="block text-lg font-semibold text-gray-500">Observación:</label>
            <textarea
              value={observacion}
              onChange={(e) => setObservacion(e.target.value)}
              type="text"
              id="observacion"
              name="observacion"
              rows={2}
              className="w-full p-2 border rounded-md shadow-md "
              placeholder="Observación"
            />
          </div>



        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div></div>

          <div className="mb-4">
            <label htmlFor="carrera" className="block text-lg font-semibold text-gray-500 shadow-md ">Carrera:</label>
            <Select options={SelectorCarrera()} onChange={(selectedOption) => setCarrera(selectedOption.value)}
            className='shadow-md' />
          </div>

          <div className="mb-4">
            <label htmlFor="coordinaciones_institucionales" className="block text-lg font-semibold text-gray-500 shadow-md ">Coordinaciones institucionales:</label>
            <Select
              options={SelectorCoordinacionesInstitucionales()}
              onChange={(selectedOption) => set_coor_institucionales(selectedOption.value)}
              className='shadow-md'
            />
          </div>

          <div className="mb-4">
            <label htmlFor="otras_comisiones" className="block text-lg font-semibold text-gray-500 shadow-md ">Otras comisiones:</label>
            <Select
              options={SelectorOtrasComisiones()}
              onChange={(selectedOption) => set_otrasComisiones(selectedOption.value)}
              className='shadow-md'
            />
          </div>


        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          <div></div>
          <div className="mb-4">
            <label htmlFor="responsable" className="block text-lg font-semibold text-gray-500  " >* Docente responsable:</label>
            <Select
              options={SelectorUsuarios()}
              onChange={(selectedOption) => setResponsable(selectedOption.value)}
              required
              className='shadow-md'
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div></div>
          <div className="mb-4">
            <label htmlFor="fecha_limite" className="block text-lg font-semibold text-gray-500 shadow-md ">* Fecha entrega:</label>
            <input
              value={fechaLimite}
              onChange={(e) => setFechaLimite(e.target.value)}
              type="date"
              id="fecha_limite"
              name="fecha_limite"
              className="w-full p-2 border rounded-md shadow-md "
              required
            />
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div></div>
          <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Guardar
        </button>

        </div>













      </form>

    </>
  );
}
