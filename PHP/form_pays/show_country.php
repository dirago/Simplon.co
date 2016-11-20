<?php
include_once 'db.php';

$sql = "SELECT * FROM pays";
$result = $pdo->query($sql);
$array = array();
while ( $row = $result->fetch() ) {
    $data = [
    "pays" => $row['nom'],
    "capitale" => $row['capitale'],
    "drapeau" => $row['drapeau']
    ];
    array_push($array, $data);
}
echo json_encode($array);
?>
