
import NavAcreditacion from './NavAcreditacion'
import {SelectorDocPendientes_docentes} from './norender/Selectores'
import { useSelector} from 'react-redux'
import MUIDataTable from 'mui-datatables';
export default function PendienteDocentes  () {
    console.log('holaa')
   

    const userDatos = useSelector(state => state.userDatos);
    const { error: userError, loading: userLoading, userInfo_datos } = userDatos;
  
    let pendientes_docentes = []
    pendientes_docentes = SelectorDocPendientes_docentes(userInfo_datos.id)
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
        }
    ]

    return (
        <>
        <NavAcreditacion/>
            <div>
                <h2> Mis pendientes</h2>
            </div>
            <div>
                <MUIDataTable
                title = {'Documentos pendientes acreditación'}
                data = {pendientes_docentes}
                columns = {columns}
                />
            </div>
        </>
    )
}





//////////////



// import NavAcreditacion from './NavAcreditacion'
// import {SelectorDocPendientes_docentes} from './norender/Selectores'
// import { useSelector, useDispatch, connect } from 'react-redux'
// import { useEffect } from 'react';
// import {listDocumentosAcreditacionDocenteAction} from './actions/docPendientesConstants'


// const PendienteDocentes = ({ listDocumentosAcreditacionDocenteAction, PendienteDocentes }) => {
//     console.log('holaa')
   

//     const userDatos = useSelector(state => state.userDatos);
//     const { error: userError, loading: userLoading, userInfo_datos } = userDatos;
  
//    console.log(userInfo_datos)

//    useEffect(()=>{
//      listDocumentosAcreditacionDocenteAction(userInfo_datos.id)
//    },[])




//     return (
//         <>
//         <NavAcreditacion/>
//             <div>
//                 <h2> Mis pendientes</h2>
//             </div>
//         </>
//     )
// }

// const mapStateToProps = state => ({
//     documentosAcreditacionDocenteList : state.documentosAcreditacionDocenteList.doc_acreditacion_docente
// })

// export default connect(mapStateToProps, {listDocumentosAcreditacionDocenteAction})(PendienteDocentes)