$(document).ready(() => {
    $("#txtError").hide();
    $("#btnGoToLogIn").hide();
});

$("#btnSignIn").click((event) => {
    event.preventDefault();

    var name = $("#name").val();
    var lastName = $("#lastName").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var password2 = $("#password2").val();

    if (name.length > 0 && lastName.length > 0 && email.length > 0 && password.length > 0 && password2.length > 0) {
        $("#txtError").fadeOut();
        $("#txtError").text("");

        // Verificar si las contraseñas coinciden
        if (password == password2) {
            $("#txtError").fadeOut();
            $("#txtError").text("");

            auth.createUserWithEmailAndPassword(email, password).then(userCredential => {
                db.collection('users').doc().set({
                    name,
                    lastName,
                    email
                }).then(() => {
                    $("#txtSuccess").fadeIn();
                    $("#txtSuccess").text("Your account has been created. You are going to be redirected to login page in 5 seconds");
                    setTimeout(() => {
                        location.href = "index.html";
                    }, 5000);
                }).catch(error => {
                    var errorMessage = error.message;
                    $("#txtError").fadeIn();
                    $("#txtError").text(errorMessage);
                });
            }).catch(error => {
                var errorMessage = error.message;
                $("#txtError").fadeIn();
                $("#txtError").text(errorMessage);
            });
        } else {
            $("#txtError").fadeIn();
            $("#txtError").text("The passwords does not match");
        }


    } else {
        $("#txtError").fadeIn();
        $("#txtError").text("Fill in all the fields");
    }
});

$("#btnGoToLogIn").click(() => {
    location.href = "index.html";
});