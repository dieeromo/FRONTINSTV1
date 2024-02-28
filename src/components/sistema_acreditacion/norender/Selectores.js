import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import {listDocumentosAcreditacionDocenteAction} from '../actions/docPendientesConstants'


export  function SelectorDocPendientes_docentes(id) {
    const dispatch = useDispatch();

  
    useEffect(() => {
            dispatch(listDocumentosAcreditacionDocenteAction(id))
    }, [dispatch])

    


    const documentosAcreditacionDocenteList = useSelector(state => state.documentosAcreditacionDocenteList)
    const { error, loading, doc_acreditacion_docente } = documentosAcreditacionDocenteList

    const lista_documentos_pendientes = doc_acreditacion_docente.map((item) => ({
        label: item.material,
        value: item.id,

        criterio : item.criterio,
        subCriterio: item.subCriterio,
        
        indicador: item.indicador,
        evidencia: item.evidencia,
        documento: item.documento,
    }))


    return ( lista_documentos_pendientes )
}
