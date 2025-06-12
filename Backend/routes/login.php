<?php
include_once '../config/database.php';
include_once '../models/Usuario.php';

$data = json_decode(file_get_contents("php://input"));

$db = (new Database())->getConnection();
$usuario = new Usuario($db);
$usuario->email = $data->email;
$usuario->senha = $data->senha;

$result = $usuario->login();

if ($result) {
    echo json_encode(["success" => true, "user" => $result]);
} else {
    echo json_encode(["success" => false, "message" => "Login inválido"]);
}
