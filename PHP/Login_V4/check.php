<?php
session_start();
include_once 'db.php';

if ($_POST['login'] !== "" && $_POST['password'] !== "") {
    $login = $_POST['login'];
    $pw = sha1($_POST['password']);

    $sql = "SELECT * FROM users WHERE username=:usn AND password=:pw";

    $results = $pdo->prepare($sql);
    $results->bindParam(':usn', $login, PDO::PARAM_STR);
    $results->bindParam(':pw', $pw, PDO::PARAM_STR);
    $results->execute();
    $results->setFetchMode(PDO::FETCH_ASSOC);
    $count = $results->rowCount();
    if ($count > 0) {
        $_SESSION['login'] = $login;
        $result = [
            "response" => "OK",
            "login" => $login
            ];
    } else {
        $result = [
            "response" => "PAS OK"
            ];
    }
    $results->closeCursor();
} else {
    header('Location:index.php');
};
echo json_encode(array('result' => $result));
?>
