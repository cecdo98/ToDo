import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function ButtonNewRegister({ name, email, password }) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            console.log('Tentando registrar:', { email, name });

            const response = await fetch("http://localhost/todo/backend/routers/api.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action: "register", email, password, name }), // <- "action" está no body!
            });

            const data = await response.json();
            console.log('Dados da resposta:', data);

            if (data.success) {
                alert("Registo realizado com sucesso!");
                navigate("/main", { state: { email, user: name } });
            } else {
                alert(data.message); 
            }

        } catch (error) {
            console.error('Erro completo:', error);
            alert("Erro ao ligar ao servidor. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button 
            className="buttonRegister" 
            onClick={handleRegister} 
            disabled={loading}
            type="button"
        >
            {loading ? "Loading..." : "Registar"}
        </button>
    );
}

export default ButtonNewRegister;
