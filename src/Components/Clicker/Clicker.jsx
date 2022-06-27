

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Clicker.css';
 
const Clicker = (props) => {

    let llevameDestino = useNavigate();

    const viajar = () => {
        llevameDestino(props.path)
    }

     return (
         <div className='clickerDesign' onClick={()=>viajar()}>{props.destino}</div>
     )
}
export default Clicker;