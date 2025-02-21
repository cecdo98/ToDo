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

        public function register($email, $password, $name) {
            try {
                // Verifica se o e-mail já está em uso
                $stmt = $this->pdo->prepare("SELECT COUNT(*) FROM registos WHERE email = :email");
                $stmt->bindParam(':email', $email);
                $stmt->execute();
                $count = $stmt->fetchColumn();
        
                if ($count > 0) {
                    // Se o e-mail já existe, retorna false e uma mensagem específica
                    return [
                        "success" => false,
                        "message" => "Este email já está em uso"
                    ];
                }
        
                // Caso contrário, cria o utilizador
                $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        
                $sql = "INSERT INTO registos(email, utilizador, password) 
                        VALUES (:email, :utilizador, :password)";
        
                $stmt = $this->pdo->prepare($sql);
                $stmt->bindParam(':email', $email);
                $stmt->bindParam(':utilizador', $name);
                $stmt->bindParam(':password', $hashedPassword);
        
                $success = $stmt->execute();
        
                // Se o registo for bem-sucedido, retorna true com uma mensagem de sucesso
                return [
                    "success" => $success,
                    "message" => $success ? "Utilizador criado com sucesso!" : "Erro ao criar utilizador"
                ];
            } catch (PDOException $e) {
                return [
                    "success" => false,
                    "message" => "Erro ao criar utilizador: " . $e->getMessage()
                ];
            }
        }
        
}

?>