import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonNewRegister from "../components/Login_Register/ButtonNewRegister";

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
    };

    return (
        <div className="RegisterBody">
            <div className="RegisterForm">
                <form onSubmit={handleRegister}>
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
                        <i className='bx bxs-user'></i>
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
                        <i className='bx bx-envelope'></i>
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
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    
                    <div className="buttonsLogin">
                        <div>
                            <ButtonNewRegister name={name} email={email} password={password} />
                        </div>
                        <div>
                            <button 
                                className="buttonLogin"
                                type="button"
                                onClick={() => navigate("/")}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;