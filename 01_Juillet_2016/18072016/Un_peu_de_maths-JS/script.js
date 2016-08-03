// Déclaration des variables
var nombreEntierUn;
var nombreEntierDeux;
var nombreEntierTrois;
var operateur1 = "";
var operateur2 = "";
var solution;
var x = 0; // Variable d'itération pour les succès, au bout de 3 la partie bonus débute
var nom = prompt("Bienvenue sur ce jeu de calcul mental, veuillez entrer votre prénom");
nom = nom.charAt(0).toUpperCase() + nom.substring(1).toLowerCase();
// Fonction qui génère 3 nombres entre 0 et 10
function generateNumbers() {
    nombreEntierUn = Math.floor(Math.random() * 10);
    nombreEntierDeux = Math.floor(Math.random() * 10);
    nombreEntierTrois = Math.floor(Math.random() * 10);
}
// On génère un opérateur mathématique
function generateOperator() {
    var operateurs = ["+", "-", "*"];
    for (i = 0; i < 1; i++) {
        operateur1 = operateurs[Math.floor(Math.random() * operateurs.length)];
        operateur2 = operateurs[Math.floor(Math.random() * operateurs.length)];
    }
    return operateur1;
    return operateur2;
}
// On initialise le jeu
function play() {
    generateNumbers();
    generateOperator();
    solution = eval(nombreEntierUn + operateur1 + nombreEntierDeux);
    var reponseUser = parseInt(prompt("Combien font " + nombreEntierUn + " " + operateur1 + " " + nombreEntierDeux + " ?"));
    if (reponseUser === solution) {
        x++;
        alert("Bravo, vous avez trouvé la solution " + x + " fois de suite");
        (x === 3) ? playExtra() : play()
    } else {
        playAgain();
        x = 1; // La réussite dans playAgain() donne 1 bonne réponse donc on implémente
        play();
    }
}
// On repose la question si la proposition est fausse, peu importe le nombre de victoires précédentes
function playAgain() {
    var reponseUser = parseInt(prompt("Faux ! Combien font " + nombreEntierUn + " " + operateur1 + " " + nombreEntierDeux + " ?"));
    (reponseUser === solution) ? alert("Bravo, vous avez trouvé la solution 1 fois de suite") : playAgain()
}
// On déclenche le niveau bonus avec 3 nombres et 2 opérateurs
function playExtra() {
    alert('Niveau bonus ! Gérez une opération avec 2 opérateurs et 3 nombres');
    generateNumbers();
    generateOperator();
    solution = eval(nombreEntierUn + operateur1 + nombreEntierDeux + operateur2 + nombreEntierTrois);
    var reponseUser = parseInt(prompt("Combien font " + nombreEntierUn + " " + operateur1 + " " + nombreEntierDeux + " " + operateur2 + " " + nombreEntierTrois + " ?"));
    if (solution === reponseUser) {
        alert("Félicitations " + nom + " ! Vous êtes le boss du calcul mental d(^_^)b");
        game = false;
    } else {
        alert("Perdu, vous recommencez depuis le début ! :-(");
        x = 0;
        play();
    }
}

play();
