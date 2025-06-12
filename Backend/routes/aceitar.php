<?php
include_once '../config/database.php';
include_once '../models/Agendamento.php';

$data = json_decode(file_get_contents("php://input"));

$db = (new Database())->getConnection();
$agendamento = new Agendamento($db);
$agendamento->id = $data->id;

if ($agendamento->aceitar()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}
