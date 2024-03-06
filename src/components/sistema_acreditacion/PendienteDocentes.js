
import NavAcreditacion from './NavAcreditacion'
import {SelectorDocPendientes_docentes} from './norender/Selectores'
import { useSelector } from 'react-redux'
import MUIDataTable from 'mui-datatables';
import {RUTA_SERVIDOR} from '../../ApiRoutes'

export default function PendienteDocentes(){
   
   

    const userDatos = useSelector(state => state.userDatos);
    const { error: userError, loading: userLoading, userInfo_datos } = userDatos;

 

    let pendientes_docentes = []
    pendientes_docentes = SelectorDocPendientes_docentes(userInfo_datos.id)
    console.log(pendientes_docentes )
   

    const columns = [ 
        {
            name: 'criterio',
            label : 'criterio'
        },
        {
            name: 'subCriterio',
            label: 'subcriterio',
        },
        {
            name: 'indicador',
            label:'indicador'
        },
        {
            name: 'evidencia',
            label: 'evidencia'
        },
        {
            name: 'documento',
            label: 'documento'
        },
        {
            name: 'responsable',
            label:'resp'
          },
          {
            name: 'id',
            label:'up',
            options: {
              customBodyRender: (value, tableMeta) => (
                
                // el primero es id_evidnecia y el segundo es el id del documento 
                 <a href={`/documentos_acreditacion/subir_archivo/docente/${tableMeta.rowData[6] }`}> up</a> 
                 
              ),
            },
          },
          {
            name: 'archivo',
            label: 'Archivo',
            options: {
              customBodyRender: (value, tableMeta) => (
                tableMeta.rowData[7] ? 
                <a href={RUTA_SERVIDOR+`${tableMeta.rowData[7]}`}>Ver</a>
                :
                <></>
              ),
            },
          },
          {
            name: 'digitador',
            label:'Dig'
          },
    ]

    const options = {
        selectableRows: 'none', // Deshabilita la selección en la primera fila
        // Otras opciones...
      };

    

    return(
        <>
        <NavAcreditacion/>
        <div>
            <div>
                <MUIDataTable
                title = {'Documentos pendientes acreditación'}
                data = {pendientes_docentes}
                columns = {columns}
                options={options}
                />
            </div>
        </div>
        </>
    )
}