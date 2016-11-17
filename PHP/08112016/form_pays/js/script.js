var form = document.querySelector('form'),
    countryInput = document.querySelector('#pays'),
    capitalInput = document.querySelector('#capitale'),
    flagInput = document.querySelector('#drapeau'),
    resultDiv = document.querySelector('#result'),
    errorMessage = document.querySelector('#error');

window.onload = function(){
    countryInput.focus()
    var ajax = new XMLHttpRequest;
    ajax.onload = showCountry;
    ajax.open('GET', '../show_country.php', true);
    ajax.send();
}

function showCountry(){
    var json = JSON.parse(this.responseText);
    var table = document.createElement('table');
    table.id = "table";
    table.width = "700";
    table.cellSpacing = "20";
    table.className = "animated fadeIn"
    table.innerHTML = "<th width=\"100\">Pays</th><th width=\"100\">Capitale</th><th width=\"100\">Drapeau</th>"
    document.querySelector('.add-country').appendChild(table);
    json.map(function(elt){
        var entry = document.createElement('tr');
        entry.className = "animated fadeIn";
        entry.innerHTML = '<td>'+cap(elt.pays)+'</td><td>'+cap(elt.capitale)+'</td><td><img src="'+cap(elt.drapeau)+'" width="100"/></td>';
        table.appendChild(entry);
        console.log(elt);
    });
}

function cap(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    if (errorMessage.hasChildNodes()){errorMessage.removeChild(errorMessage.childNodes[0])};
    if (countryInput.value.trim().length < 1 || capitalInput.value.trim().length < 1 || flagInput.value.trim().length < 1) {
        var message = document.createElement('p');
        message.innerText = "Erreur de saisie... Veuillez recommencer";
        errorMessage.appendChild(message);
    } else {
        var rq = new XMLHttpRequest();
        rq.onload = loadResult;
        rq.open('POST', '../add_country.php', true);
        var formData = new FormData(form);
        rq.send(formData);
    }
    countryInput.value = ""
    capitalInput.value = ""
    flagInput.value = ""
    countryInput.focus()
});

function loadResult(){
    var json = JSON.parse(this.responseText),
        pays = json.result.pays,
        capitale = json.result.capitale,
        url = json.result.urlDrapeau,
        success = json.result.success;
        if (success) {
            if (errorMessage.hasChildNodes()){
                this.map(function(el){
                    this.removeChild(el);
                });
            }
            var newEntry = document.createElement('tr');
            newEntry.className = "animated fadeIn";
            newEntry.innerHTML = '<td>'+cap(pays)+'</td><td>'+cap(capitale)+'</td><td><img src="'+url+'" width="100"/></td>';
            if (document.querySelector('#table')){
                document.querySelector('#table').appendChild(newEntry);
            } else {
                var table = document.createElement('table');
                table.id = "table";
                table.width = "700";
                table.cellSpacing = "20";
                table.className = "animated fadeIn"
                table.innerHTML = "<th width=\"100\">Pays</th><th width=\"100\">Capitale</th><th width=\"100\">Drapeau</th>"
                document.body.appendChild(table);
                table.appendChild(newEntry)
            }
        } else {
            if (errorMessage.hasChildNodes()){
                this.map(function(el){
                    this.removeChild(el);
                });
            }
            var error = document.createElement('p');
            error.innerText = "Votre entrée existe déjà";
            error.className = "animated fadeIn"
            errorMessage.appendChild(error);
        }
};
