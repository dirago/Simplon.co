<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>Formulaire simple</title>
</head>

<body>
    <?php
    $name = isset($_POST['name']) && $_POST['name'] ? $_POST['name'] : undefined;
    $firstname = isset($_POST['firstname']) && $_POST['firstname'] ? $_POST['firstname'] : undefined;
    $city = isset($_POST['city']) ? $_POST['city'] : undefined;
    $major = isset($_POST['major']) ? $_POST['major'] : "not major";


    ?>
    <h1><?php echo "Hello {$firstname} {$name} ! You're from {$city} and you're {$major} !"; ?></h1>
</body>

</html>
