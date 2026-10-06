const form = document.getElementById("registrationForm");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const age = document.getElementById("age");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const ageError = document.getElementById("ageError");

const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    ageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Username
    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required.";
        isValid = false;
    } else if (username.value.length < 3 || username.value.length > 20) {
        usernameError.textContent =
            "Username must contain 3–20 characters.";
        isValid = false;
    }

    // Email
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else {
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent =
                "Enter a valid email address.";
            isValid = false;
        }
    }

    // Password
    if (password.value === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (
        password.value.length < 8 ||
        password.value.length > 20
    ) {
        passwordError.textContent =
            "Password must contain 8–20 characters.";
        isValid = false;
    }

    // Age
    if (age.value.trim() === "") {
        ageError.textContent = "Age is required.";
        isValid = false;
    } else if (!/^\d+$/.test(age.value.trim())) {
        ageError.textContent =
            "Age must be a whole number from 18 to 65.";
        isValid = false;
    } else {
        const ageValue = Number(age.value);

        if (ageValue < 18 || ageValue > 65) {
            ageError.textContent =
                "Age must be a whole number from 18 to 65.";
            isValid = false;
        }
    }

    if (isValid) {
        successMessage.textContent =
            "Registration successful.";
    }
});
