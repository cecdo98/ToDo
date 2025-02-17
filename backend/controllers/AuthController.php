<?php
    include_once '../config/db.php';

    class AuthController{
        private $pdo;

        public function __construct($pdo) {
            $this->pdo = $pdo;
        }

        public function login($email, $password){
            $sql= "SELECT * FROM registos WHERE email = :email";
        
            $stmt = $this->pdo->prepare($sql);
            $stmt->bindParam(':email', $email);
            $stmt->execute();
        
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
            // 🔹 Verifica se o usuário existe e se a senha está correta
            if ($user && password_verify($password, $user['password'])) {
                return true; // ✅ Login bem-sucedido
            }
        
            return false; // ❌ Falha no login
        }

        public function register($email, $password, $name){
            try{
                // 🔹 Criptografar a senha antes de salvar no banco
                $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        
                $sql= "INSERT INTO registos(email, utilizador, password) 
                       VALUES (:email, :utilizador, :password)";
        
                $stmt = $this->pdo->prepare($sql);
                $stmt->bindParam(':email', $email);
                $stmt->bindParam(':utilizador', $name);
                $stmt->bindParam(':password', $hashedPassword); // 🔹 Armazena a senha criptografada
        
                return $stmt->execute(); 
            } catch (PDOException $e) {
                echo "Erro ao criar o utilizador: " . $e->getMessage();
                return false;
            }
        }
    }


?>