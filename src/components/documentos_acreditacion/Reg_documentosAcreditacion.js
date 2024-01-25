import NavbarIST from '../comunes/NavbarIST'
import { SelectorCarrera, SelectorCoordinacionesInstitucionales, SelectorOtrasComisiones } from '../general/norender/Selectores'
import { SelectorUsuarios } from '../users/norender/Selectores'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Select from 'react-select'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux';
import React from 'react';
import {
    createDocumentoAcreditacionAction
} from '../../actions/documentosAcreditacionActions'
import { criteriosListReducer } from '../../reducers/criteriosReducers';


const Reg_documentosAcreditacion = ({userInfo_datos,criterios_Lista} ) => {
    
    console.log(criterios_Lista)
    
    const {id} = useParams()
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const path = (`/documentos_acreditacion/list/${id}`);
    

    const [numeracion, SetNumeracion] = useState('');
    const [documento, SetDocumento] = useState('');
    const [observacion, SetObservacion] = useState('');
    const [responsable, SetResponsable] = useState('');
    const [fechaLimite, SetFechaLimite] = useState('');

    const [carrera, SetCarrera] = useState('');
    const [coor_institucionales, Set_coor_institucionales] = useState('');
    const [otrasComisiones, Set_otrascomisiones] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createDocumentoAcreditacionAction(id,numeracion,documento,observacion,responsable,fechaLimite))

        navigate(path);
    }
    return (
        <>
            <NavbarIST />
            <div>
                <h3>Registro de nombres de documentos</h3>
                <form onSubmit={handleSubmit} method="POST" action="#">

                    <div>
                        <label htmlFor="numeracion" > Numeracion: </label>
                    </div>
                    <textarea
                        value={numeracion}
                        onChange={(e) => SetNumeracion(e.target.value)}
                        type="text"
                        id="numeracion"
                        name="mnumeracion"
                        rows={2}
                        className=""
                        placeholder="numero"
                    />

                    <div>
                        <label htmlFor="documento" > Documento: </label>
                    </div>
                    <textarea
                        value={documento}
                        onChange={(e) => SetDocumento(e.target.value)}
                        type="text"
                        id="documento"
                        name="mdocumento"
                        rows={2}
                        className=""
                        placeholder="numero"
                    />

                    <div>
                        <label htmlFor="observacion" > Observacion: </label>
                    </div>
                    <textarea
                        value={observacion}
                        onChange={(e) => SetObservacion(e.target.value)}
                        type="text"
                        id="observacion"
                        name="mobservacion"
                        rows={2}
                        className=""
                        placeholder="numero"
                    />


                    <div>
                        <label htmlFor="responsable">Docente responsable:</label>
                        <Select
                            options={SelectorUsuarios()}
                            onChange={(e) => SetResponsable(e.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="carrera">Carrera:</label>
                        <Select
                            options={SelectorCarrera()}
                            onChange={(e) => SetCarrera(e.value)}
                        />
                    </div>


                    <div>
                        <label htmlFor="Coordinaciones_institucionales">Coordinaciones institucionales:</label>
                        <Select
                            options={SelectorCoordinacionesInstitucionales()}
                            onChange={(e) => Set_coor_institucionales(e.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="otras_comisiones">Otras comisiones:</label>
                        <Select
                            options={SelectorOtrasComisiones()}
                            onChange={(e) => Set_otrascomisiones(e.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="fecha_limite">Fecha entrega:</label>
                        <input
                            value={fechaLimite}
                            onChange={(e) => SetFechaLimite(e.target.value)}
                            type="date"
                            id="fecha_limite"
                            name="fecha_limite" />
                    </div>




                    <button type='submit'> Guardar </button>

                </form>
            </div>
        </>
    )
}


// const mapStateToProps = (state) =>({
//     userInfo_datos : state.userDatos
// })

const mapStateToProps = (state) =>{
    return{
        userInfo_datos : state.userDatos,
        criterios_Lista: state.criteriosList

    }
}


export default connect (mapStateToProps)(Reg_documentosAcreditacion)