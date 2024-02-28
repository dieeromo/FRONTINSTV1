import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import  { logout, userDatosAction } from '../../actions/userActions'
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

export default function NavAcreditacion() {
  const navigate = useNavigate();
  const path = `/login`;

  const dispatch = useDispatch();
 
  const logoutHandler = () => {
    dispatch(logout());
    navigate(path)
  };




  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;



 

  let isLoggedIn = true;





  return (
    <nav className="bg-green-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
         
          <span  className="text-white text-xl font-bold mr-4"> <a href='/'>ITSVIF</a> </span>
  
          {isLoggedIn && (
            <>
              <a
                href="/criterios/list/"
                className="text-white px-4 py-2 hover:bg-blue-600 rounded transition-all"
              >
                Criterios
              </a>
              <a
                href="/documentos_acreditacion/all/"
                className="text-white px-4 py-2 hover:bg-blue-600 rounded transition-all"
              >
                Todo
              </a>

              <a
                href="/pendientes/docentes/acreditacion/"
                className="text-white px-4 py-2 hover:bg-blue-600 rounded transition-all"
              >
                Mis pendientes
              </a>
            </>
          )}
        </div>
        <div className="flex items-center">
          <span className="text-white text-xl mr-4" >nombre</span>
          
          {isLoggedIn ? (
            <button
              onClick={logoutHandler}
              className="text-white px-4 py-2 bg-blue-800 hover:bg-blue-600 rounded transition-all"
            >
              Salir
            </button>
          ) : (
            <a
              href="/login"
              className="text-white px-4 py-2 bg-green-500 hover:bg-green-600 rounded transition-all"
            >
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
