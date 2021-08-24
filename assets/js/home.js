$(document).ready(() => {
    $("#study").hide();
    $("#test").hide();
    $("#statistics").hide();
    $("#profile").hide();
});

window.addEventListener('DOMContentLoaded', async(e) => {
    auth.onAuthStateChanged(async user => {
        if (!user) {
            location.href = "index.html";
        }
    });
});

// Botones del dashboard

$("#btnHome").click(() => {
    $("#study").hide();
    $("#test").hide();
    $("#statistics").hide();
    $("#profile").hide();
    $("#welcome").fadeIn();
});

$("#btnStudy").click(() => {
    $("#study").fadeIn();
    $("#test").hide();
    $("#statistics").hide();
    $("#profile").hide();
    $("#welcome").hide();
});

$("#btnTest").click(() => {
    $("#study").hide();
    $("#test").fadeIn();
    $("#statistics").hide();
    $("#profile").hide();
    $("#welcome").hide();
});

$("#btnStatistics").click(() => {
    $("#study").hide();
    $("#test").hide();
    $("#statistics").fadeIn();
    $("#profile").hide();
    $("#welcome").hide();
});

$("#btnTest").click(() => {
    $("#study").hide();
    $("#test").fadeIn();
    $("#statistics").hide();
    $("#profile").hide();
    $("#welcome").hide();
});

$("#btnProfile").click(() => {
    $("#study").hide();
    $("#test").hide();
    $("#statistics").hide();
    $("#profile").fadeIn();
    $("#welcome").hide();
});

$("#btnLogOut").click(() => {
    auth.signOut().then(() => {
        location.href = "index.html";
    });
});

// Botón de descargar PDF

$("#btnDownload").click(() => {
    var link = document.createElement("a");
    link.href = "assets/doc/100q.pdf";
    link.download = 'assets/doc/100q.pdf';
    link.dispatchEvent(new MouseEvent('click'));
});

// Botón de iniciar prueba

$("#btnStart").click(() => {

});