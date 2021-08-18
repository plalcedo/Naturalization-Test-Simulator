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

            // Se debe realizar el registro y realizar verificaciones si el email no se está usando
            // Si todo sale bien la variable booleana cambiara, por prueba se mantendrá en true

            var registro = true;

            if (registro) {
                $("#txtError").fadeOut();
                $("#txtError").text("");

                $("#formRegister").fadeOut();
                $("#h1").fadeOut();
                $("#title").text("Your account was successfully created");
                $("#btnGoToLogIn").fadeIn();
            } else {
                $("#txtError").fadeIn();
                $("#txtError").text("There was an error creating your account");
            }

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