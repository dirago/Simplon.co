<?php
$loginDb = "diragor";
$pwDb = "test";
$name = "Raphaël"
 ?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Login</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h1 class="panel-title">Login</h1>
                        </div>
                        <?php
                        if ($_POST['login'] == $loginDb){
                            if ($_POST['password'] == $pwDb) {
                                echo "<div class=\"panel-body\">
                                <span><mark>Bienvenue {$name}</mark></span>
                                </div>";
                            } else {
                                echo "<div class=\"panel-body\">
                                    <span>Mauvais mot de passe</span>
                                    <form class=\"\" action=\"".$_SERVER['PHP_SELF']."\" method=\"post\">
                                        Login
                                        <input type=\"text\" name=\"login\"><br>
                                        Password
                                        <input type=\"password\" name=\"password\"><br>
                                        <button class=\"btn\" type=\"submit\">Valider</button>
                                    </form>
                                </div>";
                            }
                        } else {
                        echo "
                        <div class=\"panel-body\">
                            <form class=\"\" action=\"".$_SERVER['PHP_SELF']."\" method=\"post\">
                                Login
                                <input type=\"text\" name=\"login\"><br>
                                Password
                                <input type=\"password\" name=\"password\"><br>
                                <button class=\"btn\" type=\"submit\">Valider</button>
                            </form>
                        </div>";
                        } ?>

                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
