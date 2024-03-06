import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import React, { useState } from 'react';
import { RUTA_SERVIDOR } from '../../ApiRoutes'


export default function CargaDocumentoAcreditacion_pendiente() {


    const {id} = useParams()

    const path = (`/pendientes/docentes/acreditacion/`);
    const navigate = useNavigate();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;





    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData()
        formData.append('archivo', file)
        formData.append('id', id)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

            //const { data } = await axios.put('http://localhost:8002/documentos_acreditacion/subir_archivo/', formData, config)
            const { data } = await axios.put(RUTA_SERVIDOR + `/documentos_acreditacion/subir_archivo/`, formData, config);
        } catch (error) {
            
        }
        navigate(path)

    };
    return (
        <>
            <div className='h-screen w-screen bg-gray-800 text-white '>
                
                <div className='bg-gray-700 w-100 h-40 justify-center '>
                    <h4 className='pt-10 pl-20 text-2xl font-bold '>Carga de documento</h4>
                    <div className='pl-20 mt-5'>
                        <input type="file" onChange={handleFileChange} />
                    </div>

                </div>


            </div>
        </>
    )
}



