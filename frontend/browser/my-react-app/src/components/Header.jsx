function Header() {

    return(
        <header>
            <h1>ToDo lista</h1>
            <nav >
                <div className="header">
                    <div><btn className="buttonHeader" href="">Nova tarefa </btn></div>
                    <div><btn className="buttonHeader" href=""> Definições</btn></div>
                </div>
            </nav>
        </header>
    );
}

export default Header