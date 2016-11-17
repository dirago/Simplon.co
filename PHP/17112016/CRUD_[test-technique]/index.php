<!DOCTYPE html>
<html lang="fr" xmlns:fb="http://ogp.me/ns/fb#">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
    	<meta property="og:title" content="" />
    	<meta property="og:type" content="" />
    	<meta property="og:url" content="" />
    	<meta property="og:image" content="" />
    	<meta property="og:description" content="">
        <title></title>
        <link rel="stylesheet" href="css/style.min.css">
        <script src="https://use.fontawesome.com/982a8f46ca.js"></script>
    </head>
    <body>
        <header>
            <object data="test.svg" type="image/svg+xml"></object>
        </header>
        <main>
            <article id="title-add" class="title">
                <h2>Ajouter un évènement Simplon.co</h2>
            </article>
            <form class="formulaire" action="add_event.php" method="post">
                <div class="form-row">
                    <div class="form-element">
                        <label for="title">Titre de l'évènement</label>
                        <input id="title" type="text" name="title" placeholder="Saisissez votre titre">
                    </div>
                    <div class="form-element">
                        <label for="title">Créateur</label>
                        <input id="mail" type="text" name="mail" placeholder="Saisissez votre adresse e-mail">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-element">
                        <label for="date-debut">Début de l'évènement</label>
                        <input id="date-debut" type="date" name="start-event">
                    </div>
                    <div class="form-element">
                        <label for="date-fin">Fin de l'évènement</label>
                        <input id="date-fin" type="date" name="end-event">
                    </div>
                </div>
                <div id="error"></div>
                <div class="form-row form-row--btn">
                    <input id="form-btn" type="button" name="name" value="+">
                </div>
            </form>
        </main>


        <script type="text/javascript" src="js/compiled/app.js"></script>
    </body>
</html>
