<?php
    include_once 'config/db.php';  

    include_once 'models/Task.php';

    $task = new Task($pdo);  

    $descricao = 'Consulta';
    $tarefa = 'Consulta dia 10 de março';
    $utilizador = 'Carlos';
    $categoria = 'Hospital';

    $success = $task->create($descricao, $tarefa, $utilizador, $categoria);

    if ($success) {
        echo "\nTarefa criada com sucesso!";
    } else {
        echo "Erro ao criar a tarefa!";
    }


?>
