<?php
class Agendamento {
    private $conn;
    private $table_name = "agendamentos";

    public $id;
    public $id_usuario;
    public $material;
    public $quantidade_kg;
    public $data_coleta;
    public $hora_coleta;
    public $status;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function criar() {
        $query = "INSERT INTO " . $this->table_name . "
        (id_usuario, material, quantidade_kg, data_coleta, hora_coleta)
        VALUES (:id_usuario, :material, :quantidade_kg, :data_coleta, :hora_coleta)";
        
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":id_usuario", $this->id_usuario);
        $stmt->bindParam(":material", $this->material);
        $stmt->bindParam(":quantidade_kg", $this->quantidade_kg);
        $stmt->bindParam(":data_coleta", $this->data_coleta);
        $stmt->bindParam(":hora_coleta", $this->hora_coleta);

        return $stmt->execute();
    }

    public function listarTodos() {
        $query = "SELECT * FROM " . $this->table_name . " ORDER BY criado_em DESC";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function aceitar() {
        $query = "UPDATE " . $this->table_name . " SET status='aceito' WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $this->id);
        return $stmt->execute();
    }
}
