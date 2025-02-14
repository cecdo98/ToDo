import ButtonLogin from "../components/Buttons/ButtonLogin"

function LoginPage(){
    console.log("LoginPage carregada"); 
    
    return(
        <form className="Mainform">
            <div>
                {/*Imagem */}
            </div>

            <div className="container">
                <div className="login">
                    <label for="username"><b>Username </b></label>
                    <input type="text" placeholder="Enter Username" name="username" />

                    <label for="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" />
                </div>
               
                    <ButtonLogin/>
                
                 
            </div>

        </form>

    )



}

export default LoginPage