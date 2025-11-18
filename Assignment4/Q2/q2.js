// Q2: Student Form Validator using RegExp
const form = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");



function validateName() {
    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(nameInput.value.trim())) {
        setError(nameInput, nameError, "Name must contain only alphabets.");
        return false;
    }
    setSuccess(nameInput, nameError);
    return true;
}

function validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        setError(emailInput, emailError, "Enter a valid email (example@gmail.com).");
        return false;
    }
    setSuccess(emailInput, emailError);
    return true;
}

function validatePhone() {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneInput.value.trim())) {
        setError(phoneInput, phoneError, "Phone must be exactly 10 digits.");
        return false;
    }
    setSuccess(phoneInput, phoneError);
    return true;
}

function validatePassword() {
   
    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/;

    if (!passRegex.test(passwordInput.value.trim())) {
        setError(passwordInput, passwordError, "Password must contain 1 uppercase, 1 number, 1 special character.");
        return false;
    }
    setSuccess(passwordInput, passwordError);
    return true;
}


function setError(input, errorElement, message) {
    input.classList.add("invalid");
    input.classList.remove("valid");
    errorElement.textContent = message;
}

function setSuccess(input, errorElement) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    errorElement.textContent = "";
}



form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent form submit
    
    const isValid =
        validateName() &
        validateEmail() &
        validatePhone() &
        validatePassword();

    if (isValid) {
        alert("Registration Successful!");
    }
});
