import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import React, { useState } from 'react';



export default function CargaDocumentoAcreditacion(){


    const {id, id_evidencia} = useParams()
    console.log('id_evidencia')
    console.log(id_evidencia)

    const path = (`/documentos_acreditacion/list/${id_evidencia}`);
    const navigate = useNavigate();

    const userLogin = useSelector (state => state.userLogin);
    const {userInfo} = userLogin;
    

    console.log(userInfo)


    const handleFileChange = async(e) => {
        const file = e.target.files[0];
        const formData = new FormData()
        formData.append('archivo', file)
        formData.append('id', id)

        try{
            const config = {
                headers: {
                  'Content-Type': 'multipart/form-data' ,
                  Authorization: `Bearer ${userInfo.token}`
                }
              }

              const { data } = await axios.put('http://localhost:8002/documentos_acreditacion/subir_archivo/', formData, config)

        } catch (error){
            console.log(error)
        }
        navigate(path)
        

 
    };
    return(
        <>
        <div>
            <h4>carga</h4>

            <input type="file" onChange={handleFileChange} />

        </div>
        </>
    )
}



