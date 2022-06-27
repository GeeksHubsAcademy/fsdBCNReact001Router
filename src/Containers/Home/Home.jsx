
import React from 'react';
import Clicker from '../../Components/Clicker/Clicker';
import './Home.css';

const Home = () => {

    return(
        <div className='designHome'>
            soy Home, odio el calor.
            <Clicker destino="Login" path="/login"/>
        </div>
    )
};

export default Home;