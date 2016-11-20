<?php
session_start();
include_once 'db.php';

if (isset($_POST['title']) && isset($_POST['mail']) && isset($_POST['start-event']) && isset($_POST['end-event'])) {
    $titre = $_POST['title'];
    $mail = $_POST['mail'];
    $start = $_POST['start-event'];
    $end = $_POST['end-event'];

    $sql = "INSERT INTO evenement (title, creator, start_time, end_time) VALUES (:title, :creator, :start_time, :end_time)";

    $stmt = $pdo->prepare($sql);

    $stmt->bindParam(':title', $titre, PDO::PARAM_STR);
    $stmt->bindParam(':creator', $mail, PDO::PARAM_STR);
    $stmt->bindParam(':start_time', $start, PDO::PARAM_STR);
    $stmt->bindParam(':end_time', $end, PDO::PARAM_STR);
    $success = $stmt->execute();
    if ($success){
        $result = [
            "success" => $success
        ];
    } else {
        $result = [
            "success" => $success
        ];
    }
    $stmt->closeCursor();

} else {
    header('location: index.php');
}
 ?>
