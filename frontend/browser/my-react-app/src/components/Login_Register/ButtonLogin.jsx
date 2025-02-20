import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";



function ButtonLogin({ email, password }){
    
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            if (email === "Email não recebido") return;
            try {
                const response = await fetch(`http://localhost/todo/backend/routers/api.php?email=${email}&action=get_user`);
                const userData = await response.json();
                setUser(userData.user);
            } catch (error) {
                console.error("Erro ao buscar utilizador:", error);
            }
        };

        fetchUser();
    }, [email]);

    
    const handleLogin = async () => {
        setLoading(true);

        const response = await fetch('http://localhost/todo/backend/routers/api.php?action=login', 
                        {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email, password})
                        });

        const data = await response.json();
        setLoading(false);

        if(data.success) {
            alert("Login bem-sucedido!");
            navigate("/main", { 
                state: { 
                    email: email,
                    user: user 
                }
            });
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
