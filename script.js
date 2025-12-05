document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('darkModeBtn');

    btn.addEventListener('click', function() {
        document.body.classList.toggle('dark');

        if(document.body.classList.contains('dark')){
            btn.textContent = "☀️ Světlý režim";
        } else {
            btn.textContent = "🌙 Ztmavit";
        }
    });
});
