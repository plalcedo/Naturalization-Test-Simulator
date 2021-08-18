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

        // Por los momentos es un usuario estático 
        // Email: admin@nts.com
        // Password: 123

        if (email == "admin@nts.com" && password == "123") {
            $("#txtError").fadeOut();
            $("#txtError").text("");
            // Log in
            location.href = "home.html"
        } else {
            $("#txtError").fadeIn();
            $("#txtError").text("The email or password are incorrect");
        }
    } else {
        $("#txtError").fadeIn();
        $("#txtError").text("Fill in all the fields");
    }
});