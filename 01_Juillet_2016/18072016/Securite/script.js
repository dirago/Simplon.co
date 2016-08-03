// Définition du combo id/mot de passe
var id = "joe@gmail.com";
var motDePasse = "12345";
// Création de variables pour les questions -simplicité-
var questionId = "Veuillez entrer votre identifiant";
var questionMotDePasse = "Veuillez entrer votre mot de passe";
// Initialisation de la boucle
var identification = true;

while (identification) {
    var idUser = prompt(questionId); // On demande un id
    if (idUser.length > 4) { // l'id comporte t'il plus de 4 caractères ?
        if (idUser.indexOf("@") != -1) { // Recherche du symbole @ dans la saisie utilisateur
            if (idUser == id) { // Vérification de la saisie par rapport à l'id enregistré
                var motDePasseUser = prompt(questionMotDePasse); // On demande le MDP
                if (motDePasseUser == motDePasse) { // Le MDP est-il le bon ?
                    alert("Bienvenue !");
                    identification = false; // Fin de la boucle
                } else {
                    alert("Mot de passe incorrect, veuillez réessayer");
                }
            } else {
                alert("Identifiant incorrect, veuillez réessayer");
            }
        } else {
            alert("Erreur, votre identifiant ne comporte pas d'arobase (@)");
        }
    } else {
        alert("Erreur, votre identifiant comporte moins de 5 caractères !");
    }
}
