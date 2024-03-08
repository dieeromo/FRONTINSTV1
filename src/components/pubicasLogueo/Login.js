import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions';
import { useNavigate, Link } from 'react-router-dom'; // Importa Link de react-router-dom
import Messages from '../comunes/Messages';
import Loader from '../comunes/Loader';
import Navbar_inicio from '../comunes/Navbar_inicio';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const navigate = useNavigate();
  const path = '/';
  const isLoggedIn = userInfo && userInfo.access;

  useEffect(() => {
    if (isLoggedIn) {
      navigate(path);
    }
  }, [isLoggedIn, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <Navbar_inicio />
      {error && <Messages>{error}</Messages>}
      {loading ? (
        <Loader />
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="login-container bg-white p-8 rounded-md shadow-md max-w-md w-full">
            <h3 className="text-3xl font-bold mb-4 text-center">Iniciar Sesión</h3>
            <form onSubmit={submitHandler}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Ingresar email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Ingresar contraseña"
                />
              </div>

              <div className="mb-4">{/* Additional options or elements here if needed */}</div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Iniciar Sesión
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-2">
                  No tienes una cuenta aún?{' '}
                  <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Registrarse
                  </Link>
                </p>
              </div>
            </form>
            {userInfo ? <> Usuario o contraseña invalidos </>: <></>}
          </div>
        </div>
      )}
    </> 
  );
}
