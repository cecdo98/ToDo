import ButtonEdit from "./ButtonEdit";
import ButtonDone from "./ButtonDone";

function Note({Notes}){

    return(
        <div>
            {Notes.map((note) =>(
            <div key={note.id} className="note" >
                <div  className="titulo">
                    <h2>{note.titulo}</h2>
                </div>
                <div className="conteudo">
                    <h3 className="descricao">{note.descricao}</h3>
                    <p className="tarefa">{note.tarefa}</p>
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
            ))}
        </div>
    );

}


export default Note