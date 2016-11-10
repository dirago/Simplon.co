<?php
session_start();
include_once 'db.php';

if (isset($_POST['pays']) && isset($_POST['capitale']) && isset($_POST['drapeau'])){
    $pays = $_POST['pays'];
    $capitale = $_POST['capitale'];
    $drapeau = $_POST['drapeau'];

    $sql = "INSERT INTO pays (nom, drapeau, capitale) VALUES (:name, :flag, :capital)";

    $stmt = $pdo->prepare($sql);

    $stmt->bindParam(':name', $pays, PDO::PARAM_STR);
    $stmt->bindParam(':flag', $drapeau, PDO::PARAM_STR);
    $stmt->bindParam(':capital', $capitale, PDO::PARAM_STR);
    $success = $stmt->execute();
    if ($success){
        $result = [
            "pays" => $pays,
            "capitale" => $capitale,
            "urlDrapeau" => $drapeau,
            "success" => $success
        ];
    } else {
        $result = [
            "success" => $success
        ];
    }
    $stmt->closeCursor();
}

echo json_encode(array('result' => $result));
 ?>
