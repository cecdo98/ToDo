<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include_once __DIR__ . '/../config/db.php';
include_once __DIR__ . '/../controllers/TaskController.php';
include_once __DIR__ . '/../controllers/AuthController.php';

$taskController = new TaskController($pdo);
$authController = new AuthController($pdo);

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET' && isset($_GET['email'])) {   //o metodo get nao é seguro mudar para post
    if (isset($_GET['action']) && $_GET['action'] === 'get_user') {  
        $user = $authController->getUserByEmail($_GET['email']);
        echo json_encode($user);
        
    } else {
        echo json_encode($taskController->getTaskByEmail($_GET['email']));
    }

} elseif ($method === 'GET') {
    echo json_encode($taskController->getTasks());

} elseif ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (isset($_GET['action'])) {

        switch ($_GET['action']) {
            case 'register':
                if (!isset($data['email'], $data['password'], $data['name'])) {
                    echo json_encode(["success" => false, "message" => "Parâmetros inválidos"]);
                    exit;
                }

                $success = $authController->register($data['email'], $data['password'], $data['name']);
                echo json_encode(["success" => $success, "message" => $success ? "Utilizador criado com sucesso!" : "Erro ao criar usuário"]);
                break;

            case 'login':
                if (!isset($data['email'], $data['password'])) {
                    echo json_encode(["success" => false, "message" => "Parâmetros inválidos"]);
                    exit;
                }

                $success = $authController->login($data['email'], $data['password']);
                echo json_encode(["success" => $success, "message" => $success ? "Login bem-sucedido!" : "Credenciais inválidas"]);
                break;

            case 'create_task':
                if (!isset($data['descricao'], $data['tarefa'], $data['categoria'], $data['email'])) {
                    echo json_encode(["success" => false, "message" => "Parâmetros inválidos"]);
                    exit;
                }

                $success = $taskController->create($data['descricao'], $data['tarefa'], $data['categoria'], $data['email']);
                echo json_encode(["success" => $success, "message" => $success ? "Tarefa criada com sucesso!" : "Erro ao criar tarefa"]);
                break;

            case 'edit_task':
                if (!isset($data['id'], $data['titulo'], $data['descricao'], $data['tarefa'])) {
                    echo json_encode(["success" => false, "message" => "Parâmetros inválidos"]);
                    exit;
                }

                $success = $taskController->updateTask($data['id'], $data['titulo'], $data['descricao'], $data['tarefa']);
                echo json_encode(["success" => $success, "message" => $success ? "Tarefa editada com sucesso!" : "Erro ao editar tarefa"]);
                break;

            default:
                echo json_encode(["success" => false, "message" => "Ação inválida"]);
                break;
        }
    }

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