// Déclaration des variables
var loginEntry = document.getElementById('login');
var passwordEntry = document.getElementById('password');
var prenomNewEntry = document.getElementById('prenomNew');
var loginNewEntry = document.getElementById('loginNew');
var passwordNewEntry = document.getElementById('passwordNew');
var erreur = document.getElementById('erreur');
var erreurNew = document.getElementById('erreurNew');
var divEntierCo = document.getElementById('formulaire');
var divEntierSign = document.getElementById('formulaireInscription');
var divLog = document.getElementById('logIn');
var divSign = document.getElementById('signIn');
var wlcm = document.getElementById('wlcm');
var wlcmNew = document.getElementById('wlcmNew');
var divCo = document.getElementById('connexion');
var divIn = document.getElementById('inscription');
var navSi = document.getElementById('navSi');
var navCo = document.getElementById('navCo');
var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var utilisateurs = {
    "id": ["joe@gmail.com", "diragor@gmail.com", "nsarkozy@gmail.com"],
    "nom": ["Joe", "Raphaël", "Nicolas"],
    "pw": ["12345", "azerty", "82742"]
}

// Lancement de l'identification
function logIn() {
    login = loginEntry.value;
    password = passwordEntry.value;
    console.log("email = " + login);
    console.log("password = " + password);

    verif(login, password);
}

function verif(login, password) {
    // On vérifie que tous les champs soient remplis
    if (login == "" || login == null || login == undefined) {
        erreur.style.visibility = 'visible';
        erreur.innerHTML = "<p>Les deux champs doivent être remplis !</p>";
        return;
    } else if (password == "" || password == null || password == undefined)
        erreur.style.visibility = 'visible';
    erreur.innerHTML = "<p>Les deux champs doivent être remplis !</p>";
    return;
}
// On vérifie que l'id saisi par l'utilisateur contient plus de 4 caractères
if (login.length < 5) {
    erreur.style.visibility = 'visible';
    erreur.innerHTML = "<p>Votre e-mail contient moins de 5 caractères</p>";
    return;
}
// On vérifie que la saisie de l'utilisateur contient bien une @
if (regex.test(login) == false) {
    erreur.style.visibility = 'visible';
    erreur.innerHTML = "<p>Votre e-mail n'est pas valide</p>";
    return;
}
// Vérification de l'id saisi en rapport avec notre "BDD"
var tailleUtilisateurs = utilisateurs.id.length;
var dernierElement = tailleUtilisateurs - 1;
for (var i = 0; i < tailleUtilisateurs; i++) {
    if (utilisateurs.id[i] == login) {
        var index = i;
        checkPassword(index);
        return;
    }
}
if (utilisateurs.id[dernierElement] != login) {
    erreur.style.visibility = 'visible';
    erreur.innerHTML = "<p>Vous n'avez pas encore de compte chez DRg !</p>";
    return;
}
}
// Vérification du couple id/mdp
function checkPassword(index) {
    if (password == utilisateurs.pw[index]) { // Le MDP est-il le bon ?
        divLog.style.display = 'none';
        divCo.style.display = 'none';
        wlcm.style.display = 'block';
        navCo.style.display = 'block';
        navSi.style.display = 'none';
        wlcm.innerHTML = "<p>Vous êtes connecté, ravi de vous revoir " + utilisateurs.nom[index] + " !</p>";
        return;
    } else {
        erreur.style.visibility = 'visible';
        erreur.innerHTML = "<p>Mot de passe erroné</p>";
        return;
    }
}

function signIn() {
    prenom = prenomNewEntry.value;
    login = loginNewEntry.value;
    password = passwordNewEntry.value;
    console.log("Nouveau prenom = " + prenom);
    console.log("Nouvel email = " + login);
    console.log("Nouveau password = " + password);

    check(prenom, login, password);
}

function check(prenom, login, password) {
    // On vérifie que tous les champs soient remplis
    if (login == "" || login == null || login == undefined) {
        erreurNew.style.visibility = 'visible';
        erreurNew.innerHTML = "<p>Les deux champs doivent être remplis !</p>";
        return;
    } else if (password == "" || password == null || password == undefined) {
        erreurNew.style.visibility = 'visible';
        erreurNew.innerHTML = "<p>Les deux champs doivent être remplis !</p>";
        return;
    }
    // On vérifie que l'id saisi par l'utilisateur contienne plus de 4 caractères
    if (login.length < 5) {
        erreurNew.style.visibility = 'visible';
        erreurNew.innerHTML = "<p>Votre e-mail doit contenir au moins 5 caractères</p>";
        return;
    }
    // On vérifie que la saisie de l'utilisateur contient bien une @
    if (regex.test(login) == false) {
        erreurNew.style.visibility = 'visible';
        erreurNew.innerHTML = "<p>Votre e-mail n'est pas valide</p>";
        return;
    }
    // Création du nouvel utilisateur
    newUser = utilisateurs.nom.push(prenom);
    utilisateurs.nom[newUser - 1] = utilisateurs.nom[newUser - 1].charAt(0).toUpperCase() + utilisateurs.nom[newUser - 1].substring(1).toLowerCase();
    utilisateurs.id.push(login);
    utilisateurs.pw.push(password);
    wlcmNew.style.display = 'block';
    divIn.style.display = 'none';
    divSign.style.display = 'none';
    wlcmNew.innerHTML = "<p>Vous pouvez maintenant vous connecter, bienvenue " + utilisateurs.nom[newUser - 1] + " !</p>";
    return;
}

function showLog() {
    divEntierCo.style.display = 'block';
    divCo.style.display = 'block';
    divLog.style.display = 'block';
    wlcm.style.display = 'none';
    divEntierSign.style.display = 'none';
    divSign.style.display = 'none';
    divIn.style.display = 'none';
    loginEntry.value = '';
    passwordEntry.value = '';
}

function showSign() {
    divLog.style.display = 'none';
    divCo.style.display = 'none';
    divSign.style.display = 'block';
    divIn.style.display = 'block';
    wlcm.style.display = 'none';
    divEntierSign.style.display = 'block';
    divEntierCo.style.display = 'none';
}