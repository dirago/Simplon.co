alert("Bienvenue sur la calculatrice 2.0 !")

// Demandes ( symbole + chiffres )
var choix = prompt("Calculons ensemble ! Saisissez un symbole mathématique : + | - | / | *");
if ((choix === "+") || (choix === "-") || (choix === "/") || (choix === "*")) {
    var premierChiffre = parseInt(prompt("Entrez un premier chiffre"));
    var deuxiemeChiffre = parseInt(prompt("Entrez un deuxième chiffre"));
    // Vérifie si l'entrée est bien un chiffre
    if (isNaN(premierChiffre) || isNaN(deuxiemeChiffre)) { // Détermine si les 2 entrées sont bien des chiffres
        alert("Chiffre non valable");
    }
    else {
        switch (choix) { // Fait une opération mathématique selon le choix de l'user
        case "+":
            var addition = premierChiffre + deuxiemeChiffre;
            alert(premierChiffre + " + " + deuxiemeChiffre + " = " + addition);
            break;
        case "-":
            var soustraction = premierChiffre - deuxiemeChiffre;
            alert(premierChiffre + " - " + deuxiemeChiffre + " = " + soustraction);
            break;
        case "/":
            var division = premierChiffre / deuxiemeChiffre;
            alert(premierChiffre + " / " + deuxiemeChiffre + " = " + division);
            break;
        case "*":
            var multiplication = premierChiffre * deuxiemeChiffre;
            alert(premierChiffre + " * " + deuxiemeChiffre + " = " + multiplication);
            break;
        default:
            alert("Mauvaise entrée, rappel des symboles mathématiques : + | - | / | *");
        }
    }
}
else {
    alert("Mauvaise entrée, rappel des symboles mathématiques : + | - | / | *");
}
