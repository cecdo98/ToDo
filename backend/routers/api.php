<?php
header("Access-Control-Allow-Origin: *");  // Origin pode ser restrito ao frontend em produção
header("Access-Control-Allow-Methods: POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

include_once __DIR__ . '/../config/db.php';
include_once __DIR__ . '/../controllers/TaskController.php';
include_once __DIR__ . '/../controllers/AuthController.php';
include_once __DIR__ . '/../controllers/JwtAuth.php';

// Obtém o corpo do request JSON
$data = json_decode(file_get_contents("php://input"), true);

// Obtém o token do Header
$headers = getallheaders();
$token = isset($headers['Authorization']) ? str_replace('Bearer ', '', $headers['Authorization']) : '';

// Valida Token se necessário
$userEmail = JwtAuth::verifyToken($token);

$taskController = new TaskController($pdo);
$authController = new AuthController($pdo);

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    // Lê o "action" do corpo JSON
    $action = $data['action'] ?? '';

    switch ($action) {
        case 'register':
            if (!isset($data['email'], $data['password'], $data['name'])) {
                echo json_encode(["success" => false, "message" => "Parâmetros inválidos"]);
                exit;
            }

            $response = $authController->register($data['email'], $data['password'], $data['name']);
            echo json_encode($response);
            break;

        case 'login':
            if (!isset($data['email'], $data['password'])) {
                echo json_encode(["success" => false, "message" => "Parâmetros inválidos"]);
                exit;
            }

            $success = $authController->login($data['email'], $data['password']);
            if ($success) {
                $token = JwtAuth::generateToken($data['email']);
                echo json_encode(["success" => true, "message" => "Login bem-sucedido!", "token" => $token]);
            } else {
                echo json_encode(["success" => false, "message" => "Credenciais inválidas"]);
            }
            break;

        case 'get_tasks':
            if (!$userEmail) {
                echo json_encode(["success" => false, "message" => "Token inválido ou não fornecido"]);
                exit;
            }

            $tasks = $taskController->getTaskByEmail($userEmail);
            echo json_encode([
                "success" => true,
                "tasks" => $tasks
            ]);
            break;

        case 'create_task':
            header('Content-Type: application/json');
            ob_clean();
            $data = json_decode(file_get_contents('php://input'), true);

            if (!isset($data['titulo'], $data['descricao'], $data['tarefa'], $data['email'])) {
                echo json_encode(["success" => false, "message" => "Parâmetros inválidos"]);
                exit;
            }


            $success = $taskController->create($data['titulo'], $data['descricao'], $data['tarefa'], $data['email']);
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

        case 'get_user':
            if (!isset($data['email'])) {
                echo json_encode(["success" => false, "message" => "Email não fornecido"]);
                exit;
            }

            $user = $authController->getUserByEmail($data['email']);

            if (!$user || !is_array($user)) {
                echo json_encode([]); 
            } else {
                echo json_encode($user);
            }
            break;;

        default:
            echo json_encode(["success" => false, "message" => "Ação inválida"]);
            break;
    }

} elseif ($method === 'DELETE') {
    if (!isset($data['id'])) {
        echo json_encode(["success" => false, "message" => "ID não fornecido"]);
        exit;
    }

    $success = $taskController->deleteTask($data['id']);
    echo json_encode(["success" => $success, "message" => $success ? "Tarefa excluída!" : "Erro ao excluir tarefa"]);

} else {
    echo json_encode(["message" => "Método não suportado"]);
}
?>
