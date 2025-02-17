import { useState } from "react";

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost/todo/backend/routers/api.php?action=register", 
                        {
                            method: "POST",
                            headers: {"Content-Type": "application/json"},
                            body: JSON.stringify({ email, password, name }),
                        });

        const data = await response.json();
        setMessage(data.message);
    };

    return (
        <form className="registerForm" onSubmit={handleRegister}>
            <div>
                <h2>Registo</h2>
            </div>

            <div className="register">
                <label htmlFor="text"><b>Nome: </b></label>
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />

                <label htmlFor="email"><b>Email: </b></label>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />

                <label htmlFor="password"><b>Password: </b></label>
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
            </div>
            <div className="buttonsLogin">
                <div>
                    <button className="buttonRegister" type="submit">Registrar</button>
                    {message && <p>{message}</p>}
                </div>
                <div>
                    <button className="buttonLogin">Login</button>
                </div>

            </div>
        </form>
    );
}

export default RegisterPage;
