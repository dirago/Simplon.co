var cards = document.getElementsByClassName('card');
var countdownText = document.getElementById('time');
var color;
var clickedCards = new Array;
var availableColors = ["#ff0000", "#00cb68", "#4b83c1", "#eff238", "#ff0000", "#00cb68", "#4b83c1", "#eff238"];
var genCards = [];
var chrono4, chrono20;
var ct, cts = 20;
var n;
var found = 0;

var Card = function(elmt, id, color) {
    this.elmt = elmt // html elmt
    this.id = id; // # in html
    this.color = color; // assigned color
    this.defaultColor = "#cdcdcd";
    this.found = false; // defined true if the card has been found, false by default
};
function assign(arr){
    for (var i = 0; i < arr.length; i++) {
        var rand = Math.floor(Math.random() * availableColors.length)
        genCards.push(new Card(arr[i], arr[i].id, availableColors[rand]));
        availableColors.splice(rand, 1);
    }
    return genCards;
};
function launchChrono(s, n) {
    if (s === 4) {
        chrono4 = setTimeout(function() {
            clickedCards = [];
            $(genCards[n].elmt).velocity({rotateY:"0deg", backgroundColor: genCards[n].defaultColor})
        }, 4000)
    } else {
        ct = setInterval(function() {
            countdownText.style.color = "black";
            countdownText.innerHTML = "Il vous reste " + s + "s";
            if (s === 0) {
                clearInterval(ct);
                countdownText.style.color = "red";
                countdownText.innerHTML = "You lose, try again";
                resetCards();
                $(document).one("click", function() {launchChrono(20)});
            }
            s--;
        }, 1000)
        chrono20 = setTimeout(function() {
            clickedCards = [];
            for (z = 0; z < genCards.length; z++) {
                $(genCards[z].elmt).velocity({rotateY:"0deg", backgroundColor: genCards[z].defaultColor})
            }
        }, 21000);
    }
}
function resetCards(){
    genCards = [];
    availableColors = ["#ff0000", "#00cb68", "#4b83c1", "#eff238", "#ff0000", "#00cb68", "#4b83c1", "#eff238"];
    found = 0;
    assign(cards)
}
function stopChrono(s) {
    if (s === 4) {
        clearTimeout(chrono4)
    } else {
        clearTimeout(chrono20)
        clearInterval(ct);
        countdownText.style.color = "green";
        countdownText.innerHTML = "You won !";
    }
}

$(function(){
    $('article').one("click", function() {launchChrono(20)});
    // when the document is loaded, we assign colors for each card
    assign(cards);
    // first use of jQuery, just for velocityJS
    $('div').click(function(event){
        stopChrono(4)
        for (var x = 0; x < genCards.length; x++) {
            if (genCards[x].id === this.id) {
                n = x;
            }
        }
        if (genCards[n].found) {
            return;
        }
        launchChrono(4, n);
        $(this).velocity({rotateY: "180deg", backgroundColor: genCards[n].color},{delay: 0})
        // we add the card into an arr to compare with the next clicked card
        clickedCards.push(genCards[n])
        if (clickedCards.length === 2) {
            if (clickedCards[0].id === clickedCards[1].id) {
                $(clickedCards[0].id).velocity({rotateY:"0deg", backgroundColor: clickedCards[0].defaultColor},{delay: 1000})
                clickedCards.splice(1,1);
            } else if (clickedCards[0].color !== clickedCards[1].color) {
                $(clickedCards[0].elmt).velocity({rotateY:"0deg",backgroundColor: clickedCards[0].defaultColor},{delay: 1000})
                clickedCards.splice(0,1);
            } else {
                stopChrono(4)
                clickedCards[0].found = true;
                clickedCards[1].found = true;
                found += 2;
                $(this).velocity({scale: "1.2"},{easing: [.05,.96,.85,.17]})
                $(this).velocity("reverse")
                clickedCards = [];
                if (found === 8) {
                    stopChrono(20);
                }
            }
        }
    })
});
