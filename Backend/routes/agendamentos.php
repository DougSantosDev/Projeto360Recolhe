<?php
include_once '../config/database.php';
include_once '../models/Agendamento.php';

$db = (new Database())->getConnection();
$agendamento = new Agendamento($db);

$stmt = $agendamento->listarTodos();
$dados = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($dados);
