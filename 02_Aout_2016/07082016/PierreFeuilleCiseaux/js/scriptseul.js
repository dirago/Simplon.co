var itemsIA = ["pierre", "feuille", "ciseaux"];
var userChoice;
var computerChoice;
var userWins = false;
var computerWins = false;
var deuce = false;
play();

function play() {
    userChoice = parseInt(prompt("1) Pierre || 2) Feuille || 3) Ciseaux"));
    assigneChoix(userChoice);
    genereItemIA();
    whoWin();
    playAgain();
}

function assigneChoix(n) {
    if (n === 1) {
        userChoice = "pierre";
    } else if (n === 2) {
        userChoice = "feuille";
    } else if (n === 3) {
        userChoice = "ciseaux";
    } else {
        console.log("erreur");
        play();
    }
    console.log("Vous avez choisi : ", userChoice);
}

function genereItemIA() {
    var number = Math.floor(Math.random() * 3);
    for (var i = 0; i < itemsIA.length; i++) {
        computerChoice = itemsIA[number];
    }
    console.log("L'ordinateur a choisi : ", computerChoice);
}

function whoWin() {
    if (userChoice === "pierre") {
        if (computerChoice === "ciseaux") {
            userWins = true;
            annonce()
        } else if (computerChoice === "feuille") {
            computerWins = true;
            annonce()
        } else {
            deuce = true;
            annonce()
        }
    } else if (userChoice === "feuille") {
        if (computerChoice === "pierre") {
            userWins = true;
            annonce()
        } else if (computerChoice === "ciseaux") {
            computerWins = true;
            annonce()
        } else {
            deuce = true;
            annonce()
        }
    } else if (userChoice === "ciseaux") {
        if (computerChoice === "pierre") {
            computerWins = true;
            annonce()
        } else if (computerChoice === "feuille") {
            userWins = true;
            annonce()
        } else {
            deuce = true;
            annonce()
        }
    }
}

function annonce() {
    if (userWins === true) {
        console.log("Le gagnant est : Vous");
    } else if (computerWins === true) {
        console.log("Le gagnant est : Computer");
    } else {
        console.log("Egalité !");
    }
}

function playAgain() {
    var choice = confirm('Vouslez-vous rejouer ?');
    return choice ? play() : false;
}
