
import React from 'react';
import Clicker from '../../Components/Clicker/Clicker';
import './Login.css';

const Login = () => {

    return(
        <div className='designLogin'>
            soy Login, dame tus datos privados.
            <Clicker destino="Registro" path="/register"/>
        </div>
    )
};

export default Login;