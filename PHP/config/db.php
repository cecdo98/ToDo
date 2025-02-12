<?php

    $host = 'localhost';  
    $dbname = 'todo_list';  
    $username = 'root';  
    $password = '';  

    try{
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Ligado com sucesso!<br>"; 
        
    } catch (PDOException $e) {
        
        echo "Erro ao ligar: " . $e->getMessage();
    }
?>