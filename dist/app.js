const validate = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})$/; //regex for email validation
const button = document.querySelector("button");
const email = document.getElementById("email");
const error = document.querySelector(".error");
const input = document.querySelector("input");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const password = document.getElementById("password");
const validation = () => {
    const error3 = document.getElementById("error3");
    if (email.value.match(validate)) {
        email.style.border = "1px solid green";
        error3.style.opacity = "0";
    }
    else {
        email.style.border = "1px solid var(--primary-color1)";
        error3.style.opacity = "1";
    }
};
const empty = () => {
    const error1 = document.getElementById("error1");
    const error2 = document.getElementById("error2");
    const error4 = document.getElementById("error4");
    if (firstName.value == "") {
        firstName.style.border = "1px solid var(--primary-color1)";
        error1.style.opacity = "1";
    }
    else {
        firstName.style.border = "1px solid green";
        error1.style.opacity = "0";
    }
    if (lastName.value == "") {
        lastName.style.border = "1px solid var(--primary-color1)";
        error2.style.opacity = "1";
    }
    else {
        lastName.style.border = "1px solid green";
        error2.style.opacity = "0";
    }
    if (password.value == "") {
        password.style.border = "1px solid var(--primary-color1)";
        error4.style.opacity = "1";
    }
    else {
        password.style.border = "1px solid green";
        error4.style.opacity = "0";
    }
};
button.addEventListener("click", validation);
button.addEventListener("click", empty);
