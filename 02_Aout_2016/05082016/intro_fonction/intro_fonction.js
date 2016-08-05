var voyelles = "aeiouy";

// la fonction reçoit un caractère en paramètre et doit renvoyer true si le texte contient une voyelle, false sinon
function estUneVoyelle( lettre ){
    for (var i = 0; i < voyelles.length; i++) {
        if (lettre === undefined) {
            return false;
        } else {
            return lettre.includes(voyelles[i]);
        }
    }
}

console.log("estUneVoyelle('f') :", estUneVoyelle('f') ); // false
console.log("estUneVoyelle('a') :", estUneVoyelle('a') ); // true
console.log("estUneVoyelle() :", estUneVoyelle() ); // false

// la fonction reçoit un texte en paramètre et doit renvoyer ce texte sans ses voyelles
function contientUneVoyelle( texte ){
    for(var i = 0; i < texte.length ; i++){

        if( texte[i].match(/[aeiouy]/gi) ){
            return true;
        }
    }
    return false;
}

// la fonction reçoit un texte en paramètre et doit renvoyer ce texte sans ses voyelles
function compteVoyelle( texte ){
    var compteur = 0;
    for(var i = 0; i < texte.length ; i++){
        compteur += texte[i].search(/[aeiouy]/gi) + 1;
    }
    return compteur;
}

// la fonction reçoit un texte en paramètre et doit renvoyer ce texte sans ses voyelles
var texteRendu = "";
function enleveVoyelle( texteAModifier ){
    for (var i = 0; i < texteAModifier.length; i++) {
        if (texteAModifier[i].search(/[aeiouy]/gi) === 0) {
            texteRendu += "";
        } else {
            texteRendu += texteAModifier[i];
        }
    }
    return texteRendu;
}

var resultat = enleveVoyelle("Coucou"); // doit renvoyer Cc

console.log('resultat :', resultat);
