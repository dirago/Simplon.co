<header>
    <p>Mon site</p>
    <?php
    if ($_POST['login'] == USER_LOGIN && $_POST['password'] == USER_PW){
        echo "<a href=\"" . $_SERVER['PHP_SELF'] . "\">Déconnexion</a>";
    } ?>
</header>