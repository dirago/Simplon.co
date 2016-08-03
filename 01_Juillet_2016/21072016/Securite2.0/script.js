// Déclaration des variables
var questionId = "Veuillez entrer votre identifiant";
var questionMotDePasse = "Veuillez entrer votre mot de passe";
var idUser;
var index;
var utilisateurs = {
    "id" : ["joe@gmail.com", "bclinton@gmail.com", "nsarkozy@gmail.com"],
    "nom" : ["Joe", "Bill", "Nicolas"],
    "mdp" : ["12345", "25231", "82742"]
}
// Initialisation du Log In
function logIn() {
    idUser = prompt(questionId);
    checkCharacters();
    checkAt();
    checkId();
    checkPassword();
}
// On vérifie que l'id saisi par l'utilisateur contient plus de 4 caractères
function checkCharacters() {
    if (idUser.length > 4) {
        return true;
    }
    else {
        alert("Erreur, votre identifiant comporte moins de 5 caractères !");
        logIn();
    }
}
// On vérifie que la saisie de l'utilisateur contient bien une @
function checkAt() {
    if (idUser.indexOf("@") != -1) {
        return true;
    }
    else {
        alert("Erreur, votre identifiant ne comporte pas d'arobase (@)");
        logIn();
    }
}
// Vérification de l'id saisi en rapport avec notre "BDD"
function checkId() {
    var tailleUtilisateurs = utilisateurs.id.length;
    var dernierElement = tailleUtilisateurs - 1;
    for (var i = 0; i < tailleUtilisateurs; i++) {
        if (utilisateurs.id[i] == idUser) {
            index = i;
            return true;
            break;
        }
    }
    if (utilisateurs.id[dernierElement] != idUser){
        alert("Identifiant incorrect, veuillez réessayer");
        logIn();
    }
}
// Vérification du couple id/mdp
function checkPassword() {
    var mdpUser = prompt(questionMotDePasse); // On demande le MDP
    if (mdpUser == utilisateurs.mdp[index]) { // Le MDP est-il le bon ?
        alert("Bienvenue " + utilisateurs.nom[index] + " !");
    }
    else {
        alert("Mot de passe incorrect, veuillez réessayer");
        logIn();
    }
}

logIn();
