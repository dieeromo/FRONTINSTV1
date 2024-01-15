import { useParams } from 'react-router-dom'
import {listDocumentosAcreditacionFilterAction} from '../../actions/documentosAcreditacionActions'
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import NavbarIST from '../comunes/NavbarIST'

import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import ArticleIcon from '@mui/icons-material/Article';

export default function ListDocumentosAcreditacion(){
    const {id} = useParams()
    const dispatch = useDispatch();

    


    useEffect(() => {
        
        dispatch(listDocumentosAcreditacionFilterAction(id))
    }, [dispatch])

    const documentosAcreditacionFilterList =useSelector(state => state.documentosAcreditacionFilterList)
    const {error,loading,doc_acreditacion_filter} = documentosAcreditacionFilterList
    console.log(doc_acreditacion_filter)
    
    return(
        <>
        <NavbarIST/>
        <div>
            <h3 className='text-4xl font-bold text-center text-indigo-900'>Documentos</h3>

            <a href={`/documentos_acreditacion/register/${id}`}>Nuevo documento</a>
        <table className="table-auto w-1/2 shadow-md mt-8 mx-auto w-full " >
            <thead className='bg-gray-200'>
                <tr className='text-center'>
                    <th>Indicador</th>
                    <th>Evidencia</th>
                    <th>Key</th>
                    <th>Documento</th>
                    <th>Cargar</th>
                    <th>Responsable</th>
                    <th>Ver</th>
                    <th>Entrega</th>
                    <th>Carrera</th>
                    <th>Coordinaciones Inst</th>
                    <th>Otras</th>
                 

                </tr>
            </thead>
            <tbody>
                {
                    doc_acreditacion_filter.map((item,index)=>(
                        <tr key={index} className='border px-4 py-2 text-center'>
                            <td>{item.indicador}</td>
                            <td>{item.evidencia}</td>
                            <td>{item.numeracion}</td>
                            <td> {item.documento}</td>
                            <td> <a href={`/documentos_acreditacion/subir_archivo/${item.id}/${id}`}><VerticalAlignTopIcon/></a> </td>
                            <td>{item.responsable}</td>
                            <td> {item.archivo ? <a href={'http://localhost:8002'+item.archivo}><ArticleIcon/></a> : <> </>} </td>
                            <td>{item.fecha_limite}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                           
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
        </>
    )
}