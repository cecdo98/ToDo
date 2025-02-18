import { useState } from "react";
import ButtonLogin from "../components/Buttons/ButtonLogin"
import ButtonRegister from "../components/Buttons/ButoonRegister";

function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    return(
    <div className="loginBody">
        <div className="Mainform">
            <form  onSubmit={(e) => e.preventDefault()}>
                    <h1>Login</h1>
                <div className="login">
                        <input type="email" 
                        placeholder="Enter email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                        />
                    <i class='bx bxs-user'></i>
                </div>
                <div className="login">
                        <input 
                        type="password" 
                        placeholder="Enter Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        />
                    <i class='bx bxs-lock-alt' ></i>
                </div>
                <div className="remember">
                    <label>
                        <input 
                        type="checkbox"/> Remember me </label>
                        <a href="">Forget password?</a>
                </div>

                    <div className="buttonsOfLogin">
                        <div>
                            <ButtonLogin email={email} password={password} />
                        </div>
                        <div>
                            <ButtonRegister type="handleRegister" />
                        </div>
                    </div>
            </form>
        </div>
    </div>

    )



}

export default LoginPage