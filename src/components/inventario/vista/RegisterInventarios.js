import Navbar_planificacion from '../Navbar_planificacion'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
    SelectorTipoInventario,
    SelectorEstadoInventario,
    //SelectorUbicacionInventario,
} from '../norender/Selectores'
import { createInventarioAction } from '../actions/inventarioActions'
import React, { useState } from 'react';
import { userDatosAction } from '../../../actions/userActions'

export default function RegisterInventarios() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(userDatosAction())
    }, [dispatch])
    const userDatos = useSelector(state => state.userDatos)
    const { error, loading, userInfo_datos } = userDatos
    console.log(userInfo_datos.first_name)

    const [tipo, setTipo] = useState('');
    const [estado, setEstado] = useState('');
    //const [ubicacion, setUbicacion] = useState('');



    const [codUnico, set_codUnico] = useState('');
    const [codSenescyt, setCodSenescyt] = useState('');
    const [codInstituto, set_codInstituto] = useState('');
    const [descripcion, set_descripcion] = useState('');
    const [materiales, set_materiales] = useState('');
    const [marca, set_marca] = useState('');
    const [modelo, set_modelo] = useState('');
    const [serie, set_serie] = useState('');
    const [color, set_color] = useState('');
    //const [asignado, set_asignado] = useState(userInfo_datos.first_name);
    const [observacion, SetObservacion] = useState('');




    const handleSubmit = (e) => {
        e.preventDefault();

        let finalCodSenescyt = codSenescyt !== '' ? codSenescyt : "NA";
        let finalMarca = marca !== '' ? marca : "NA";
        let finalModelo = modelo !== '' ? modelo : "NA";
        let finalSerie = serie !== '' ? serie : "NA";
        let finalobservacion = observacion !== '' ? observacion : "NA";

        dispatch(createInventarioAction(codUnico, finalCodSenescyt, codInstituto, tipo, descripcion, materiales, finalMarca, finalModelo, finalSerie, color, estado, 2, userInfo_datos.id, finalobservacion));

        navigate('/inventario/landing');
    };

    return (
        <>
            <Navbar_planificacion />
            <div className="container mx-auto p-8">

                <h1 className="text-3xl font-semibold mb-8">Registro de Inventarios</h1>
                <form onSubmit={handleSubmit}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="codigo" className="block text-lg font-semibold text-gray-700">Código:</label>
                            <input
                                value={codUnico}
                                onChange={(e) => set_codUnico(e.target.value)}
                                id="codigo"
                                name="codigo"
                                rows={2}
                                className="w-full p-2 border rounded-md shadow-md"
                                placeholder="Código"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="cod_senescyt" className="block text-lg font-semibold text-gray-700">Código Senescyt:</label>
                            <input
                                value={codSenescyt}
                                onChange={(e) => setCodSenescyt(e.target.value)}
                                id="cod_senescyt"
                                name="cod_senescyt"
                                rows={2}
                                className="w-full p-2 border rounded-md shadow-md"
                                placeholder="Código Senescyt"

                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="editorial" className="block text-lg font-semibold text-gray-500">Código Institucional:</label>
                        <input
                            value={codInstituto}
                            onChange={(e) => set_codInstituto(e.target.value ? e.target.value : "NA")}
                            type="text"
                            id="codInstituto"
                            name="codInstituto"
                            rows={2}
                            className="w-full  p-2 border rounded-md shadow-md "
                            placeholder="Ingrese el código institucional"

                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="carrera" className="block text-lg font-semibold text-gray-500 shadow-md ">Tipo:</label>
                        <Select options={SelectorTipoInventario()} onChange={(selectedOption) => setTipo(selectedOption.value)}
                            className='shadow-md' />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="editorial" className="block text-lg font-semibold text-gray-500">Descripcion:</label>
                        <textarea
                            value={descripcion}
                            onChange={(e) => set_descripcion(e.target.value)}
                            type="text"
                            id="descripcion"
                            name="descripcion"
                            rows={2}
                            className="w-full  p-2 border rounded-md shadow-md "
                            placeholder="Ingrese la editorial"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="editorial" className="block text-lg font-semibold text-gray-500">Materiales:</label>
                        <textarea
                            value={materiales}
                            onChange={(e) => set_materiales(e.target.value)}
                            type="text"
                            id="materiales"
                            name="materiales"
                            rows={2}
                            className="w-full  p-2 border rounded-md shadow-md "
                            placeholder="Ingrese materiales"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="editorial" className="block text-lg font-semibold text-gray-500">Marca:</label>
                        <input
                            value={marca}
                            onChange={(e) => set_marca(e.target.value)}
                            type="text"
                            id="marca"
                            name="marca"
                            rows={2}
                            className="w-full  p-2 border rounded-md shadow-md "
                            placeholder="Ingrese marca"

                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="autor" className="block text-lg font-semibold text-gray-500">Modelo:</label>
                        <input
                            value={modelo}
                            onChange={(e) => set_modelo(e.target.value)}
                            type="text"
                            id="modelo"
                            name="modelo"
                            rows={2}
                            className="w-full  p-2 border rounded-md shadow-md "
                            placeholder="Ingrese modelo"

                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="autor" className="block text-lg font-semibold text-gray-500">Serie:</label>
                        <input
                            value={serie}
                            onChange={(e) => set_serie(e.target.value)}
                            type="text"
                            id="serie"
                            name="serie"
                            rows={2}
                            className="w-full  p-2 border rounded-md shadow-md "
                            placeholder="Ingrese serie"

                        />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="tomo" className="block text-lg font-semibold text-gray-500">Color:</label>
                        <input
                            value={color}
                            onChange={(e) => set_color(e.target.value)}
                            type="text"
                            id="color"
                            name="color"
                            rows={2}
                            className="w-full  p-2 border rounded-md shadow-md "
                            placeholder="Ingrese color"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="carrera" className="block text-lg font-semibold text-gray-500 shadow-md ">Estado:</label>
                        <Select options={SelectorEstadoInventario()} onChange={(selectedOption) => setEstado(selectedOption.value)}
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
                            
                        />
                    </div>



                    <button
                        type="submit"
                        className="bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition duration-300"
                    >
                        Guardar
                    </button>

                </form>
            </div>
        </>
    );
}