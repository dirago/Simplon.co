<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Formulaire pays</title>
        <link rel="stylesheet" href="css/style.min.css" media="screen" title="no title">
        <script src="https://use.fontawesome.com/5ae87d50eb.js"></script>
    </head>
    <body>
        <div class="add-country">
            <form class="" method="post">
                <input id="pays" type="text" name="pays" placeholder="Pays">
                <input id="capitale" type="text" name="capitale" placeholder="Capitale">
                <input id="drapeau" type="text" name="drapeau" placeholder="Drapeau (url)">
                <select id="lang-pays" type="list" name="lang" placeholder="Langue">
                    <option class="selected" value="option" selected>Ajouter une langue</option>
                </select>
                <i class="fa fa-plus" aria-hidden="true"></i>
                <button type="submit" name="button">Envoyer</button>
            </form>
            <div id="error"></div>
            <div id="result"></div>
        </div>
        <div class="add-lang">
            <form class="" method="post">
                <input id="lang" type="text" name="lang" placeholder="Langue">
                <button type="submit" name="button">Envoyer</button>
            </form>
            <div id="error"></div>
            <div id="result"></div>
        </div>


        <script type="text/javascript" src="js/script.js"></script>

    </body>
</html>
