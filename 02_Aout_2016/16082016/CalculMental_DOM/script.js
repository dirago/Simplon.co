// Variables DOM

var displayLevel = document.getElementById('level');
var btnPlay = document.getElementById('btn_play');
var btnText = document.querySelectorAll('span')[0];
var displayQuestion = document.getElementById('question');
var input = document.querySelectorAll("input");
var gameOver = document.getElementById('gameover');


// Variables script

var n1, n2, n3;
var op1, op2;
var nbWin = 0, lvl = 1;

// Fonctions DOM

btnPlay.onclick = function() {
    btnPlay.classList.toggle("fadeOut");
    setTimeout(function() {
        btnPlay.style.display = "none";
    }, 1000);
    play(1);
};
function showLevel(n) {
    if (level == 2) {
        displayLevel.style.display = "block";
        displayLevel.innerHTML = "Level " + n;
        setTimeout(function() {
            displayLevel.classList.toggle("zoomOut");
            displayLevel.classList.toggle("bounceOut");
        }, 1500);
        setTimeout(function() {
            displayLevel.style.display = "none";
        }, 2500);
    } else {
        setTimeout(function() {
            displayLevel.style.display = "block";
            displayLevel.innerHTML = "Level " + n;
        }, 1000);
        setTimeout(function() {
            displayLevel.classList.toggle("zoomOut");
            displayLevel.classList.toggle("bounceOut");
        }, 2500);
        setTimeout(function() {
            displayLevel.style.display = "none";
        }, 3500);
    }
}
function play(level) {
    if (level == 2) {
        displayLevel.classList.toggle("bounceOut");
        displayLevel.classList.toggle("zoomOut");
    }
    showLevel(level)
    setTimeout(function() {
        return level == 1 ? levelOne() : levelTwo();
    }, 4000);
}
function levelOne() {
    generateNumbers();
    generateOperator();
    question = "Combien font " + n1 + " " + op1 + " " + n2 + " ?";
    solution = eval(n1 + op1 + n2);
    input[0].style.display = "block";
    input[0].focus();
    displayQuestion.style.display = "block";
    displayQuestion.innerHTML = question;
}
function levelTwo() {
    lvl = 2;
    generateNumbers();
    generateOperator();
    question = "Combien font " + n1 + " " + op1 + " " + n2 + " " + op2 + " " + n3 + " ?";
    solution = eval(n1 + op1 + n2 + op2 + n3);
    input[0].style.display = "block";
    input[0].focus();
    displayQuestion.style.display = "block";
    displayQuestion.innerHTML = question;
}
function launch(event) {
    return event.keyCode == 13 ? winOrLose() : false;
}
function winOrLose() {
    input[0].style.display = "none";
    displayQuestion.style.display = "none";
    response = input[0].value;
    if (response == solution && lvl == 2) {
        displayLevel.style.display = "block";
        displayLevel.innerHTML = "WOOOOW";
        setTimeout(function() {
            displayLevel.style.display = "none";
            gameOver.style.display = "block";
            gameOver.innerHTML = "Game Over";
            btnPlay.classList.toggle("fadeOut");
            btnText.innerHTML = "PLAY AGAIN ?"
            btnPlay.style.display = "flex";
            btnPlay.onclick = function() {
                window.location.reload();
            }
        }, 1000);
    } else if (response == solution) {
        nbWin++;
        displayLevel.style.display = "block";
        displayLevel.innerHTML = "Yeaaah";
        setTimeout(function() {
            input[0].value = null;
            displayLevel.style.display = "none";
            return nbWin == 3 ? play(2) : levelOne();
        }, 1000);
    } else {
        displayLevel.style.display = "block";
        displayLevel.innerHTML = "Nooooo";
        setTimeout(function() {
            retry();
        }, 2000);
        winOrLose();
    }
}

function retry() {
    displayLevel.style.display = "none";
    input[0].value = null;
    input[0].style.display = "block";
    input[0].focus();
    displayQuestion.style.display = "block";
    displayQuestion.innerHTML = question;
}

// Fonctions script pour

function generateNumbers() {
    n1 = Math.floor(Math.random() * 10);
    n2 = Math.floor(Math.random() * 10);
    n3 = Math.floor(Math.random() * 10);
}
function generateOperator() {
    var ops = ["+", "-", "*"];
    op1 = ops[Math.floor(Math.random() * ops.length)];
    op2 = ops[Math.floor(Math.random() * ops.length)];
}
