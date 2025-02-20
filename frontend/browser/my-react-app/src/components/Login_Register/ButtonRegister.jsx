import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function ButtonRegister(){

    const navigate= useNavigate();

    const handleClick = () =>{
        navigate("/register");
    }

    return(
        <button className='buttonRegister' onClick={handleClick}>Registo</button>
    )


}

export default ButtonRegister