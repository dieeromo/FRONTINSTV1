import NavbarIST from '../comunes/NavbarIST'
import {listDocumentosAcreditacionAllAction} from '../../actions/documentosAcreditacionActions'
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import MUIDataTable from "mui-datatables"

export default function TodaDocumentacionlist(){
    const dispatch = useDispatch();
    useEffect(() => {
        
        dispatch(listDocumentosAcreditacionAllAction())
    }, [dispatch])

    const documentosAcreditacionAllList =useSelector(state => state.documentosAcreditacionAllList)
    const {error,loading,doc_acreditacion_all} = documentosAcreditacionAllList
    console.log(doc_acreditacion_all)

    const columns = [
        {
            name : 'criterio',
            label:'Criterio'
        },

        {
            name : 'subCriterio',
            label:'Subcriterio'
        },
        {
            name : 'indicador',
            label:'Indicador'
        },
        {
            name : 'evidencia',
            label:'Evidencia'
        },
        {
            name : 'documento',
            label:'Documento'
        },
        {
            name:'archivo',
            label:'archivo',
            options:{
                customBodyRender: (value, tableMeta) =>(
                    <a href={`http://localhost:8002${tableMeta.rowData[5]}`}> ver</a>
                )
            }
        }
    ]

    const options = {
        selectableRows: 'none', // Deshabilita la selección en la primera fila
        // Otras opciones...
      };
    return(
        <>
        <NavbarIST/>
        <div>
            <h1>Todo</h1>
            <MUIDataTable
            title = {'all'}
            data = {doc_acreditacion_all}
            columns = {columns}
            options = {options}
            />
        </div>
        </>
    )
}