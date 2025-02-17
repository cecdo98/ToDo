import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



function ButtonLogin({ email, password }){
    
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    const handleLogin = async () => {
        setLoading(true);

    const response = await fectch('http://localhost/backend/routers/api.php', 
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, password, action: "login"})
                    });

    const data = await response.json();
    setLoading(false);

    if(data.success) {
        alert("Login bem-sucedido!");
        navigate("/main");
    } else{
        alert("Email ou senha incorrreto!");
    }
}

    return(
        
        <button className="buttonLogin" onClick={handleLogin} disabled={loading}>
            {loading ? "Entrando..." : "Login"}
        </button>
    );

}

export default ButtonLogin;
