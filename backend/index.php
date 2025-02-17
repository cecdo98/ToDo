<?php
    include_once 'config/db.php';  
    include_once 'controllers/TaskController.php';
    include_once 'controllers/AuthController.php';

 /*

    $authcontroller = new AuthController($pdo);

       

    //criaçao do utilizador
    $email = 'exemplo@exemplo.pt';
    $utilizador = 'admin';
    $password = '123456';

    $success_register = $authcontroller->register($email, $password, $utilizador);

    if ($success_register) {
        echo "Utilizador criado com sucesso!<br>";
    } else {
        echo "Erro ao criar o utilizador!";
    }
    

    //login
    $login = $authcontroller->login($email, $password);

    if($login) {
        echo "\nLogin efetuado com sucesso!<br>";
    } else {
        echo "Erro ao efetuar o login!";
    }




    //criacao da tarefa
    $taskcontroller = new TaskController($pdo);  
    $descricao = 'Consulta ';
    $tarefa = 'Consulta dia 10 de março';
    $categoria = 'Hospital porto';

    $success = $taskcontroller->create($descricao, $tarefa, $categoria, $email);

    if ($success) {
        echo "\nTarefa criada com sucesso!<br>";
    } else {
        echo "Erro ao criar a tarefa!";
    }
        */
?>
