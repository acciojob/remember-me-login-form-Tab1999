//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("loginForm");

// Show "Login as Existing User" if credentials exist
window.onload = () => {
    const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");

    if (savedUser && savedPass) {
        existingBtn.style.display = "block";
    }
};

// Handle submit
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
});

// Login as existing user
existingBtn.addEventListener("click", function() {
    const savedUser = localStorage.getItem("username");
    alert(`Logged in as ${savedUser}`);
});
