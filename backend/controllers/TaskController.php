<?php
    class TaskController {
        private $pdo;

        public function __construct($pdo) {
            $this->pdo = $pdo;
        }


        public function create($titulo, $descricao, $tarefa, $email) {
            try {
                $sql = "INSERT INTO entradas (titulo,descricao, tarefa,email) 
                        VALUES (:titulo, :descricao, :tarefa, :email)";

                $stmt = $this->pdo->prepare($sql);

                $stmt->bindParam(':titulo', $titulo);
                $stmt->bindParam(':descricao', $descricao);
                $stmt->bindParam(':tarefa', $tarefa);
                $stmt->bindParam(':email', $email);

                return $stmt->execute(); 
            } catch (PDOException $e) {
                echo "Erro ao criar a tarefa: " . $e->getMessage();
                return false;
            }
        }

        public function getTasks() {
            try {
                $sql = "SELECT * FROM entradas";
                $stmt = $this->pdo->query($sql);
                return $stmt->fetchAll(PDO::FETCH_ASSOC);
            } catch (PDOException $e) {
                echo "Erro ao obter as tarefas: " . $e->getMessage();
                return [];
            }
        }

        public function getTaskByEmail($email) {
            $stmt = $this->pdo->prepare("SELECT * FROM entradas WHERE email = ?");
            $stmt->execute([$email]);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        
        public function deleteTask($id) {
            try {
                $sql = "DELETE FROM entradas WHERE id = :id";
                $stmt = $this->pdo->prepare($sql);
                $stmt->bindParam(':id', $id, PDO::PARAM_INT);
                $stmt->execute();
        
                return ["success" => true, "message" => "Tarefa apagada com sucesso!"];
            } catch (PDOException $e) {
                return ["success" => false, "message" => "Erro ao apagar a tarefa: " . $e->getMessage()];
            }
        }

        public function updateTask($id, $titulo, $descricao, $tarefa) {
            $sql = "UPDATE entradas SET titulo = ?, descricao = ?, tarefa = ? WHERE id = ?";
            $stmt = $this->pdo->prepare($sql);
            return $stmt->execute([$titulo, $descricao, $tarefa, $id]);
        }
        
        
    }
?>