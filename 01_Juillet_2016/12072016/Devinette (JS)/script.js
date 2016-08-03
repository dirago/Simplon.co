var solution = Math.floor(Math.random() * 100);
var question = "Devinez un chiffre entre 0 et 100";
var erreur = 'Erreur, votre chiffre n\'est pas compris entre 0 et 100';
var notANumber = 'Ceci n\'est pas un nombre, réessayez !';

var proceed = true;
while (proceed) {
    var proposition = parseInt(prompt(question));
    var propositionPlusDix = proposition + 10;
    var propositionMoinsDix = proposition - 10;
    var beaucoupTropPetit = proposition + ' est beaucoup trop petit';
    var tropPetit = proposition + ' est trop petit';
    var beaucoupTropGrand = proposition + ' est beaucoup trop grand';
    var tropGrand = proposition + ' est trop grand';
    var bravo = 'Bravo !! Vous avez trouvé le bon chiffre -> ' + solution;
    if (proposition < solution) {
        if (proposition < 0) {
            alert(erreur);
        }
        else if (propositionPlusDix < solution) {
            alert(beaucoupTropPetit);
        }
        else {
            alert(tropPetit);
        }
    }
    else if (proposition > solution) {
        if (proposition > 100) {
            alert(erreur);
        }
        else if (propositionMoinsDix > solution) {
            alert(beaucoupTropGrand);
        }
        else {
            alert(tropGrand);
        }
    }
    else if (proposition === solution) {
        alert(bravo);
        proceed = false;
    }
    else
        alert(notANumber);
}
