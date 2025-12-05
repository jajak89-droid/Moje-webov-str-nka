const btn = document.getElementById("themeToggle");
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
.logo {
    width: 200px; 
    max-width: 80%;
    display: block;
    margin: 20px auto;
}
