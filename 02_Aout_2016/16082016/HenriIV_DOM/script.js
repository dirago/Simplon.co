var responseUser = document.getElementById('responseUser');
var display = document.getElementById('sentence');
var pulse = display.classList.toggle('pulse');
document.getElementById('btn').onclick = function() {
    var submittedResponse = responseUser.value.toLowerCase();
    display.classList.toggle('pulse');
    if (submittedResponse === "blanc") {
        display.style.color = "green";
        display.innerHTML = "Bonne réponse !";
        setTimeout(function() {
            display.classList.toggle('pulse');
        }, 1000);
    } else {
        display.style.color = "red";
        display.innerHTML = "Mauvaise réponse !";
        setTimeout(function() {
            display.classList.toggle('pulse');
        }, 1000);
    }
};
