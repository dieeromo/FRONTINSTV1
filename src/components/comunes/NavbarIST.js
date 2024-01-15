
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/userActions'


export default function NavbarIST() {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    let tempo = false
    if (userInfo) {
        if (userInfo.access) {
            tempo = true
        }
    } else {
        tempo = false
    }
    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <>
            <nav className="bg-green-700 p-3 text-white ">
                <div className="container mx-auto flex items-center ">
                    {tempo ? <>
                        <a href='/criterios/list/' className='px-4 '>Criterios</a>
                        <a href='/documentos_acreditacion/all/' className='px-4 '>Todo</a>
                        <button color='inherit' onClick={logoutHandler}>Salir</button>
                    </>
                        :
                        <> <a href="/login" target="_blank" rel="noopener noreferrer" >
                            Login
                        </a> </>}
                </div>


            </nav>


        </>
    )
}
