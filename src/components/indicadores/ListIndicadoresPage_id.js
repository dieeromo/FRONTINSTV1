
import {listIndicadoresFilterAction} from '../../actions/indicadoresActions'
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import NavbarIST from '../comunes/NavbarIST'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ListIndicadoresPage_id(){
    const {id} = useParams()

    const dispatch = useDispatch();

       
    useEffect(() => {
        dispatch(listIndicadoresFilterAction(id))
    }, [dispatch])
    const indicadoresFilterList =useSelector(state => state.indicadoresFilterList)
    const {error,loading,indicadores_filter_lista} = indicadoresFilterList

    console.log(indicadores_filter_lista)

 
    return(
        <>
        <NavbarIST/>
            <div >
                <h3 className='text-4xl font-bold text-center text-indigo-800'>
                    Indicadores
                </h3>
                <table className="table-auto w-1/2 shadow-md mt-8  ">
                    <thead className='bg-gray-200'>
                        <tr className='text-center'>
                            <th>Criterio</th>
                            <th>Subcriterio</th>
                            <th> Número</th>
                            <th>Indicador</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            indicadores_filter_lista.map((item,index)=>(
                                <tr key={index} className='border px-4 py-2 text-center '>
                                    <td className='text-sm'>{item.criterio}</td>
                                    <td className='text-sm'>{item.subCriterio}</td>
                                    <td className='text-sm'>{item.numeracion}</td>
                                    <td > {item.indicador}</td>
                                    <td><a href={`/evidencias/list/${item.id}`}><ArrowForwardIosIcon/></a></td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}