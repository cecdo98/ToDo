import { useState } from "react";

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost/todo/backend/routers/api.php?action=register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, name }),
        });

        const data = await response.json();
        setMessage(data.message);
    };

    return (
        <form onSubmit={handleRegister}>
            <h2>Cadastro</h2>
            <input 
                type="text" 
                placeholder="Nome" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
            />
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            <input 
                type="password" 
                placeholder="Senha" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            <button type="submit">Registrar</button>
            {message && <p>{message}</p>}
        </form>
    );
}

export default RegisterPage;
