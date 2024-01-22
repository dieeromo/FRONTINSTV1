import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/userActions';

export default function NavbarIST() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  let isLoggedIn = false;

  if (userInfo && userInfo.access) {
    isLoggedIn = true;
  }

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-white text-xl font-bold mr-4">Logo</span>
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
            </>
          )}
        </div>
        <div className="flex items-center">
          {isLoggedIn ? (
            <button
              onClick={logoutHandler}
              className="text-white px-4 py-2 bg-red-500 hover:bg-red-600 rounded transition-all"
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
