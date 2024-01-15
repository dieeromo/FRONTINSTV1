

import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {listCriteriosAction} from '../../../actions/criteriosActions'

export function SelectorCriterio(){
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(listCriteriosAction())
    }, [dispatch])

    const criteriosList = useSelector(state => state.criteriosList)
    const {error,loading,criterios_Lista} = criteriosList

    
    const lista_criterios = criterios_Lista.map((item) =>({
        label: item.criterio,
        value : item.id,
        id : item.id,

        numeracion:item.numeracion,
        criterio: item.criterio,
       estadoVF: item.estadoVF,
       fecha_creacion: item.fecha_creacion,
       observacion: item.observacion,
       digitador: item.digitador,
       responsable: item.responsable,
       procesoEvaluacion: item.procesoEvaluacion

    }))
    return(lista_criterios)
}

