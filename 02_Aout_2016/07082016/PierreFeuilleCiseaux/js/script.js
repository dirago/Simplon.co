// variables jeu
var itemsIA = ["pierre", "feuille", "ciseaux"];
var userChoice;
var computerChoice;
var userWins = false;
var computerWins = false;
var deuce = false;

// variables DOM
var imagePierreUser = document.getElementById('rock_left');
var imageFeuilleUser = document.getElementById('paper_left');
var imageCiseauxUser = document.getElementById('scissor_left');
var imagePierreOrdi = document.getElementById('rock_right');
var imageFeuilleOrdi = document.getElementById('paper_right');
var imageCiseauxOrdi = document.getElementById('scissor_right');
var score = document.getElementById('score');
var textScoreOrdi = document.getElementById('scoreOrdi');
var textScoreUser = document.getElementById('scoreUser');
var allPixUser = document.getElementById('pixUser');
var allPixOrdi = document.getElementById('pixOrdi');
var activeUserRock = document.getElementById('pierreUserActive');
var activeUserPaper = document.getElementById('feuilleUserActive');
var activeUserScissor = document.getElementById('ciseauxUserActive');
var activeIARock = document.getElementById('pierreOrdiActive');
var activeIAPaper = document.getElementById('feuilleOrdiActive');
var activeIAScissor = document.getElementById('ciseauxOrdiActive');
var miniaturePierreOrdi = document.getElementById('miniature_pierre');
var miniatureFeuilleOrdi = document.getElementById('miniature_feuille');
var miniatureCiseauxOrdi = document.getElementById('miniature_ciseaux');
var makeachoice = document.getElementById('makeachoice');
var scoreUser = 0;
var scoreOrdi = 0;

document.getElementById('pierre').onclick = function() {
    genereItemIA();
    userChoice = this.id;
    elmt = this;
    shakeFist();
    setTimeout(function() {elmt.classList.add("selected");},1000);
    setTimeout(function() {hideActiveMiniature(computerChoice);},1000);
    setTimeout(function() {activeUserRock.style.display = "block";},1500);
    setTimeout(function() {showActive(computerChoice);},1500);
    play();
    setTimeout(function() {clearClass(activeUserRock);}, 5000);
    setTimeout(function() {hideActive(computerChoice);}, 5000);
    setTimeout(function() {clearClass(elmt);}, 5000);
    setTimeout(function() {showIAMiniature(computerChoice);}, 5000);
};

document.getElementById('feuille').onclick = function() {
    genereItemIA();
    userChoice = this.id;
    elmt = this;
    shakeFist();
    setTimeout(function() {elmt.classList.add("selected");},1000);
    setTimeout(function() {hideActiveMiniature(computerChoice);},1000);
    setTimeout(function() {activeUserPaper.style.display = "block";},1500);
    setTimeout(function() {showActive(computerChoice);},1500);
    play();
    setTimeout(function() {clearClass(activeUserPaper);}, 4000);
    setTimeout(function() {hideActive(computerChoice);}, 4000);
    setTimeout(function() {clearClass(elmt);}, 4000);
    setTimeout(function() {showIAMiniature(computerChoice);}, 4000);
};

document.getElementById('ciseaux').onclick = function() {
    genereItemIA();
    userChoice = this.id;
    elmt = this;
    shakeFist();
    setTimeout(function() {elmt.classList.add("selected");},1000);
    setTimeout(function() {hideActiveMiniature(computerChoice);},1000);
    setTimeout(function() {activeUserScissor.style.display = "block";},1500);
    setTimeout(function() {showActive(computerChoice);},1500);
    play();
    setTimeout(function() {clearClass(activeUserScissor);}, 5000);
    setTimeout(function() {hideActive(computerChoice);}, 5000);
    setTimeout(function() {clearClass(elmt);}, 5000);
    setTimeout(function() {showIAMiniature(computerChoice);}, 5000);
};
// fonctions DOM
function showActive(c) {
    switch (c) {
        case "pierre": activeIARock.style.display = "block"; break;
        case "feuille": activeIAPaper.style.display = "block"; break;
        case "ciseaux": activeIAScissor.style.display = "block"; break;
        default: return;
    }
}
function showIAMiniature(c) {
    switch (c) {
        case "pierre": miniaturePierreOrdi.style.visibility = "visible"; break;
        case "feuille": miniatureFeuilleOrdi.style.visibility = "visible"; break;
        case "ciseaux": miniatureCiseauxOrdi.style.visibility = "visible"; break;
        default: return;
    }
}
function hideActive(c) {
    switch (c) {
        case "pierre": activeIARock.style.display = "none"; break;
        case "feuille": activeIAPaper.style.display = "none"; break;
        case "ciseaux": activeIAScissor.style.display = "none"; break;
        default: return;
    }
}
function hideActiveMiniature(c) {
    switch (c) {
        case "pierre": miniaturePierreOrdi.style.visibility = "hidden"; break;
        case "feuille": miniatureFeuilleOrdi.style.visibility = "hidden"; break;
        case "ciseaux": miniatureCiseauxOrdi.style.visibility = "hidden"; break;
        default: return;
    }
}
function shakeFist() {
    allPixOrdi.classList.add("shake");
    allPixUser.classList.add("shake");
    setTimeout(function(){
        clearClass(allPixOrdi);
        clearClass(allPixUser);
    }, 1000);
}
function clearClass(c) {
    for (var i = 0; i < c.classList.length; i++) {
        if (c.classList[i] == "shake") {
            c.classList.remove("shake");
        } else if (c.classList[i] == "selected") {
            c.classList.remove("selected");
        }
    }
    if (c.style.display == "block") {
        c.style.display = "none";
    }
}
// fonctions jeu

