import {
CRITERIOS_LIST_REQUEST ,
CRITERIOS_LIST_SUCCESS ,
CRITERIOS_LIST_FAIL ,

PROCESO_EVALUACION_LIST_REQUEST,
PROCESO_EVALUACION_LIST_SUCCESS ,
PROCESO_EVALUACION_LIST_FAIL,

} from '../constants/criteriosConstants'


export const procesosEvaluacionListReducer = (state = { procesos_evaluacion_Lista: [] }, action) => {
    switch (action.type) {
        case CRITERIOS_LIST_REQUEST:
            return { loading: true, procesos_evaluacion_Lista: [] }

        case CRITERIOS_LIST_SUCCESS:
            return { loading: false, procesos_evaluacion_Lista: action.payload }

        case CRITERIOS_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const criteriosListReducer = (state = { criterios_Lista: [] }, action) => {
    switch (action.type) {
        case CRITERIOS_LIST_REQUEST:
            return { loading: true, criterios_Lista: [] }

        case CRITERIOS_LIST_SUCCESS:
            return { loading: false, criterios_Lista: action.payload }

        case CRITERIOS_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}