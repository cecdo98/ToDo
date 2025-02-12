<?php
    include_once 'config/db.php';

    class AuthController{
        private $pdo;

        public function __construct($pdo) {
            $this->pdo = $pdo;
        }

        public function login($email, $password){
            $sql= "SELECT * FROM registos WHERE email = :email AND password = :password";

            $stmt = $this->pdo->prepare($sql);

            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':password', $password);

            $stmt->execute();

            return $stmt->fetch(PDO::FETCH_ASSOC) !== false;
        }

        public function register($email, $password, $name){
            try{
                $sql= "INSERT INTO registos(email,utilizador ,password) 
                VALUES (:email,:utilizador,:password)";

                $stmt = $this->pdo->prepare($sql);

                $stmt->bindParam(':email', $email);
                $stmt->bindParam(':utilizador', $name);
                $stmt->bindParam(':password', $password);

                return $stmt->execute(); 
            } catch (PDOException $e) {
                echo "Erro ao criar o utilizador: " . $e->getMessage();
                return false;
            }
        }
    }


?>