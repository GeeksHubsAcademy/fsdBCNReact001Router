
import React from 'react';
import Clicker from '../../Components/Clicker/Clicker';
import './Register.css';

const Register = () => {

    return(
        <div className='designRegister'>
            soy Register, quiero que entres en mi secta.
            <Clicker destino="Home" path="/"/>
        </div>
    )
};

export default Register;