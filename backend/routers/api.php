<?php
    //❌ estudar isto❌

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");

    include_once __DIR__ . '/../config/db.php';
    include_once __DIR__ . '/../controllers/TaskController.php';

    $taskController = new TaskController($pdo);

    // Verificar qual método HTTP está a ser usado
    $method = $_SERVER['REQUEST_METHOD'];


    if ($method === 'GET' && isset($_GET['id'])) {

        // 🔹 Buscar uma tarefa específica
        echo json_encode($taskController->getTaskById($_GET['id']));

    } elseif ($method === 'GET') {

        // 🔹 Buscar todas as tarefas
        echo json_encode($taskController->getTasks());

    } elseif ($method === 'POST') {

        // 🔹 Criar uma nova tarefa (recebe dados do frontend em JSON)
        $data = json_decode(file_get_contents("php://input"), true);
        echo json_encode($taskController->create($data['descricao'], $data['tarefa'], $data['categoria'], $data['email']));
    
    } elseif ($method === 'DELETE') {
        $data = json_decode(file_get_contents("php://input"), true);
        
        if (isset($data['id'])) {
            echo json_encode($taskController->deleteTask($data['id']));
        } else {
            echo json_encode(["success" => false, "message" => "ID não fornecido"]);
        }
    } else {
        echo json_encode(["message" => "Método não suportado"]);
    }
?>
