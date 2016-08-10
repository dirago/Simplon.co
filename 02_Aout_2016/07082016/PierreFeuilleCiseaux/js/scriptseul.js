var itemsIA = ["pierre", "feuille", "ciseaux", "puits"];
var userChoice;
var computerChoice;
var userWins = false;
var computerWins = false;
var deuce = false;
play();

function play() {
    userChoice = parseInt(prompt("1) Pierre || 2) Feuille || 3) Ciseaux || 4) Puits"));
    assigneChoix(userChoice);
    genereItemIA();
    whoWin();
    playAgain();
}

function initWinner() {
    userWins = false;
    computerWins = false;
    deuce = false;
}
function assigneChoix(n) {
    if (n === 1) {
        userChoice = "pierre";
    } else if (n === 2) {
        userChoice = "feuille";
    } else if (n === 3) {
        userChoice = "ciseaux";
    } else if (n === 4) {
        userChoice = "puits";
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
        } else if (computerChoice === "puits") {
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
        } else if (computerChoice === "puits") {
            userWins = true;
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
        } else if (computerChoice === "puits") {
            computerWins = true;
            annonce()
        } else {
            deuce = true;
            annonce()
        }
    } else if (userChoice === "puits") {
        if (computerChoice === "pierre") {
            userWins = true;
            annonce()
        } else if (computerChoice === "feuille") {
            computerWins = true;
            annonce()
        } else if (computerChoice === "ciseaux") {
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
        initWinner();
    } else if (computerWins === true) {
        console.log("Le gagnant est : Computer");
        initWinner();
    } else {
        console.log("Egalité !");
        initWinner();
    }
}

function playAgain() {
    var choice = confirm('Voulez-vous rejouer ?');
    return choice ? play() : false;
}
