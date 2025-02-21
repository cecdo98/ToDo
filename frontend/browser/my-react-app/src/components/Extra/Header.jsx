import ButtonNewTask from "../Note/ButtonNewTask"
import ButtonOptions from "../Note/ButtonOptions";


function Header({email, token}){

    return(
        <header>
            <h1> Tarefas</h1>
            <hr></hr>
            <nav >
                <div className="header">
                    <div>
                        < ButtonNewTask email={email} token={token} />
                    </div>

                    <div>
                        < ButtonOptions />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header




