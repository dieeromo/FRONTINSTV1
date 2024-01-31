import {listEvidenciaFilterAction} from '../../actions/evidenciasActions'
import { useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Navbar_acreditacion from '../comunes/Navbar_acreditacionIST'
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
        <Navbar_acreditacion/>
        <div>
            <h3 className='text-4xl font-bold text-center text-indigo-900'>Evidencias</h3>
           <div className='mx-auto'>
           <table className="m-2  shadow-md  ">
                <thead className='bg-gray-200'>
                    <tr className='text-center'>
                        <th className='px-2 pt-2'>Criterio</th>
                        <th className='px-2 pt-2'>Subcriterio</th>
                        <th className='px-2 pt-2'>Indicador</th>
                        <th className='px-2 pt-2'>Numero</th>
                        <th className='px-2 pt-2'>Evidencia</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        evidencias_filter_lista.map((item,index)=>(
                            <tr key={index} className='border px-4 py-2 text-center'>
                                <td className='px-3 pt-3'>{item.criterio}</td>
                                <td className='px-3 pt-3'>{item.subCriterio}</td>
                                <td className='px-3 pt-3'>{item.indicador}</td>
                                <td className='px-3 pt-3'>{item.numeracion}</td>
                                <td className='px-3 pt-3'> {item.evidencia} </td>
                                <td className='px-3 pt-3'><a href={`/documentos_acreditacion/list/${item.id}`}><ArrowForwardIosIcon /></a></td>
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
