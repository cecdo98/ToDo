import ButtonNewTask from "../Note/ButtonNewTask"
import ButtonOptions from "../Note/ButtonOptions";
import ButtonLogout from "../Note/ButtonLogout";


function Header({email, token, user}){

    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

    return(
        <header>
            <nav className="headerBar">
                <div className="headerText">
                    <h1>Bem-vindo, {capitalizeFirstLetter(user)}</h1>
                </div>
                <div className="headerButton">
                    <lu className="headertask">
                        < ButtonNewTask email={email} token={token} />
                    </lu>

                    <lu className="headerLogger">
                        < ButtonLogout token={token}/>
                    </lu>
                </div>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header




