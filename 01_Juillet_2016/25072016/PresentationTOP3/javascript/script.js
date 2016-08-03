function afficherMenu() {
    etat = document.getElementById("nav").style.display;
    if (etat == "none") {
        document.getElementById("nav").style.display = "block";
    } else {
        document.getElementById("nav").style.display = "none";
    }
}

function afficheAllPix() {
    document.getElementById("firstPix").style.visibility = "visible";
    document.getElementById("secondPix").style.visibility = "visible";
    document.getElementById("thirdPix").style.visibility = "visible";
    document.getElementById("blackRank1").style.visibility = "visible";
    document.getElementById("blackRank2").style.visibility = "visible";
    document.getElementById("blackRank3").style.visibility = "visible";
    document.getElementById("main_wrapper").style.backgroundColor = "rgba(189, 184, 177, 0.42)";
    document.getElementById("header").style.backgroundColor = "rgb(189, 184, 177)";
    document.getElementById("liColor").style.color = "#FFF";
    document.getElementById("liColor2").style.color = "#FFF";
    document.getElementById("liColor3").style.color = "#FFF";
    document.getElementById("liColor4").style.color = "#FFF";
    document.getElementById("ul").style.borderLeft = "5px solid #FFF";
    document.getElementById("logoJam3").style.visibility = "visible";
    document.getElementById("logoAkaru").style.visibility = "visible";
    document.getElementById("logoDiadora").style.visibility = "visible";
    document.getElementById("commentFirstPix").style.visibility = "hidden";
    document.getElementById("commentSecondPix").style.visibility = "hidden";
    document.getElementById("commentThirdPix").style.visibility = "hidden";
}

function cacher23() {
    document.getElementById("firstPix").style.visibility = "visible";
    document.getElementById("blackRank1").style.visibility = "hidden";
    document.getElementById("secondPix").style.visibility = "hidden";
    document.getElementById("blackRank2").style.visibility = "hidden";
    document.getElementById("thirdPix").style.visibility = "hidden";
    document.getElementById("blackRank3").style.visibility = "hidden";
    document.getElementById("main_wrapper").style.backgroundColor = "rgba(189, 184, 177, 0.8)";
    document.getElementById("header").style.backgroundColor = "rgb(189, 184, 177)";
    document.getElementById("liColor").style.color = "#f91d66";
    document.getElementById("liColor2").style.color = "#f91d66";
    document.getElementById("liColor3").style.color = "#f91d66";
    document.getElementById("liColor4").style.color = "#f91d66";
    document.getElementById("ul").style.borderLeft = "5px solid #000";
    document.getElementById("logoJam3").style.visibility = "hidden";
    document.getElementById("logoAkaru").style.visibility = "hidden";
    document.getElementById("logoDiadora").style.visibility = "hidden";
    document.getElementById("commentFirstPix").style.visibility = "visible";
    document.getElementById("commentSecondPix").style.visibility = "hidden";
    document.getElementById("commentThirdPix").style.visibility = "hidden";
}

function cacher13() {
    document.getElementById("secondPix").style.visibility = "visible";
    document.getElementById("blackRank2").style.visibility = "hidden";
    document.getElementById("firstPix").style.visibility = "hidden";
    document.getElementById("blackRank1").style.visibility = "hidden";
    document.getElementById("thirdPix").style.visibility = "hidden";
    document.getElementById("blackRank3").style.visibility = "hidden";
    document.getElementById("main_wrapper").style.backgroundColor = "rgb(243, 243, 243)";
    document.getElementById("header").style.backgroundColor = "rgb(227, 227, 227)";
    document.getElementById("liColor").style.color = "#000";
    document.getElementById("liColor2").style.color = "#000";
    document.getElementById("liColor3").style.color = "#000";
    document.getElementById("liColor4").style.color = "#000";
    document.getElementById("ul").style.borderLeft = "5px solid hsla(0,0%,75%,1)";
    document.getElementById("logoJam3").style.visibility = "hidden";
    document.getElementById("logoAkaru").style.visibility = "hidden";
    document.getElementById("logoDiadora").style.visibility = "hidden";
    document.getElementById("commentFirstPix").style.visibility = "hidden";
    document.getElementById("commentSecondPix").style.visibility = "visible";
    document.getElementById("commentThirdPix").style.visibility = "hidden";
}

function cacher12() {
    document.getElementById("thirdPix").style.visibility = "visible";
    document.getElementById("blackRank3").style.visibility = "hidden";
    document.getElementById("firstPix").style.visibility = "hidden";
    document.getElementById("blackRank1").style.visibility = "hidden";
    document.getElementById("secondPix").style.visibility = "hidden";
    document.getElementById("blackRank2").style.visibility = "hidden";
    document.getElementById("main_wrapper").style.backgroundColor = "rgb(141, 125, 135)";
    document.getElementById("header").style.backgroundColor = "rgb(57, 49, 68)";
    document.getElementById("liColor").style.color = "#f9ed35";
    document.getElementById("liColor2").style.color = "#f9ed35";
    document.getElementById("liColor3").style.color = "#f9ed35";
    document.getElementById("liColor4").style.color = "#f9ed35";
    document.getElementById("ul").style.borderLeft = "5px solid #918747";
    document.getElementById("logoJam3").style.visibility = "hidden";
    document.getElementById("logoAkaru").style.visibility = "hidden";
    document.getElementById("logoDiadora").style.visibility = "hidden";
    document.getElementById("commentFirstPix").style.visibility = "hidden";
    document.getElementById("commentSecondPix").style.visibility = "hidden";
    document.getElementById("commentThirdPix").style.visibility = "visible";
}
