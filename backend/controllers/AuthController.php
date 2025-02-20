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

            if ($user && password_verify($password, $user['password'])) {
                return $user; 
            }
        
            return false; 
        }

        public function getUserByEmail($email) {
            $sql = "SELECT utilizador FROM registos WHERE email = :email";
            
            $stmt = $this->pdo->prepare($sql);
            $stmt->bindParam(':email', $email);
            $stmt->execute();
            
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($result) {
                return [
                    "success" => true,
                    "user" => $result['utilizador']
                ];
            }
            
            return [
                "success" => false,
                "message" => "Usuário não encontrado"
            ];
        }

        public function register($email, $password, $name){
            try{
                $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        
                $sql= "INSERT INTO registos(email, utilizador, password) 
                       VALUES (:email, :utilizador, :password)";
        
                $stmt = $this->pdo->prepare($sql);
                $stmt->bindParam(':email', $email);
                $stmt->bindParam(':utilizador', $name);
                $stmt->bindParam(':password', $hashedPassword); 
        
                return $stmt->execute(); 
            } catch (PDOException $e) {
                echo "Erro ao criar o utilizador: " . $e->getMessage();
                return false;
            }
        }
    }


?>