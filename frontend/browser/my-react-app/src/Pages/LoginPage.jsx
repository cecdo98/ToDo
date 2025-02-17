import { useState } from "react";
import ButtonLogin from "../components/Buttons/ButtonLogin"
import ButtonRegister from "../components/Buttons/ButoonRegister";

function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    return(
    <div className="loginBody">
        <form className="Mainform" onSubmit={(e) => e.preventDefault()}>
            <div>
                <h2>Login</h2>
            </div>

            <div >
                <div className="login">
                    <label htmlFor="email"><b>Email: </b></label>
                        <input type="email" 
                        placeholder="Enter email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                        />

                    <label htmlFor="password"><b>Password</b></label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                </div>
               
                <div className="buttonsLogin">
                    <div>
                        <ButtonLogin email={email} password={password} />
                    </div>
                    <div>
                        <ButtonRegister type="handleRegister" />
                    </div>
                </div>
            </div>

        </form>
    </div>

    )



}

export default LoginPage