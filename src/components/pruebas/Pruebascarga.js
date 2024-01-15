import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import React, { useState } from 'react';

export default function Pruebascarga(){


    const {id} = useParams()
    console.log(id)

    const path = ('/pruebas/list/');
    const navigate = useNavigate();

    const userLogin = useSelector (state => state.userLogin);
    const {userInfo} = userLogin;



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

              const { data } = await axios.put('http://localhost:8002/pruebas/pdf/', formData, config)

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



