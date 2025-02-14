import ButtonEdit from "./Buttons/ButtonEdit";
import ButtonDone from "./Buttons/ButtonDone";
import propTypes from "prop-types"

function Note(props){

    return(
        <div className="note" >
            <div className="titulo">
                <h2>{props.titulo}</h2>
            </div>
            <div className="conteudo">
            <h3 className="descricao">{props.descricao}</h3>
            <p className="texto">{props.texto}</p>
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


Note.propTypes = {
    titulo: propTypes.string,
    descricao: propTypes.string,
    texto: propTypes.string,
}


export default Note