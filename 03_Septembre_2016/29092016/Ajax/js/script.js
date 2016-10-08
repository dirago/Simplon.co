function traiteResultat(){
	console.log("resultat", this.responseText);
	var data = JSON.parse(this.responseText);
	console.log('Nom 0', data.participants[0].nom);
}

function afficheProgression(event){
    var pourcentage = (event.loaded/event.total)*100;
    console.log(event);
    console.log(event.loaded);
    console.log(event.total);
    document.getElementById('progress-bar-progress').width = pourcentage.toString() + "%";
}

var requete = new XMLHttpRequest();

requete.onprogress = afficheProgression;

requete.onload = traiteResultat;

requete.onerror = function () {
    console.log("Erreur : ");
};

requete.open("get", "users.txt", true);

requete.send();
