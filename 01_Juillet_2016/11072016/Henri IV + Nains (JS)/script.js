var proceed = true,
    essais = 0;

console.log("\nBienvenue au niveau 1 !\n\n");

while (proceed) {
    var proposition = prompt("Quelle est la couleur du cheval blanc d'Henri IV ?");
    if (typeof(proposition) != "string") {
        console.log("\nCeci n'est pas une chaine de caractères valide\n\n");
    } else {
        proposition = proposition.toLowerCase();
        if (proposition === "blanc") {
            console.log("\nBravo, bonne réponse !\n\n");
            var proceed = false;
        } else if (essais < 2) {
            essais++;
            console.log("\nMauvaise réponse ! Rééssayez.\n\n");
        } else {
            console.log("\nTrop de mauvaises réponses ! Passons à la suite.\n\n");
            proceed = false;
        }
    }
}

var proceed = true,
    essais = 0;

console.log("\nBienvenue au niveau 2 !\n\n");

while (proceed) {
    var nbNains = 7;
    var proposition = prompt('Combien y a t\'il de nains dans le film "Blanche-neige et les .... nains"');
    if (isNaN(parseInt(proposition))) {
        if (proposition.toLowerCase() === "sept") {
            console.log("\nBravo, deuxième bonne réponse !\n\n");
            proceed = false;
        } else if (essais < 2) {
            essais++;
            console.log("\nPerdu... Rééssayez !\n\n");
        } else {
            console.log("\nTrop de mauvaises réponses ! Passons à la suite.\n\n");
            proceed = false;
        }
    } else {
        if (parseInt(proposition) === nbNains) {
            console.log("\nBravo, deuxième bonne réponse !\n\n");
            proceed = false;
        } else if (essais < 2) {
            essais++;
            console.log("\nPerdu... Rééssayez !\n\n");
        } else {
            console.log("\nTrop de mauvaises réponses ! Passons à la suite.\n\n");
            proceed = false;
        }
    }
}

console.log("\nBienvenue au niveau 3 !\n\n");

for (var i = 1; i < 3; i++) {
    var solution = Math.floor((Math.random() * 10) + 1);
    var proposition = parseInt(prompt("Entrez un chiffre entre 1 et 9 ( " + i + " / 2 tentatives )"));
    if (isNaN(proposition)) {
        console.log("\nCeci n'est pas un chiffre entre 1 et 9\n\n");
        if (i < 2) {
            console.log("\nDommage ! Il vous reste une tentative\n\n");
        } else {
            console.log("\nAïe ! C'est perdu.\n\n");
        }
    } else {
        if (proposition === solution) {
            console.log("\nBravo ! Le nombre était bien " + solution + " (Vous avez trouvé en " + i + " tentative(s))\n\n");
            i = 3;
        } else if (i < 2) {
            console.log("\nDommage ! Il vous reste une tentative\n\n");
        } else {
            console.log("\nAïe ! C'est perdu.\n\n");
        }
    }
}
