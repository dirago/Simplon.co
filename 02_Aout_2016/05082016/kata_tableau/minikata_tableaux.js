var prenom = "paul";

// TODO : ajouter une majuscule
var prenomUpperCase = prenom.charAt(0).toUpperCase() + prenom.substring(1);

console.log('prenom avec premiere lettre en majuscule', prenomUpperCase); //Paul

var users = ["joe", "lea", "bob", "ann"];

// TODO : ajouter une majuscule à tous les prenoms de la liste
var usersUp = [];
for (var i = 0; i < users.length; i++) {
    newUser = users[i].charAt(0).toUpperCase() + users[i].substring(1);
    usersUp.push(newUser);
}

console.log('Prenoms avec premiere lettre en majuscule', usersUp); //Joe, Lea, Bob, Ann

// TODO : liste des prenoms qui commencent par une voyelle
var listOfVoyels = [];
for (var i = 0; i < users.length; i++) {
    if (users[i].charAt(0).match(/[aeiouy]/gi)) {
        listOfVoyels.push(users[i]);
    }
}

console.log('Prenoms qui commencent par une voyelle', listOfVoyels); //ann

// TODO : liste des prenoms qui commencent par une console
var listOfCons = [];
for (var i = 0; i < users.length; i++) {
    if (!users[i].charAt(0).match(/[aeiouy]/gi)) {
        listOfCons.push(users[i]);
    }
}

console.log('Prenoms qui commencent par une consonne', listOfCons); //joe, lea, bob

var notes = [10, 12, 13, 4, 8];

// TODO : calcul de la somme
var total = 0;
for (var i = 0; i < notes.length; i++) {
    total += notes[i];
}

console.log('somme des notes', total); // 47

// TODO : calcul de la moyenne
var total = 0;
for (var i = 0; i < notes.length; i++) {
    total += notes[i];
}
var moyenne = total / notes.length;
console.log('moyenne', moyenne); // 9,4

var nouvelleNote = 12;

// TODO : ajouter la note à liste
notes.push(nouvelleNote);

console.log('nouvelles notes', notes);

// TODO : calcul de la nouvelle somme
total += nouvelleNote;

console.log('somme des notes', total); // 59

// TODO : calcul de la nouvelle moyenne
moyenne = Math.round((total / notes.length) * 100) / 100;

console.log('moyenne', moyenne); // 9.83

// TODO : trouvez la note la plus haute
var bestGrade = 0;
for (var i = 0; i < notes.length; i++) {
    if (notes[i] > bestGrade) {
        bestGrade = notes[i];
    }
}
console.log('meilleure note', bestGrade);

// TODO : trouvez la note la plus basse
var worstGrade = 20;
for (var i = 0; i < notes.length; i++) {
    if (notes[i] < worstGrade) {
        worstGrade = notes[i];
    }
}
console.log('plus mauvaise note', worstGrade);


// TODO : passage en fonctions
function calculSomme(tableauDeNotes) {
    var somme = 0;

    for (var i = 0; i < tableauDeNotes.length; i++) {
        somme += tableauDeNotes[i];
    }

    return somme;
}

function calculMoyenne(tableauDeNotes) {
    var moyenne;
    var total;

    for (var i = 0; i < tableauDeNotes.length; i++) {
        total += tableauDeNotes[i];
    }
    moyenne = Math.round((total / tableauDeNotes.length) * 100) / 100;
    return moyenne;
}
