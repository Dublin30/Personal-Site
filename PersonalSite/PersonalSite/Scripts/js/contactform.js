function validationForm(event) {
    let controls = document.getElementsByClassName("form-control");
    let errorMessage = document.getElementsByClassName("nogo");
    //Email validation
    let rxpemail = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

    if (controls["name"].value.trim().length == 0) {
        event.preventDefault();
        errorMessage["requireName"].textContent = "Name is required";
    }
    else {
        errorMessage["requireName"].textContent = "";
    }

    if (controls["email"].value.length == 0) {
        event.preventDefault();
        errorMessage["requireEmail"].textContent = "Email is required";
    }
    else {
        errorMessage["requireEmail"].textContent = "";
    }

    //Email regex check
    if (!rxpemail.test(controls["email"].value) && controls["email"].value.length > 0) {
        event.preventDefault();
        errorMessage["requireEmail"].textContent = "Enter a valid email address";
    }
    else if (rxpemail.test(controls["email"].value) && controls["email"].value.length > 0) {
        errorMessage["requireEmail"].textContent = "";
    }

    if (controls["subject"].value.length == 0) {
        event.preventDefault();
        errorMessage["requireSubject"].textContent = "Subject is required";
    }
    else {
        errorMessage["requireSubject"].textContent = "";
    }

    if (controls["message"].value.length == 0) {
        event.preventDefault();
        errorMessage["requireMessage"].textContent = "Message is required";
    }
    else {
        errorMessage["requireMessage"].textContent = "";
    }
    $("#requireName").css("color", "red");
    $("#requireEmail").css("color", "red");
    $("#requireSubject").css("color", "red");
    $("#requireMessage").css("color", "red");
}
