import { useParams } from 'react-router-dom'
import {listDocumentosAcreditacionFilterAction} from '../../actions/documentosAcreditacionActions'
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import NavbarIST from '../comunes/Navbar_acreditacionIST'
import {userDatosAction} from '../../actions/userActions'

import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import ArticleIcon from '@mui/icons-material/Article';

export default function ListDocumentosAcreditacion(){


    const {id} = useParams()
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(listDocumentosAcreditacionFilterAction(id))
        dispatch(userDatosAction)
    }, [dispatch])

    const documentosAcreditacionFilterList =useSelector(state => state.documentosAcreditacionFilterList)
    const {error,loading,doc_acreditacion_filter} = documentosAcreditacionFilterList
   
    const userDatos =useSelector(state => state.userDatos)
    const {error : errorUserdatos,loading:loadingUserdatos,userInfo_datos} = userDatos
    //console.log(userInfo_datos)

    let id_usuario
    if (userInfo_datos && userInfo_datos.id){
      id_usuario = userInfo_datos.id
    }else{
      id_usuario = 0
    }

    let tempo_user = false
    if (userInfo_datos){
      if (userInfo_datos.is_administrativo3){
          tempo_user = true
    }
  }

    //console.log('id_usario')
    console.log(userInfo_datos)

    
    
    //console.log(doc_acreditacion_filter)
    
    return(
        <>
        <NavbarIST/>
        <div>
            <h3 className='text-4xl font-bold text-center text-indigo-900'>Documentos</h3>

        
            <div className='m-8'>
            <table className=" m-2 pt-10 shadow-md  " >
            <thead className='bg-gray-200  '>
                <tr className='text-center'>
                    <th className='pt-4'>Indicador</th>
                    <th className='pt-4'>Evidencia</th>
                    <th className='pt-4'>Key</th>
                    <th className='pt-4'>Doc</th>
                    <th className='pt-4'>Cargar</th>
                    <th className='pt-4'> Resp</th>
                    <th className='pt-4'>Ver</th>
                    <th className='pt-4'>Entrega</th>
                    <th className='pt-4'>Carrera</th>
                    <th className='pt-4'>Coord. Inst</th>
                    <th className='pt-4'>Otras</th>
                    <th className='pt-4'>Digitador</th>
                 

                </tr>
            </thead>
            <tbody>
                {
                    doc_acreditacion_filter.map((item,index)=>(
                        <tr key={index} className='border px-4 py-1 text-center'>
                            <td className='pt-4 '>{item.indicador}</td>
                            <td className='pt-4 px-2'>{item.evidencia}</td>
                            <td className='pt-4 px-2'>{item.numeracion}</td>
                            <td className='pt-4 px-2'> {item.documento}</td>
                            <td className='pt-4 px-2'> {id_usuario == item.responsable_id ? <a href={`/documentos_acreditacion/subir_archivo/${item.id}/${id}`}><VerticalAlignTopIcon/></a> : <> No autorizado </> }  </td>
                            <td className='pt-4'>{item.responsable}</td>
                            <td className='pt-4 px-2'> {item.archivo ? <a href={'http://localhost:8002'+item.archivo}><ArticleIcon/></a> : <> </>} </td>
                            <td className='pt-4 px-2'>{item.fecha_limite}</td>
                            <td className='pt-4'>{item.coor_carrera}</td>
                            <td className='pt-4'>{item.coor_institucionales}</td>
                            <td className='pt-4 px-2'>{item.otras_comisiones}</td>
                            <td className='pt-4'>{item.digitador}</td>
                           
                        </tr>
                    ))
                }
            </tbody>
        </table>
        {tempo_user ? 
        <div className='pt-5 pb-3 text-lg text-blue-600 '>
        <a  href={`/documentos_acreditacion/register/${id}`}> + Nuevo documento</a>
        </div>
        :
        <>
        </>
        }
       
            </div>

        </div>
        </>
    )
}