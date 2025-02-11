<?php
class Task {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }


    public function create($descricao, $tarefa, $utilizador, $categoria) {
        try {
            $sql = "INSERT INTO entradas (descricao, tarefa, utilizador, categoria) 
                    VALUES (:descricao, :tarefa, :utilizador, :categoria)";

            $stmt = $this->pdo->prepare($sql);

            $stmt->bindParam(':descricao', $descricao);
            $stmt->bindParam(':tarefa', $tarefa);
            $stmt->bindParam(':utilizador', $utilizador);
            $stmt->bindParam(':categoria', $categoria);

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
}
?>
