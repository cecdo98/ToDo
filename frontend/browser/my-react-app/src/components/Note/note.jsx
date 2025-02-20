import ButtonEdit from "./ButtonEdit";
import ButtonDone from "./ButtonDone";
import { useState, useEffect } from "react";

function Note({ email }) {
    const [notes, setNotes] = useState([]);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editNoteData, setEditNoteData] = useState({ id: null, titulo: "", descricao: "", tarefa: "" });

    
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

    
    function editNote(note) {
        setEditNoteData(note);
        setEditModalOpen(true);
    }

    async function saveNote() {
        try {
            const response = await fetch(`http://localhost/todo/backend/routers/api.php?action=edit_task`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: editNoteData.id,
                    titulo: editNoteData.titulo,
                    descricao: editNoteData.descricao,
                    tarefa: editNoteData.tarefa
                })
            });
    
            const result = await response.json();
    
            if (result.success) {
                setNotes(notes.map(n => (n.id === editNoteData.id ? editNoteData : n)));
                setEditModalOpen(false);
            } else {
                console.error("Erro ao editar a nota:", result.message);
            }
        } catch (error) {
            console.error("Erro ao editar nota:", error);
        }
    }
    
    

    return (
        <div className="BodyNote">
            {notes.map((note) => (
                <div key={note.id} className="note">
                    <div className="titulo">
                        <h2>{note.titulo}</h2>
                    </div>

                    <div className="conteudo">
                        <h3 className="descricao">{note.descricao}</h3>
                        <p className="tarefa">{note.tarefa}</p>
                    </div>

                    <div className="button">
                        <div className="buttonEdit">
                            <button onClick={() => editNote(note)}>✏️</button>
                        </div>
                        <div className="buttonDone">
                            <button onClick={() => deleteNote(note.id)}>✅</button> 
                        </div>
                        <div className="buttonDelete">
                            <button onClick={() => deleteNote(note.id)}>❌</button>
                        </div>
                    </div>
                </div>
            ))}

            {/* janela de edição */}
            {editModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Editar Nota</h2>
                        <input
                            type="text"
                            value={editNoteData.titulo}
                            onChange={(e) => setEditNoteData({ ...editNoteData, titulo: e.target.value })}
                            placeholder="Título"
                        />
                        <input
                            type="text"
                            value={editNoteData.descricao}
                            onChange={(e) => setEditNoteData({ ...editNoteData, descricao: e.target.value })}
                            placeholder="Descrição"
                        />
                        <input
                            type="text"
                            value={editNoteData.tarefa}
                            onChange={(e) => setEditNoteData({ ...editNoteData, tarefa: e.target.value })}
                            placeholder="Tarefa"
                        />
                        <button onClick={saveNote}>Salvar</button>
                        <button onClick={() => setEditModalOpen(false)}>Cancelar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Note;
