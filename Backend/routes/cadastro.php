<?php
include_once '../config/database.php';
include_once '../models/Usuario.php';

$data = json_decode(file_get_contents("php://input"));

$db = (new Database())->getConnection();
$usuario = new Usuario($db);

$usuario->nome = $data->nome;
$usuario->email = $data->email;
$usuario->senha = $data->senha;
$usuario->tipo = $data->tipo;

if ($usuario->criar()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}
