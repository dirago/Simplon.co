var noteTableau = [];
var notes = 0;
for (var i = 1; i <= 10; i++){
    var note = parseInt(prompt("Veuillez entrer la note n°" + i + "/10 (note sur 20)"));
    console.log("Note n°" + i + " : " + note + "/20");
    if (isNaN(note)) {
        console.log("Erreur, ceci n'est pas un chiffre entre 0 et 20, veuillez retaper votre chiffre !");
        i = i - 1;
    }
    else {
        noteTableau.push(note);
        notes += noteTableau[i - 1];
    }
}
var moyenne = notes / noteTableau.length;
console.log("La moyenne de votre classe est de " + moyenne + "/20");
