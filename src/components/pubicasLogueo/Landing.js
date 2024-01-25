
import '../../App.css'
import NavbarIST from '../comunes/NavbarIST'
import {userDatosAction } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

import { useEffect} from 'react';

export default function Landing() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userDatosAction ())
    }, [dispatch])
    const userDatos =useSelector(state => state.userDatos)
    const {error,loading,userInfo_datos} = userDatos


    console.log(userInfo_datos)

     return (
        <>
        <NavbarIST/>
            
            <div className='landing-container'>
                <p>Este es el landing</p>
            </div>
        </>
    )
}