
import '../../App.css'
import Navbar_inicio from '../comunes/Navbar_inicio'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


export default function Landing() {

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const userDatos = useSelector(state => state.userDatos)
    const { error, loading, userInfo_datos } = userDatos



    let tempo_user = false

  if (userInfo_datos){
    if (userInfo_datos.is_docente){

        tempo_user = true
  }
}






    const handleCardClick_acreditacion = () => {
        navigate('/criterios/list')
    };

    const handleCardClick_biblioteca = () => {
        navigate('/biblioteca/landing')
    };

    const handleCardClick_planificacion = () => {
        navigate('/criterios')
    };

    return (
        <>
            <Navbar_inicio />

            <div className="bg-white p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Tarjeta 1 */}
                        { tempo_user ? 
                        <div
                            className="bg-green-200 p-4 rounded-md cursor-pointer"
                            onClick={handleCardClick_acreditacion}
                        >
                            <h2 className="text-xl font-semibold text-dark">Acreditación</h2>
                            <p className="text-Black">Sistema de autoevaluación y acreditación</p>
                        </div>
                        :
                        <>
                        </>

                        }
                    


                    {/* Tarjeta 2 */}
                    <div
                        className="bg-green-200 p-4 rounded-md cursor-pointer"
                        onClick={handleCardClick_biblioteca}
                    >
                        <h2 className="text-xl font-semibold text-dark-green">Biblioteca</h2>
                        <p className="text-black">Sistema de biblioteca</p>
                    </div>

                    {/* Tarjeta 3 */}
                        {tempo_user ? 
                        <div
                            className="bg-green-200 p-4 rounded-md cursor-pointer"
                            onClick={handleCardClick_planificacion}
                        >
                            <h2 className="text-xl font-semibold text-black">Planificación</h2>
                            <p className="text-black">Seguimiento a la planificación</p>
                        </div>
                        :
                        <>
                        </>

                        }
        

                    

                </div>
            </div>
        </>
    )
}