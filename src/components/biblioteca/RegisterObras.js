import Navbar_Biblioteca from '../comunes/Navbar_Biblioteca'
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import {
  SelectorCategoriaLibro,
  SelectorTipoObra,
  SelectorTipoMaterial,
} from './norender/Selectores'
import {createLibroAction} from '../../actions/biblioteca/bibliotecaActions'
import React, { useState } from 'react';

export default function RegisterObras() {
  const dispatch = useDispatch();
  const [categoria, setCategoria] = useState('');
  const [tipo_obra, set_tipo_obra] = useState('');
  const [tipo_TipoMaterial, set_TipoMaterial] = useState('');
  //const [estadoObra, set_estadoObra] = useState('');

  //set_estadoObra(1) ///OJOOOO
  let estadoObra = 1

  const [codigo, set_codigo] = useState('');
  const [titulo, set_titulo] = useState('');
  const [editorial, set_editorial] = useState('');
  const [autor, set_autor] = useState('');
  const [anio, set_anio] = useState('');
  const [tomo, set_tomo] = useState('');
  const [ubicacion, set_ubicacion] = useState('');
  const [observacion, SetObservacion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createLibroAction(codigo,titulo,editorial,autor,anio,tomo,ubicacion,categoria,tipo_obra,tipo_TipoMaterial,estadoObra,2,observacion))

    //codigo,titulo,editorial,autor,anio_publicacion,tomo,ubicacion,categoria,tipo_obra,tipo_material,estado_obra,digitador,observacion
    ;
  };

  return (
    <>
      <Navbar_Biblioteca />
      registro de obras
      <form onSubmit={handleSubmit} method="POST" action="#">

     

        <div className="mb-4">
          <label htmlFor="codigo" className="block text-lg font-semibold text-gray-500">Código:</label>
          <textarea
            value={codigo}
            onChange={(e) => set_codigo(e.target.value)}
            type="text"
            id="codigo"
            name="codigo"
            rows={2}
            className="w-full  p-2 border rounded-md shadow-md "
            placeholder="Codigo de obra"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="titulo" className="block text-lg font-semibold text-gray-500">Título:</label>
          <textarea
            value={titulo}
            onChange={(e) => set_titulo(e.target.value)}
            type="text"
            id="titulo"
            name="titulo"
            rows={2}
            className="w-full  p-2 border rounded-md shadow-md "
            placeholder="Ingrese el titulo de la obra"
            required
          />
        </div>


        <div className="mb-4">
          <label htmlFor="editorial" className="block text-lg font-semibold text-gray-500">Editorial:</label>
          <textarea
            value={editorial}
            onChange={(e) => set_editorial(e.target.value)}
            type="text"
            id="editorial"
            name="editorial"
            rows={2}
            className="w-full  p-2 border rounded-md shadow-md "
            placeholder="Ingrese la editorial"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="autor" className="block text-lg font-semibold text-gray-500">Autor:</label>
          <textarea
            value={autor}
            onChange={(e) => set_autor(e.target.value)}
            type="text"
            id="autor"
            name="autor"
            rows={2}
            className="w-full  p-2 border rounded-md shadow-md "
            placeholder="Ingrese el autor"
            required
          />
        </div>

        <label htmlFor="anio" > Año: </label>
        <input
          value={anio}
          onChange={(e) => set_anio(e.target.value)}
          type="number"
          id="anio"
          name="anio"
          rows={2}
          className=""
          placeholder="Ingrese el año de publicacion"
        />

        <div className="mb-4">
          <label htmlFor="tomo" className="block text-lg font-semibold text-gray-500">Tomo:</label>
          <textarea
            value={tomo}
            onChange={(e) => set_tomo(e.target.value)}
            type="text"
            id="tomo"
            name="tomo"
            rows={2}
            className="w-full  p-2 border rounded-md shadow-md "
            placeholder="Ingrese el autor"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ubicacion" className="block text-lg font-semibold text-gray-500">Ubicacion:</label>
          <textarea
            value={ubicacion}
            onChange={(e) => set_ubicacion(e.target.value)}
            type="text"
            id="ubicacion"
            name="ubicacion"
            rows={2}
            className="w-full  p-2 border rounded-md shadow-md "
            placeholder="Ingrese la ubicacion de la obra"
            required
          />
        </div>


        <div className="mb-4">
          <label htmlFor="carrera" className="block text-lg font-semibold text-gray-500 shadow-md ">Categoria:</label>
          <Select options={SelectorCategoriaLibro()} onChange={(selectedOption) => setCategoria(selectedOption.value)}
            className='shadow-md' />
        </div>


        <div className="mb-4">
          <label htmlFor="carrera" className="block text-lg font-semibold text-gray-500 shadow-md ">Tipo obra:</label>
          <Select options={SelectorTipoObra()} onChange={(selectedOption) => set_tipo_obra(selectedOption.value)}
            className='shadow-md' />
        </div>


        <div className="mb-4">
          <label htmlFor="carrera" className="block text-lg font-semibold text-gray-500 shadow-md ">Tipo material:</label>
          <Select options={SelectorTipoMaterial()} onChange={(selectedOption) => set_TipoMaterial(selectedOption.value)}
            className='shadow-md' />
        </div>


        <div className="mb-4">
          <label htmlFor="observacion" className="block text-lg font-semibold text-gray-500">Observacion:</label>
          <textarea
            value={observacion}
            onChange={(e) => SetObservacion(e.target.value)}
            type="text"
            id="observacion"
            name="observacion"
            rows={2}
            className="w-full  p-2 border rounded-md shadow-md "
            placeholder="Ingrese una observacion"
            required
          />
        </div>



        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Guardar
        </button>

      </form>


    </>
  )
}