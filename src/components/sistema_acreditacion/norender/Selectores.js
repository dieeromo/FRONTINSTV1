import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import {listDocumentosAcreditacionDocenteAction} from '../actions/docPendientesConstants'


export  function SelectorDocPendientes_docentes(id) {
    const dispatch = useDispatch();

    const userDatos = useSelector(state => state.userDatos)
    const {error : errorUserdatos,loading:loadingUserdatos,userInfo_datos} = userDatos
    //console.log(userInfo_datos)

    let id_usuario
    if (userInfo_datos && userInfo_datos.id){
      id_usuario = userInfo_datos.id
    }else{
      id_usuario = 0
    }


    useEffect(() => {
            dispatch(listDocumentosAcreditacionDocenteAction(id))
    }, [dispatch])

    


    const documentosAcreditacionDocenteList = useSelector(state => state.documentosAcreditacionDocenteList)
    const { error, loading, doc_acreditacion_docente } = documentosAcreditacionDocenteList

    const lista_documentos_pendientes = doc_acreditacion_docente.map((item) => ({
        label: item.material,
        value: item.id,

        id:item.id,
        criterio : item.criterio,
        subCriterio: item.subCriterio,
        indicador: item.indicador,
        evidencia: item.evidencia,
        documento: item.documento,
        responsable:item.responsable,
        archivo : item.archivo,
        digitador : item.digitador
    }))


    

    return ( lista_documentos_pendientes )
}
