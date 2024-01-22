import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select';

import NavbarIST from '../comunes/NavbarIST';
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

  const [numeracion, setNumeracion] = useState('');
  const [documento, setDocumento] = useState('');
  const [observacion, setObservacion] = useState('');
  const [responsable, setResponsable] = useState('');
  const [fechaLimite, setFechaLimite] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDocumentoAcreditacionAction(id, numeracion, documento, observacion, responsable, fechaLimite));
    navigate(path);
  };

  return (
    <>
      <NavbarIST />
      <div className="max-w-md mx-auto my-8 p-6 bg-white shadow-md rounded-md">
        <h3 className="text-2xl font-bold mb-4">Registro de nombres de documentos</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="numeracion" className="block text-sm font-semibold text-gray-600">Numeración:</label>
            <textarea
              value={numeracion}
              onChange={(e) => setNumeracion(e.target.value)}
              type="text"
              id="numeracion"
              name="numeracion"
              rows={2}
              className="w-full p-2 border rounded-md"
              placeholder="Número"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="documento" className="block text-sm font-semibold text-gray-600">Documento:</label>
            <textarea
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              type="text"
              id="documento"
              name="documento"
              rows={2}
              className="w-full p-2 border rounded-md"
              placeholder="Documento"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="observacion" className="block text-sm font-semibold text-gray-600">Observación:</label>
            <textarea
              value={observacion}
              onChange={(e) => setObservacion(e.target.value)}
              type="text"
              id="observacion"
              name="observacion"
              rows={2}
              className="w-full p-2 border rounded-md"
              placeholder="Observación"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="responsable" className="block text-sm font-semibold text-gray-600">Docente responsable:</label>
            <Select
              options={SelectorUsuarios()}
              onChange={(selectedOption) => setResponsable(selectedOption.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="carrera" className="block text-sm font-semibold text-gray-600">Carrera:</label>
            <Select options={SelectorCarrera()} onChange={(selectedOption) => setResponsable(selectedOption.value)} />
          </div>

          <div className="mb-4">
            <label htmlFor="coordinaciones_institucionales" className="block text-sm font-semibold text-gray-600">Coordinaciones institucionales:</label>
            <Select
              options={SelectorCoordinacionesInstitucionales()}
              onChange={(selectedOption) => setResponsable(selectedOption.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="otras_comisiones" className="block text-sm font-semibold text-gray-600">Otras comisiones:</label>
            <Select
              options={SelectorOtrasComisiones()}
              onChange={(selectedOption) => setResponsable(selectedOption.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fecha_limite" className="block text-sm font-semibold text-gray-600">Fecha entrega:</label>
            <input
              value={fechaLimite}
              onChange={(e) => setFechaLimite(e.target.value)}
              type="date"
              id="fecha_limite"
              name="fecha_limite"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Guardar
          </button>
        </form>
      </div>
    </>
  );
}
