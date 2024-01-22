import {listEvidenciaFilterAction} from '../../actions/evidenciasActions'
import { useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import NavbarIST from '../comunes/NavbarIST'
import { useParams } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ListEvidenciasPage(){
    const {id} = useParams()

    const dispatch = useDispatch();

        
    useEffect(() => {
        dispatch(listEvidenciaFilterAction(id))
    }, [dispatch])
    const evidenciasFilterList =useSelector(state => state.evidenciasFilterList)
    const {error,loading,evidencias_filter_lista} = evidenciasFilterList
    console.log(evidencias_filter_lista)

    return(
        <>
        <NavbarIST/>
        <div>
            <h3 className='text-4xl font-bold text-center text-indigo-900'>Evidencias</h3>
           
            <table className="table-auto w-1/2 shadow-md mt-8 mx-auto w-full ">
                <thead className='bg-gray-200'>
                    <tr className='text-center'>
                        <th>Criterio</th>
                        <th>Subcriterio</th>
                        <th>Indicador</th>
                        <th>Numero</th>
                        <th>Evidencia</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        evidencias_filter_lista.map((item,index)=>(
                            <tr key={index} className='border px-4 py-2 text-center'>
                                <td>{item.criterio}</td>
                                <td>{item.subCriterio}</td>
                                <td>{item.indicador}</td>
                                <td>{item.numeracion}</td>
                                <td> {item.evidencia} </td>
                                <td><a href={`/documentos_acreditacion/list/${item.id}`}><ArrowForwardIosIcon /></a></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}
