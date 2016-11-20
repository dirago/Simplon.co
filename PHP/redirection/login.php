<?php
define('USER_LOGIN', 'diragor');
define('USER_PW', 'test');
define('USER_NAME', 'Raphaël');


?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>Login</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.min.css" media="screen" title="no title" charset="utf-8">
</head>

<body>
<?php include 'header.php' ?>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h1 class="panel-title">Login</h1>
                </div>
                <?php
                if ($_POST['login'] == USER_LOGIN){
                    if ($_POST['password'] == USER_PW) { ?>
                        <div class="panel-body">
                            <span>Bienvenue <?php echo "<mark>" . USER_NAME . "</mark>" ?></span><br><br>
                        </div>
                    <?php } else { ?>
                        <div class="panel-body">
                            <span>Mauvais mot de passe</span>
                            <form class="" action="<?php $_SERVER['PHP_SELF'] ?>" method="post">
                                Login
                                <input type="text" name="login"><br>
                                Password
                                <input type="password" name="password"><br>
                                <button class="btn" type="submit">Valider</button>
                            </form>
                        </div>
                    <?php }
                } else { ?>
                    <div class="panel-body">
                        <form class="" action="<?php $_SERVER['PHP_SELF'] ?>" method="post">
                            Login
                            <input type="text" name="login"><br>
                            Password
                            <input type="password" name="password"><br>
                            <button class="btn" type="submit">Valider</button>
                        </form>
                    </div>
                <?php } ?>

            </div>
        </div>
    </div>
</div>
</body>

</html>