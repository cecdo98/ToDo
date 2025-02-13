import ButtonEdit from "./Buttons/ButtonEdit";
import ButtonDone from "./Buttons/ButtonDone";

function Note(){

    return(
        <div className="note" >
            <div className="titulo">
                <h2>Consulta</h2>
            </div>
            <div className="conteudo">
            <h3 className="descricao">Hospital porto</h3>
            <p className="texto">Consulta dia 10 de março</p>
            </div>
            <div className="button">
                <div className="buttonEdit">
                    <ButtonEdit/>
                </div>
                <div className="buttonDone">
                    <ButtonDone/>
                </div>
            </div>
        </div>
    );
}

export default Note