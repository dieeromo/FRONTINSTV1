import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect,useState  } from 'react';
import {listPruebasAction} from '../../actions/pruebasActions'

export default function PruebasList(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listPruebasAction())
    }, [dispatch])

    const pruebasList = useSelector(state => state.pruebasList)
    const {error, loading, pruebas} =pruebasList
    console.log(pruebas)

    const lista = pruebas.map((item)=>({
        id : item.id,
        nombre : item.nombre,
        archivo : 'http://localhost:8002'+item.archivo
    }))


    // <a style={{textDecoration: 'none'}} href={`/userProfile/${user.id}`} className="text-blue-600 text-sm hover:text-blue-800">
    // See Profile





    return(
        <>
        <div>
            <h2>Lista de pruebas</h2>
            { 
            lista.map((item,index) => (
                <tr key={index}>
                    <td> <a  href={`/carga/${item.id}`} >{item.nombre}</a> </td>
                    <td><a href={item.archivo} target="_blank" rel="noopener noreferrer">{item.archivo}</a></td>
                </tr>
            )) }


        </div>
        </>
    )
}