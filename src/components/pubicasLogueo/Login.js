import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../../actions/userActions'
import { useNavigate } from 'react-router';
import Messages from '../comunes/Messages'
import Loader from '../comunes/Loader';
import NavbarIST from '../comunes/NavbarIST'

import {userDatosAction } from '../../actions/userActions'

import '../../App.css'




export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const disptach = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    const navigate = useNavigate();
    const path = '/';
    let tempo = false
    if(userInfo){
        if(userInfo.access){
            tempo = true
        }
    }else{
        tempo = false
    }



    useEffect(() => {
        if (userInfo) {
            //console.log("este es el mensaje")
            //console.log("USER INFO")
            //console.log(userInfo.user_name)
            //console.log("USER LOGIN")
            //console.log(userLogin)
            if(tempo){
                navigate(path);
                //console.log(userInfo)
            }
            console.log(error)
            
        }
    }, [userInfo]);





    const submitHandler = (e) => {
        e.preventDefault()
        disptach(login(email, password))
    }

    return (
        <>
        <NavbarIST/>
      
            {error && <Messages>{error}</Messages>}
            {loading ?
                <Loader /> :
                <div className="login-container">
                    <h3>Pagina de login</h3>
                    < form onSubmit={submitHandler} action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div>
                            <div >
                                <label htmlFor="email-address"> Email address </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className=""
                                    placeholder="Email address"
                                />
                            </div>


                            <div>
                                <label htmlFor="password"> Password </label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className=""
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                               
                                    </div>


                            <div>
                                <button type="submit" className="" >
                                    <span className=""> </span>
                                    Sign in
                                </button>
                            </div>
                        </div>

                    </form>
                </div>


            }
          
        </>
    )
}