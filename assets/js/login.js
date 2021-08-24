$(document).ready(() => {
    $("#txtError").hide();
});

$("#btnLogIn").click((event) => {
    event.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();

    if (email.length > 0 && password.length > 0) {
        $("#txtError").fadeOut();
        $("#txtError").text("");

        auth.signInWithEmailAndPassword(email, password).then(userCredential => {
            location.href = "home.html";
        }).catch(error => {
            var errorMessage = error.message;
            $("#txtError").fadeIn();
            $("#txtError").text(errorMessage);
        });

    } else {
        $("#txtError").fadeIn();
        $("#txtError").text("Fill in all the fields");
    }
});