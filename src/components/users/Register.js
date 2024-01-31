  import React, { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { register } from '../../actions/userActions';
  import Messages from '../comunes/Messages';
  import Loader from '../comunes/Loader';
  import Navbar_inicio from '../comunes/Navbar_inicio';
  import { useNavigate} from 'react-router-dom';

  export default function Register() {

    const navigate = useNavigate();

    const path = `/login`;
    
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState('');  
    const [password, setPassword] = useState(''); 
    const [rePassword, setRePassword] = useState(''); 

    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister);
    const { error, loading, userInfo } = userRegister;
    

    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(register(email, firstName, lastName, password, rePassword));
      navigate(path)
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
              <h3 className="text-3xl font-bold mb-4 text-center">Registrarse</h3>
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
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Ingresar nombre"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Apellido
                  </label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Ingresar apellido"
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
                    autoComplete="new-password"
                    required
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Ingresar contraseña"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="rePassword" className="block text-sm font-medium text-gray-700">
                    Confirmar Contraseña
                  </label>
                  <input
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    id="rePassword"
                    name="rePassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Confirmar contraseña"
                  />
                </div>

                <div className="mb-4">{/* Additional options or elements here if needed */}</div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                  >
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }
