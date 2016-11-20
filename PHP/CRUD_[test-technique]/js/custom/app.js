let url = 'https://www.googleapis.com/calendar/v3/calendars/simplon.co_7sc0sp073u3svukpopmhob9fmg%40group.calendar.google.com/events?key=AIzaSyADm7UvQFnHmkfo_sei1oZoLvx_X-_mhFI';
let container = document.querySelector('main');
let formBtn = document.querySelector('#form-btn');
let titleInput = document.querySelector('#title');
let mailInput = document.querySelector('#mail');
let startInput = document.querySelector('#date-debut');
let endInput = document.querySelector('#date-fin');
let errorContainer = document.querySelector('#error');
let form = document.querySelector('form');

let req = new XMLHttpRequest();
req.onload = loadItems;
req.open('GET', url, true);
req.send();

function loadItems(){
    let json = JSON.parse(req.responseText);
    let items = json.items;
    let i = 0;
    // Création du titre de l'article
    let eventsTitle = document.createElement('article');
    eventsTitle.className = "title";
    eventsTitle.innerHTML = "<h2>Liste des évènements Simplon.co</h2>"
    container.appendChild(eventsTitle);
    items.map(e => {
        let titre = e.summary;
        let debut = new Date(e.start.dateTime);
        let fin = new Date(e.end.dateTime);
        let mail = e.creator.email;
        i += 1;
        listEventElement(i, titre, debut, fin, mail);
    });
}

function listEventElement(nb, titre, debut, fin, mail){
    // Création de l'article
    let article = document.createElement('article');
    article.className = "event"
    container.appendChild(article);
    let h3 = document.createElement('h3');
    h3.innerText = 'Event #' + nb;
    article.appendChild(h3);
    let title = document.createElement('p');
    title.innerText = "Titre : " + titre;
    article.appendChild(title);
    let startTime = document.createElement('p');
    let day = getDayLetters(debut.getDay());
    let date = debut.getDate();
    let month = getMonthLetters(debut.getMonth());
    let year = debut.getFullYear();
    let hour = debut.getHours();
    let minutes = getFullMinutes(debut.getMinutes());
    let completeStartDate = day + ' ' + date + ' ' + month + ' ' + year + ' à ' + hour + 'h' + minutes;
    if (isNaN(debut.getTime())) {
        startTime.innerText = "Début de l'évènement : Pas de date fixée"
    } else {
        startTime.innerText = "Début de l'évènement : " + completeStartDate;
    }
    article.appendChild(startTime);
    let endTime = document.createElement('p');
    day = getDayLetters(fin.getDay());
    date = fin.getDate();
    month = getMonthLetters(fin.getMonth());
    year = fin.getFullYear();
    hour = fin.getHours();
    minutes = getFullMinutes(fin.getMinutes());
    let completeEndDate = day + ' ' + date + ' ' + month + ' ' + year + ' à ' + hour + 'h' + minutes;
    if (isNaN(fin.getTime())) {
        endTime.innerText = "Fin de l'évènement : Pas de date fixée"
    } else {
        endTime.innerText = "Fin de l'évènement : " + completeEndDate;
    }
    article.appendChild(endTime);
    let userMail = document.createElement('p');
    userMail.innerText = "Créateur : " + mail;
    article.appendChild(userMail);
    // Création des boutons
    let input = document.createElement('input');
    input.className = "btn";
    input.setAttribute('data-title', titre);
    input.setAttribute('data-creator', mail);
    input.setAttribute('data-start', completeStartDate);
    input.setAttribute('data-end', completeEndDate);
    input.type = "button";
    input.value = "+";
    article.appendChild(input)
    input.addEventListener('click', function(e){
        let title = e.target.dataset.title;
        let creator = e.target.dataset.creator;
        let start = e.target.dataset.start;
        let end = e.target.dataset.end;
        sendToDatabase(title, creator, start, end);
    })
}

function sendToDatabase(title, creator, start, end){
    let req = new XMLHttpRequest();
    req.onload = function(){
        console.log(this.responseText);
    };
    req.open('POST', '../../add_event.php', true);
    let formData = new FormData();
    formData.append('title', title);
    formData.append('mail', creator);
    formData.append('start-event', start);
    formData.append('end-event', end);
    req.send(formData);
}

function getDayLetters(nb){
    switch (nb) {
        case 1: return 'Lundi'; break;
        case 2: return 'Mardi'; break;
        case 3: return 'Mercredi'; break;
        case 4: return 'Jeudi'; break;
        case 5: return 'Vendredi'; break;
        case 6: return 'Samedi'; break;
        case 7: return 'Dimanche'; break;
        default: return 'error'
    }
}
function getMonthLetters(nb){
    switch (nb) {
        case 0: return 'Janvier'; break;
        case 1: return 'Février'; break;
        case 2: return 'Mars'; break;
        case 3: return 'Avril'; break;
        case 4: return 'Mai'; break;
        case 5: return 'Juin'; break;
        case 6: return 'Juillet'; break;
        case 7: return 'Août'; break;
        case 8: return 'Septembre'; break;
        case 9: return 'Octobre'; break;
        case 10: return 'Novembre'; break;
        case 11: return 'Décembre'; break;
        default: return 'error'
    }
}
function getFullMinutes(nb){
    return nb === 0 ? "00" : nb
}

formBtn.addEventListener('click', e => {
    e.preventDefault();
    let title = titleInput.value,
        mail = mailInput.value,
        start = startInput.value,
        end = endInput.value;
    if (errorContainer.hasChildNodes()){
        errorContainer.removeChild(errorContainer.childNodes[0])
    }
    if (title.trim() === "" || mail.trim() === "" || start.trim() === "" || end.trim() === ""){
        console.log("champs vides");
        let message = document.createElement('p');
        message.className = "message";
        message.innerText = "Veuillez remplir tous les champs";
        errorContainer.appendChild(message);
    } else {
        let req = new XMLHttpRequest();
        req.onload = function(){
            console.log("Formulaire envoyé !");
            console.log(this.responseText);
        }
        req.open('POST', '../../add_event.php', true);
        let formData = new FormData(form);
        req.send(formData);
    }
})
