<?php
class Database {
    private $host = "localhost";
    private $db_name = "recolhe360";
    private $username = "root"; // ou o seu usuário
    private $password = "Dougtaboao7452#";     // sua senha
    public $conn;

    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host={$this->host};dbname={$this->db_name}", 
                                  $this->username, $this->password);
            $this->conn->exec("set names utf8");
        } catch(PDOException $exception) {
            echo "Erro de conexão: " . $exception->getMessage();
        }
        return $this->conn;
    }
}
