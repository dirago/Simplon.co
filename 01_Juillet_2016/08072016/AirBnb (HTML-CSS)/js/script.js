var video2 = document.getElementById('video2');
var video1 = document.getElementById('video1');
var firstBloc = document.getElementById('first_bloc');
var secondBloc = document.getElementById('second_bloc');
var blocVideo2 = document.getElementById('videoFS');
var btn_play = document.getElementById('btn_play');

function killForVideo2() {
    if (firstBloc.style.display === "none" && secondBloc.style.display === "none") {
        firstBloc.style.display="block";
        secondBloc.style.display="block";
        blocVideo2.style.display="none";
        video2.load();
        video2.muted = true;
    } else {
        firstBloc.style.display="none";
        secondBloc.style.display="none";
        blocVideo2.style.display="block";
        video2.play();
        video2.muted = false;
        btn_play.style.display="none";
    }
}

function pauseVideo2() {
    if (video2.paused) {
        video2.play();
        btn_play.style.display="none";
    } else {
        video2.pause();
        btn_play.style.display="block";
    }
}
