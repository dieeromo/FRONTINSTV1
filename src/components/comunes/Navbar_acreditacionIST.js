import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, userDatosAction } from '../../actions/userActions';
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

export default function Navbar_acreditacion() {
  const navigate = useNavigate();
  const path = `/login`;
 
  const logoutHandler = () => {
    dispatch(logout());
    navigate(path)
  };



  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {

    dispatch(userDatosAction());
  }, [dispatch]);


  const userDatos = useSelector(state => state.userDatos);
  const { error: userError, loading: userLoading, userInfo_datos } = userDatos;



  let isLoggedIn = false;

  if (userInfo && userInfo.access) {
    isLoggedIn = true;
  }



  return (
    <nav className="bg-green-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
         
          <span  className="text-white text-xl font-bold mr-4"> <a href='/'>ISTVIF</a> </span>
  
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
          <span className="text-white text-xl mr-4" >{userInfo_datos? <>{userInfo_datos.first_name }</>: <></>}</span>
          
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
