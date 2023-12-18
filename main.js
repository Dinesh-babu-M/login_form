const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


/* function checkPassword() {
    const passwordInput = document.getElementById("passwordinput");
    const resultMessage = document.getElementById("resultMessage");

    const password = passwordInput.value;
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);

    if (password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers) {
        resultMessage.textContent = "Password is strong!";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Password must have at least 8 characters, including uppercase, lowercase, and numbers.";
        resultMessage.style.color = "red";
    }
}
 */