var note1 = document.getElementById('note1');
var note2 = document.getElementById('note2');
var note3 = document.getElementById('note3');
var note4 = document.getElementById('note4');
var note5 = document.getElementById('note5');
var note6 = document.getElementById('note6');
var note7 = document.getElementById('note7');
var note8 = document.getElementById('note8');
var note9 = document.getElementById('note9');
var note10 = document.getElementById('note10');
var message = document.getElementById('message');
var messageMoyenne = document.getElementById('messageMoyenne');
var erreur = document.getElementById('erreur');

function calculMoyenne() {
    tableau = [];
    var total = 0;
    var moyenne = 0;
    tableau.push(parseInt(note1.value));
    tableau.push(parseInt(note2.value));
    tableau.push(parseInt(note3.value));
    tableau.push(parseInt(note4.value));
    tableau.push(parseInt(note5.value));
    tableau.push(parseInt(note6.value));
    tableau.push(parseInt(note7.value));
    tableau.push(parseInt(note8.value));
    tableau.push(parseInt(note9.value));
    tableau.push(parseInt(note10.value));
    var taille = tableau.length
    for (var index in tableau) {
        if (isNaN(tableau[index])) {
            message.style.display= "none";
            messageMoyenne.style.display= "none";
            erreur.style.display = "block";
            erreur.innerHTML = "Un ou plusieurs nombres ne sont pas corrects";
            break;
        } else {
            total += tableau[index];
            moyenne = total / taille;
            message.style.display = "block";
            erreur.style.display = "none";
            messageMoyenne.style.display = "block";
            messageMoyenne.innerHTML = moyenne + "/20";
            if (!isNaN(tableau[taille - 1])) {
                reset();
            } else {

            }
        }
    }
}
function reset() {
    note1.value = "";
    note2.value = "";
    note3.value = "";
    note4.value = "";
    note5.value = "";
    note6.value = "";
    note7.value = "";
    note8.value = "";
    note9.value = "";
    note10.value = "";
}
