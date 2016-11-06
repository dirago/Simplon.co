<?php
session_start();
include_once 'db.php';

if ($_POST['login'] !== "" && $_POST['password'] !== "") {
    $login = mysql_real_escape_string($_POST['login']);
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
            "login" => $login,
            "pw" => $pw,
            "session" => $_SESSION
            ];
    } else {
        session_destroy();
        $result = [
            "response" => "PAS OK",
            "login" => $_POST['login'],
            "pw" => $pw
            ];
    }
    $results->closeCursor();
} else {
    header('Location:index.php');
};
echo json_encode(array('result' => $result));
?>
