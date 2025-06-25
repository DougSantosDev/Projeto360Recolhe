<?php
include_once '../config/database.php';
include_once '../models/Agendamento.php';

$data = json_decode(file_get_contents("php://input"));

$db = (new Database())->getConnection();
$agendamento = new Agendamento($db);

$agendamento->id_usuario = $data->id_usuario;
$agendamento->material = $data->material;
$agendamento->quantidade_kg = $data->quantidade_kg;
$agendamento->data_coleta = $data->data_coleta;
$agendamento->hora_coleta = $data->hora_coleta;

if ($agendamento->criar()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}
