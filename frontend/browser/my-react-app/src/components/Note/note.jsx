import ButtonEdit from "./ButtonEdit";
import ButtonDone from "./ButtonDone";
import ButtonDelete from "./ButtonDelete";
import { useState, useEffect } from "react";

function Note({email}){

    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");

    //carregar todos os notes do email correspondente
    useEffect(() => {
        const fetchTasks = async () => {
            if (email === "Email não recebido") return; 
            try {
                const response = await fetch(`http://localhost/todo/backend/routers/api.php?email=${email}`);
                const data = await response.json();
                setNotes(data);
            } catch (error) {
                console.error("Erro ao buscar tarefas:", error);
            }
        };

        fetchTasks();
    }, [email]); 

    function handleInputChange(event){

    }

    function addNote(){

    }

    function deleteNote(index){

    }

    /*funtion para mover notes para cima e baixo */


    return(
        <div>
            {notes.map((note) =>(
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
                        <div className="buttonDelete">
                            <ButtonDelete/>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );

}


export default Note