<?php
    class TaskController {
        private $pdo;

        public function __construct($pdo) {
            $this->pdo = $pdo;
        }


        public function create($descricao, $tarefa, $categoria, $email) {
            try {
                $sql = "INSERT INTO entradas (descricao, tarefa, categoria,email) 
                        VALUES (:descricao, :tarefa, :categoria, :email)";

                $stmt = $this->pdo->prepare($sql);

                $stmt->bindParam(':descricao', $descricao);
                $stmt->bindParam(':tarefa', $tarefa);
                $stmt->bindParam(':categoria', $categoria);
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
            $sql = "SELECT * FROM entradas WHERE email = :email";
            $stmt = $this->pdo->prepare($sql);
            $stmt->bindParam(':email', $email);
            $stmt->execute();
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