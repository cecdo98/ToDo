import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ButtonNewTask({ email, token }) {
    const navigate = useNavigate();
    const [newModeOpen, setNewModeOpen] = useState(false);
    const [newNoteData, setNewNoteData] = useState({ titulo: "", descricao: "", tarefa: "" });

    function toggleNewTask() {
        setNewModeOpen(!newModeOpen);
    }

    async function addTasks(e) {
        e.preventDefault();
        
    
        try {
            const response = await fetch(`http://localhost/todo/backend/routers/api.php`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ 
                    action: "create_task",
                    titulo: newNoteData.titulo,
                    descricao: newNoteData.descricao,
                    tarefa: newNoteData.tarefa,
                    email: email
                }),
            });
    
            
            const result = await response.json();
    
    
            if (result.success) {
                setNewNoteData({ titulo: "", descricao: "", tarefa: "" });
                setNewModeOpen(false);
                window.location.reload();
            } else {
                console.error("Erro ao adicionar tarefa:", result.message);
            }
    
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    }

    return (
        <>
            <button className="buttonHeader" onClick={toggleNewTask}>
                Nova tarefa
            </button>

            {newModeOpen && (
                <div className="modalOverlay">
                    <div className="modalContent">
                        <h2>Nova tarefa:</h2>
                        <form onSubmit={addTasks}>
                            <input
                                type="text"
                                placeholder="Título"
                                value={newNoteData.titulo}
                                onChange={(e) => setNewNoteData({ ...newNoteData, titulo: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="Descrição"
                                value={newNoteData.descricao}
                                onChange={(e) => setNewNoteData({ ...newNoteData, descricao: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="Tarefa"
                                value={newNoteData.tarefa}
                                onChange={(e) => setNewNoteData({ ...newNoteData, tarefa: e.target.value })}
                            />

                            <button type="submit">Guardar</button>
                            <button type="button" onClick={() => setNewModeOpen(false)}>Cancelar</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default ButtonNewTask;
