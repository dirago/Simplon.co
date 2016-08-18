// generals vars
var result;
var n1, n2, nPlus;
var op;
var displayed;
// screen
var displayResult = document.getElementById('result');
// numbers
var one = document.getElementById('un').onclick = function() {checkNumber(1);};
var two = document.getElementById('deux').onclick = function() {checkNumber(2);};
var three = document.getElementById('trois').onclick = function() {checkNumber(3);};
var four = document.getElementById('quatre').onclick = function() {checkNumber(4);};
var five = document.getElementById('cinq').onclick = function() {checkNumber(5);};
var six = document.getElementById('six').onclick = function() {checkNumber(6);};
var seven = document.getElementById('sept').onclick = function() {checkNumber(7);};
var eight = document.getElementById('huit').onclick = function() {checkNumber(8);};
var nine = document.getElementById('neuf').onclick = function() {checkNumber(9);};
var zero = document.getElementById('zero').onclick = function() {checkNumber(0);};
// opérateurs
document.getElementById('plus').onclick = function() {
    this.style.borderBottom = "2px solid #000";
    this.style.borderLeft = "2px solid #000";
    this.style.borderTop = "1px solid #000";
    this.style.borderRight = "1px solid #000";
    op = "+";
    return op;
};
document.getElementById('plus').onblur = function() {
    this.style = "none"
};
document.getElementById('moins').onclick = function() {
    this.style.borderBottom = "2px solid #000";
    this.style.borderLeft = "2px solid #000";
    this.style.borderTop = "1px solid #000";
    this.style.borderRight = "1px solid #000";
    op = "-";
    return op;
};
document.getElementById('moins').onblur = function() {
    this.style = "none"
};
document.getElementById('fois').onclick = function() {
    this.style.borderBottom = "2px solid #000";
    this.style.borderLeft = "2px solid #000";
    this.style.borderTop = "1px solid #000";
    this.style.borderRight = "1px solid #000";
    op = "*";
    return op;
};
document.getElementById('fois').onblur = function() {
    this.style = "none"
};
document.getElementById('diviser').onclick = function() {
    this.style.borderBottom = "2px solid #000";
    this.style.borderLeft = "2px solid #000";
    this.style.borderTop = "1px solid #000";
    this.style.borderRight = "1px solid #000";
    op = "/";
    return op;
};
document.getElementById('diviser').onblur = function() {
    this.style = "none"
};
// others
document.getElementById('AC').onclick = function() {
    reset();
};
document.getElementById('plusmoins').onclick = function() {
    if (displayed === "nPlus") {
        nPlus = nPlus * -1;
        display(nPlus, "nPlus");
    } else if (displayed === "n2") {
        n2 = n2 * -1;
        display(n2, "n2");
    } else if (displayed === "n1"){
        n1 = n1 * -1;
        display(n1, "n1");
    } else {
        result = result * -1;
        display(result, "result");
    }
};
document.getElementById('pourcentage').onclick = function() {
    if (displayed === "nPlus") {
        nPlus = nPlus * 0.01;
        display(nPlus, "nPlus");
    } else if (displayed === "n2") {
        n2 = n2 * 0.01;
        display(n2, "n2");
    } else if (displayed === "n1") {
        n1 = n1 * 0.01;
        display(n1, "n1");
    } else if (displayed === "result") {
        result = result * 0.01;
        display(result, "result");
    } else {
        result = 0;
    }
};
document.getElementById('point').onclick = function() {
    if (displayed === "nPlus") {
        nPlus += ".";
        display(nPlus, "nPlus");
    } else if (displayed === "n2") {
        n2 += ".";
        display(n2, "n2");
    } else if (displayed === "n1") {
        n1 += ".";
        display(n1, "n1");
    } else if (displayed === "result") {
        result += ".";
        display(result, "result");
    }
};
document.getElementById('egal').onclick = function() {
    if (typeof(nPlus) !== undefined && result !== undefined) {
        calculatePlus(op, nPlus);
    } else if (result === undefined && n1 && op && n2) {
        calculate(n1, op, n2);
    } else {
        display(eval(displayed), "displayed");
    }

};

// functions
function display(n, d) {
    displayed = d;
    console.log(displayed + " = " + n)
    displayResult.innerHTML = n.toString().replace('.', ',');
}
function checkNumber(n) {
    if (typeof(n1) === "undefined") {
        n1 = n;
        display(n1, "n1");
    } else if(typeof(n1) !== "undefined" && typeof(op) === "undefined") {
        n1 += ''+n+'';
        display(n1, "n1");
    } else if (typeof(n2) !== "number" && typeof n2 !== "string" && typeof(op) === "string" && typeof(result) === "undefined") {
        n2 = n;
        display(n2, "n2");
    } else if (typeof(n2) !== "undefined" && typeof(result) === "undefined") {
        n2 += ''+n+'';
        if (parseInt(n2) !== parseFloat(n2)) {
            n2 = parseFloat(n2);
        }
        display(n2, "n2");
    }  else if (typeof(n1) !== "undefined" && typeof(n2) !== "undefined" && typeof(result) !== "undefined" && typeof(nPlus) === "undefined") {
        nPlus = n;
        display(nPlus, "nPlus");
    } else if (typeof nPlus !== "undefined" && displayed === "result" ) {
        nPlus = n;
        display(nPlus, "nPlus");
    } else {
        nPlus += ''+n+'';
        display(nPlus, "nPlus");
    }
}
function calculate(n1, op, n2) {
    result = eval(n1 + op + n2);
    if (parseInt(result) !== parseFloat(result)) {
        result = result.toFixed(2)
    }
    display(result, "result");
}
function calculatePlus(op, nPlus) {
    result = eval(result + op + nPlus);
    if (parseInt(result) !== parseFloat(result)) {
        result = result.toFixed(2)
    }
    display(result, "result");
}
function reset() {
    result = undefined;
    n1 = undefined;
    n2 = undefined;
    nPlus = undefined;
    op = undefined;
    displayResult.innerHTML = 0;
}
