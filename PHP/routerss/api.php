<?php
    include_once 'controllers/TaskController.php';
    include_once 'controllers/AuthController.php';

    // Rota para criar uma tarefa
    if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_GET['action']) && $_GET['action'] == 'create_task') {
        $controller = new TaskController();
        $controller->createTask($_POST['title'], $_POST['description']);
    }

    // Rota para listar tarefas
    if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['action']) && $_GET['action'] == 'get_tasks') {
        $controller = new TaskController();
        $controller->getTasks();
    }
?>
