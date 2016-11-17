'use strict';

var url = 'https://www.googleapis.com/calendar/v3/calendars/simplon.co_7sc0sp073u3svukpopmhob9fmg%40group.calendar.google.com/events?key=AIzaSyADm7UvQFnHmkfo_sei1oZoLvx_X-_mhFI';
var container = document.querySelector('main');
var formBtn = document.querySelector('#form-btn');
var titleInput = document.querySelector('#title');
var mailInput = document.querySelector('#mail');
var startInput = document.querySelector('#date-debut');
var endInput = document.querySelector('#date-fin');
var errorContainer = document.querySelector('#error');
var form = document.querySelector('form');

var req = new XMLHttpRequest();
req.onload = loadItems;
req.open('GET', url, true);
req.send();

function loadItems() {
    var json = JSON.parse(req.responseText);
    var items = json.items;
    var i = 0;
    // Création du titre de l'article
    var eventsTitle = document.createElement('article');
    eventsTitle.className = "title";
    eventsTitle.innerHTML = "<h2>Liste des évènements Simplon.co</h2>";
    container.appendChild(eventsTitle);
    items.map(function (e) {
        var titre = e.summary;
        var debut = new Date(e.start.dateTime);
        var fin = new Date(e.end.dateTime);
        var mail = e.creator.email;
        i += 1;
        listEventElement(i, titre, debut, fin, mail);
    });
}

function listEventElement(nb, titre, debut, fin, mail) {
    // Création de l'article
    var article = document.createElement('article');
    article.className = "event";
    container.appendChild(article);
    var h3 = document.createElement('h3');
    h3.innerText = 'Event #' + nb;
    article.appendChild(h3);
    var title = document.createElement('p');
    title.innerText = "Titre : " + titre;
    article.appendChild(title);
    var startTime = document.createElement('p');
    var day = getDayLetters(debut.getDay());
    var date = debut.getDate();
    var month = getMonthLetters(debut.getMonth());
    var year = debut.getFullYear();
    var hour = debut.getHours();
    var minutes = getFullMinutes(debut.getMinutes());
    var completeStartDate = day + ' ' + date + ' ' + month + ' ' + year + ' à ' + hour + 'h' + minutes;
    if (isNaN(debut.getTime())) {
        startTime.innerText = "Début de l'évènement : Pas de date fixée";
    } else {
        startTime.innerText = "Début de l'évènement : " + completeStartDate;
    }
    article.appendChild(startTime);
    var endTime = document.createElement('p');
    day = getDayLetters(fin.getDay());
    date = fin.getDate();
    month = getMonthLetters(fin.getMonth());
    year = fin.getFullYear();
    hour = fin.getHours();
    minutes = getFullMinutes(fin.getMinutes());
    var completeEndDate = day + ' ' + date + ' ' + month + ' ' + year + ' à ' + hour + 'h' + minutes;
    if (isNaN(fin.getTime())) {
        endTime.innerText = "Fin de l'évènement : Pas de date fixée";
    } else {
        endTime.innerText = "Fin de l'évènement : " + completeEndDate;
    }
    article.appendChild(endTime);
    var userMail = document.createElement('p');
    userMail.innerText = "Créateur : " + mail;
    article.appendChild(userMail);
    // Création des boutons
    var input = document.createElement('input');
    input.className = "btn";
    input.setAttribute('data-title', titre);
    input.setAttribute('data-creator', mail);
    input.setAttribute('data-start', completeStartDate);
    input.setAttribute('data-end', completeEndDate);
    input.type = "button";
    input.value = "+";
    article.appendChild(input);
    input.addEventListener('click', function (e) {
        var title = e.target.dataset.title;
        var creator = e.target.dataset.creator;
        var start = e.target.dataset.start;
        var end = e.target.dataset.end;
        sendToDatabase(title, creator, start, end);
    });
}

function sendToDatabase(title, creator, start, end) {
    var req = new XMLHttpRequest();
    req.onload = function () {
        console.log(this.responseText);
    };
    req.open('POST', '../../add_event.php', true);
    var formData = new FormData();
    formData.append('title', title);
    formData.append('mail', creator);
    formData.append('start-event', start);
    formData.append('end-event', end);
    req.send(formData);
}

function getDayLetters(nb) {
    switch (nb) {
        case 1:
            return 'Lundi';break;
        case 2:
            return 'Mardi';break;
        case 3:
            return 'Mercredi';break;
        case 4:
            return 'Jeudi';break;
        case 5:
            return 'Vendredi';break;
        case 6:
            return 'Samedi';break;
        case 7:
            return 'Dimanche';break;
        default:
            return 'error';
    }
}
function getMonthLetters(nb) {
    switch (nb) {
        case 0:
            return 'Janvier';break;
        case 1:
            return 'Février';break;
        case 2:
            return 'Mars';break;
        case 3:
            return 'Avril';break;
        case 4:
            return 'Mai';break;
        case 5:
            return 'Juin';break;
        case 6:
            return 'Juillet';break;
        case 7:
            return 'Août';break;
        case 8:
            return 'Septembre';break;
        case 9:
            return 'Octobre';break;
        case 10:
            return 'Novembre';break;
        case 11:
            return 'Décembre';break;
        default:
            return 'error';
    }
}
function getFullMinutes(nb) {
    return nb === 0 ? "00" : nb;
}

formBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var title = titleInput.value,
        mail = mailInput.value,
        start = startInput.value,
        end = endInput.value;
    if (errorContainer.hasChildNodes()) {
        errorContainer.removeChild(errorContainer.childNodes[0]);
    }
    if (title.trim() === "" || mail.trim() === "" || start.trim() === "" || end.trim() === "") {
        console.log("champs vides");
        var message = document.createElement('p');
        message.className = "message";
        message.innerText = "Veuillez remplir tous les champs";
        errorContainer.appendChild(message);
    } else {
        var _req = new XMLHttpRequest();
        _req.onload = function () {
            console.log("Formulaire envoyé !");
            console.log(this.responseText);
        };
        _req.open('POST', '../../add_event.php', true);
        var formData = new FormData(form);
        _req.send(formData);
    }
});