function play() {
    whoWin();
    isSomebodyWins();
}

function genereItemIA() {
    var number = Math.floor(Math.random() * itemsIA.length);
    for (var i = 0; i < itemsIA.length; i++) {
        computerChoice = itemsIA[number];
    }
    console.log("L'ordinateur a choisi : ", computerChoice);
}

function whoWin() {
    if (userChoice === "pierre") {
        if (computerChoice === "ciseaux") {
            userWins = true;
            print();
        } else if (computerChoice === "feuille") {
            computerWins = true;
            print();
        } else {
            deuce = true;
            print();
        }
    } else if (userChoice === "feuille") {
        if (computerChoice === "pierre") {
            userWins = true;
            print();
        } else if (computerChoice === "ciseaux") {
            computerWins = true;
            print();
        } else {
            deuce = true;
            print();
        }
    } else if (userChoice === "ciseaux") {
        if (computerChoice === "pierre") {
            computerWins = true;
            print();
        } else if (computerChoice === "feuille") {
            userWins = true;
            print();
        } else {
            deuce = true;
            print();
        }
    }
}
function isSomebodyWins(){
    if (scoreUser == 3) {
        setTimeout(function(){
            textScoreUser.style.color = "green";
            score.insertAdjacentHTML('afterend', '<div id ="fin" style="position:absolute;left:50%;width:100px;margin-left:-50px;text-align:center;margin-top:20px;">Vous avez gagné en 3 manches !</div>');
            allPixUser.style.display = "none";
            allPixOrdi.style.display = "none";
            makeachoice.style.display = "none";
        }, 5000);
        setTimeout(function(){
            score.insertAdjacentHTML('afterend', '<div id="rejouer" style="position:absolute;left:50%;width:100px;margin-left:-50px;text-align:center;margin-top:100px;color:#944949;cursor:crosshair;" onClick="window.location.reload()" class="animated tada">Rejouer ?</div>');
        }, 6000);
    } else if (scoreOrdi == 3) {
        setTimeout(function(){
            textScoreOrdi.style.color = "green";
            score.insertAdjacentHTML('afterend', '<div id="fin" style="position:absolute;left:50%;width:100px;margin-left:-50px;text-align:center;margin-top:20px;">L\'ordinateur a gagné en 3 manches !</div>');
            allPixUser.style.display = "none";
            allPixOrdi.style.display = "none";
            makeachoice.style.display = "none";
        }, 5000);
        setTimeout(function(){
            score.insertAdjacentHTML('afterend', '<div id="rejouer" style="position:absolute;left:50%;width:100px;margin-left:-50px;text-align:center;margin-top:100px;color:#944949;cursor:crosshair;" onClick="window.location.reload()" class="animated tada">Rejouer ?</div>');
        }, 6000);
    } else {
        return;
    }
}
function initWinner() {
    userWins = false;
    computerWins = false;
    deuce = false;
}
function print() {
    if (userWins === true) {
        initWinner();
        scoreUser++;
        setTimeout(function(){textScoreUser.innerHTML = "<p class='animated flash'>" + scoreUser + "</p>";}, 3000);
    } else if (computerWins === true) {
        initWinner();
        scoreOrdi++;
        setTimeout(function(){textScoreOrdi.innerHTML = "<p class='animated flash'>" + scoreOrdi + "</p>";}, 3000);
    } else {
        initWinner();
        setTimeout(function(){score.insertAdjacentHTML('afterend', '<div id="temp" class="animated flash" style="position:absolute;left:50%;width:100px;margin-left:-50px;text-align:center;margin-top:20px;color:#6c6c6c;">Egalité</div>');}, 3000);
        setTimeout(function(){document.getElementById('temp').style.display = "none";}, 5000);
    }
}

function playAgain() {
    var choice = confirm('Vouslez-vous rejouer ?');
    return choice ? play() : false;
}
