/*
* Texte / Chaines de caractères / String
* fonctions utiles : indexOf, slice, charAt, toLowerCase
* cf. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String
 */

// longueur
var texte = "un texte";

var nombreDeCaracteres = texte.length;
console.log('nombre de caracteres', nombreDeCaracteres); // 8

// TODO
var quatriemeCaractere = texte.charAt(3) ;
console.log('quatrieme caractere', quatriemeCaractere ); // t

// TODO
var quatriemeEtCinquiemeCaracteres = texte.slice(3,5) ;
console.log('quatrieme et cinquieme caractere', quatriemeEtCinquiemeCaracteres ); // te

// TODO
var majuscule = texte.toUpperCase();
console.log('majuscule', majuscule ); // UN TEXTE

// TODO
var premierMot = texte.slice(0,2);
console.log('premierMot', premierMot ); // un

// TODO
console.log('premierMotEnMajuscule', premierMot.toUpperCase() ); // UN



/*
 * nombres
 * fonctions utiles : parseInt , parseFloat, isNaN
 */

var valeur1 = '15';
var somme = valeur1 + 3;
console.log('somme == 18', somme == 18 ); // true

var age = 32;
// TODO
console.log( "J'ai " + age + " ans" ); // j'ai 32 ans

/*
* boucles & tableaux
 */

var mails = ["Joe@gmAil.com", "LEA@test.com", "Bob@gmAil.com"];
var nombreDeMails = mails.length;
console.log('nombreDeMails', nombreDeMails );

var dernierMail = mails[2];
console.log('dernierMail', dernierMail );

// est ce que tout les mails sont gmail
var test;
for( var i = 0 ; i < mails.length ; i++ ){
    if (!mails[i].includes("gmAil")) {
        test = false;
        break;
    } else {
        test = true;
    }
}

console.log('tous les mails sont gmail : ', test.toString() ); // false

// mettre les mails en minuscules
var mailsMinuscule = [] ;
for( var i = 0 ; i < mails.length ; i++ ){
    mailsMinuscule.push(mails[i].toLowerCase())
}
console.log('mails en minuscules', mailsMinuscule.toString() );


// TODO : remplacez les @ par des _
var mailsUnderscore = [];
for (var i = 0; i < mails.length; i++) {
    mailsUnderscore.push(mails[i].replace(/@/i, "_"));
}
console.log('mails remplacés par underscore', mailsUnderscore.toString() );
// TODO : supprimez les .com
var mailsDelete = [];
for (var i = 0; i < mails.length; i++) {
    mailsDelete.push(mails[i].replace(/.com/i, ""));
}
console.log('.com supprimé', mailsDelete.toString() );
