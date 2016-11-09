var btn = document.querySelectorAll('#btn')[0];
var loginInput = document.querySelectorAll('input')[0];
var pwInput = document.querySelectorAll('input')[1];
var form = document.querySelectorAll('form')[0];
var formContainer = document.querySelectorAll('.panel-body')[0];
var header = document.querySelectorAll('header')[0];
var error;

btn.addEventListener('click', function(e){
    if (error && error.innerHTML.length > 0) {formContainer.removeChild(error)};
    if (loginInput.value.trim() == "") {
        error = document.createElement('div');
        error.innerHTML = "<div class='alert alert-danger' role='alert'>Vous n'avez pas renseigné votre login</div>"
        formContainer.insertBefore(error, form);
    } else if (pwInput.value.trim() === ""){
        error = document.createElement('div');
        error.innerHTML = "<div class='alert alert-danger' role='alert'>Vous n'avez pas renseigné votre mot de passe</div>"
        formContainer.insertBefore(error, form);
    } else if (pwInput.value.trim().length <= 4) {
        error = document.createElement('div');
        error.innerHTML = "<div class='alert alert-danger' role='alert'>Votre mot de passe est trop court (+ de 4 caractères & sans espaces)</div>"
        formContainer.insertBefore(error, form);
    } else {
        var req = new XMLHttpRequest();
        req.onload = loadResult;
        req.open("POST", "check.php", true);
        // je crée le formdata pour poster les infos vers le php
        var formData = new FormData(form);
        req.send(formData);
    }
});

function loadResult(){
    var json = JSON.parse(this.responseText);
    var res = json.result.response;
    var login = json.result.login;
    if (res === "OK") {
        error = document.createElement('div');
        error.innerHTML = "<div class='alert alert-success' role='alert'>Bienvenue cher " + login + "</div>"
        formContainer.insertBefore(error, form);
        deco = document.createElement('a');
        deco.innerHTML = '<a href="logout.php">Déconnexion</a>';
        header.appendChild(deco);
        console.log(json.result);
    } else {
        error = document.createElement('div');
        error.innerHTML = "<div class='alert alert-danger' role='alert'>Mauvaise combinaison login/mot de passe</div>"
        formContainer.insertBefore(error, form);
    }
};
