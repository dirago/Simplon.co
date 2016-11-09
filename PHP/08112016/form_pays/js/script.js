var form = document.querySelector('form'),
    countryInput = document.querySelector('#pays'),
    capitalInput = document.querySelector('#capitale'),
    flagInput = document.querySelector('#drapeau'),
    resultDiv = document.querySelector('#result'),
    errorMessage = document.querySelector('#error');

form.addEventListener('submit', function(e){
    e.preventDefault();
    if (errorMessage.hasChildNodes()){errorMessage.removeChild(errorMessage.childNodes[0])};
    if (countryInput.value.trim().length < 1 || capitalInput.value.trim().length < 1 || flagInput.value.trim().length < 1) {
        var message = document.createElement('p');
        message.innerText = "Erreur";
        errorMessage.appendChild(message);
    } else {
        var ajax = new XMLHttpRequest();
        ajax.onload = loadResult();
        ajax.open('post', 'add_country.php', true);
        var formData = new FormData(form);
        ajax.send(formData);
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
