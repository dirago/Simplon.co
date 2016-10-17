<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>Formulaire simple</title>
</head>

<body>
    <form class="" action="show.php" method="post">
        Name
        <input type="text" name="name">
        Firstname
        <input type="text" name="firstname"><br>
        City
        Paris
        <input type="radio" name="city" value="Paris">
        Lyon
        <input type="radio" name="city" value="Lyon">
        Marseille
        <input type="radio" name="city" value="Marseille"><br>
        Majeur :
        <input type="checkbox" name="major" value="major"><br>
        <input type="submit" value="Valider">
    </form>
</body>

</html>
