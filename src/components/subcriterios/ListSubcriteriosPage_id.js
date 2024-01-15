import {listSubCriteriosFilterAction} from '../../actions/subcriteriosActions' // filtrar por criterio
import { useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import NavbarIST from '../comunes/NavbarIST'
import { useParams } from 'react-router-dom'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function ListSubcriteriosPage_id(){
    const {id} = useParams()

    const dispatch = useDispatch();


 
    
    useEffect(() => {
        dispatch(listSubCriteriosFilterAction(id))
    }, [dispatch])
    const subcriteriosFilterList =useSelector(state => state.subcriteriosFilterList)
    const {error,loading,subcriterios_filter_lista} = subcriteriosFilterList



    console.log(subcriterios_filter_lista)
    return(
        <>
        <NavbarIST/>
        <div>
            <h2 className='text-4xl font-bold text-center text-indigo-800'>Subcriterios</h2>
            <div>
                <table className="table-auto w-1/2 shadow-md mt-6 mx-auto">
                    <thead className='bg-gray-200'>
                        <tr className='text-center'>
                            <th>Criterio</th>
                            <th>Numero</th>
                            <th>Subcriterio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            subcriterios_filter_lista.map((item,index)=>(
                                <tr key={index} className='border px-4 py-2 text-center'>
                                    <td>{item.criterio}</td>
                                    <td>{item.numeracion}</td>
                                    <td> {item.subCriterio}</td>
                                    <td><a href={`/indicadores/list/${item.id}`}><ArrowForwardIosIcon/></a></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}