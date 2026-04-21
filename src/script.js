document.getElementById("year").textContent = new Date().getFullYear();


function handleLogin(e) {
e.preventDefault();
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

if (username === "admin" && password === "hemligt123") {
    localStorage.setItem("isLoggedIn", true);
    window.location.href = "admin.html";
} else {
    document.getElementById("error").classList.remove("hidden");
}
}