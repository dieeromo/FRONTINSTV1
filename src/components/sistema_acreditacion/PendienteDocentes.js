
import NavAcreditacion from './NavAcreditacion'
import {SelectorDocPendientes_docentes} from './norender/Selectores'
import { useSelector } from 'react-redux'
export default function PendienteDocentes(){


    

    return(
        <>
        <NavAcreditacion/>
        <div>
            <h2> Mis pendientes</h2>
        </div>
        </>
    )
}