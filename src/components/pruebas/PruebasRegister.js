import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react';
import { pruebasCreateAction } from '../../actions/pruebasActions'
import { useNavigate } from 'react-router';
import axios from 'axios'

export default function PruebasRegister() {
    const dispatch = useDispatch();
    const path = ('/pruebas/list/');
    const navigate = useNavigate();

    const [archivo, setArchivo] = useState(null);
    const [nombre, setNombre] = useState('');
    const { loading,error } = useSelector(state => state.pruebasCreate);
    const userLogin = useSelector (state => state.userLogin);
    const {userInfo} = userLogin;

    

    const handleFileChange = async(e) => {
        const file = e.target.files[0];
        const formData = new FormData()
        formData.append('archivo', file)
        formData.append('id', 23)

        try{
            const config = {
                headers: {
                  'Content-Type': 'multipart/form-data' ,
                  Authorization: `Bearer ${userInfo.token}`
                }
              }

              const { data } = await axios.post('http://localhost:8002/pruebas/pdf/', formData, config)

        } catch (error){
            console.log(error)
        }
        navigate(path)
        

 
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch(pruebasCreateAction(nombre,archivo));



    }
    return (
        <>
            <div>
                <h3>Registro de pruebas</h3>
                <form onSubmit={handleSubmit}>
                    <input type="file" onChange={handleFileChange} />




                    <div>
                        <label htmlFor="about" > Nombre </label>
                    </div>
                    <textarea
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        id="nombre"
                        name="nombre"
                        rows={3}
                        className=""
                        placeholder="Type Here!"
                    />

                    <button type="submit" disabled={loading}>Subir PDF</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}


                </form>
            </div>
        </>
    )
}