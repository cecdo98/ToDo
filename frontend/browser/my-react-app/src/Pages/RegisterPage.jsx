import { useState } from "react";
import { useNavigate } from "react-router-dom";


function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const navigate= useNavigate();

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
    navigate("/main");
                      
    };

    return (
        <div className="RegisterBody">
            <div className="RegisterForm">
                <form  onSubmit={handleRegister}>
                        <h1>Registo</h1>


                    <div className="register">
                        <label htmlFor="text"></label>
                            <input 
                                type="text" 
                                placeholder="Nome" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                            <i class='bx bxs-user'></i>
                    </div>
                    <div className="register">
                        <label htmlFor="email"></label>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                            <i class='bx bx-envelope'></i>
                    </div>
                    <div className="register">
                        <label htmlFor="password"></label>
                            <input 
                                type="password" 
                                placeholder="Senha" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                            <i class='bx bxs-lock-alt'></i>
                    </div>

                    <div className="buttonsLogin">
                        <div>
                            <button className="buttonRegister" type="submit">Registrar</button>
                            {message && <p>{message}</p>}
                        </div>
                        <div>
                            <button className="buttonLogin" 
                                        type="button" 
                                    onClick={() => navigate("/")}>Login
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
