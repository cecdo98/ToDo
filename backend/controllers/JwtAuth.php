<?php
require_once __DIR__ . '/../vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class JwtAuth {
    private static $secret_key = "SEGREDO_SUPER_SEGURO"; // Altera para uma chave secreta forte
    private static $algorithm = "HS256";

    public static function generateToken($email) {
        $payload = [
            "email" => $email,
            "iat" => time(), // Tempo de criação
            "exp" => time() + (60 * 60) // Expira em 1 hora
        ];

        return JWT::encode($payload, self::$secret_key, self::$algorithm);
    }

    public static function verifyToken($token) {
        try {
            $decoded = JWT::decode($token, new Key(self::$secret_key, self::$algorithm));
            return $decoded->email;
        } catch (Exception $e) {
            return false;
        }
    }
}
?>