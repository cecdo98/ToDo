import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



function ButtonLogin(){
    
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/main");
    }
    return(
        
        <button className="buttonLogin" onClick={handleClick}>Login</button>
    );

}

export default ButtonLogin
