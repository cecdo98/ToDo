import { useState, useEffect } from "react";

function Note({ email, token }) {
    const [notes, setNotes] = useState([]);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editNoteData, setEditNoteData] = useState({ id: null, titulo: "", descricao: "", tarefa: "" });

    
    useEffect(() => {
        const fetchTasks = async () => {
            if (!email || email === "Email não recebido") return;
    
            try {
                const response = await fetch(`http://localhost/todo/backend/routers/api.php`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json",
                                "Authorization": `Bearer ${token}`
                     },
                    body: JSON.stringify({ 
                        action: "get_tasks",
                        email: email 
                    }),
                });
    
                const data = await response.json();

    
                // Se os dados vierem em uma propriedade específica do objeto
                if (data.success && Array.isArray(data.tasks)) {
                    setNotes(data.tasks);
                } else if (Array.isArray(data)) {
                    setNotes(data);
                } else {
                    setNotes([]);
                    console.error("Estrutura da resposta:", data);
                }
            } catch (error) {
                console.error("Erro ao buscar tarefas:", error);
                setNotes([]);
            }
        };
    

        fetchTasks();
    }, [email, token]);

    
    function editNote(note) {
        setEditNoteData(note);
        setEditModalOpen(true);
    }

    async function saveNote() {
        try {
            const response = await fetch(`http://localhost/todo/backend/routers/api.php?action=edit_task`, {
                method: "POST",
                headers: { "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                         },
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
    
    async function deleteNote(id) {
        try {
            const response = await fetch(`http://localhost/todo/backend/routers/api.php`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}` 
                        },
                body: JSON.stringify({ id })
            });

            const result = await response.json();
            if (result.success) {
                setNotes(notes.filter(note => note.id !== id));
            } else {
                console.error("Erro ao deletar a nota:", result.message);
            }
        } catch (error) {
            console.error("Erro ao deletar nota:", error);
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
                        <button className="buttonSave" onClick={saveNote}>Guardar</button>
                        <button  className="buttonCancel" onClick={() => setEditModalOpen(false)}>Cancelar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Note;
