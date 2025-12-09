const toggleBtn = document.getElementById('toggleTheme');
let theme = localStorage.getItem('theme');

toggleBtn.addEventListener("click", () => {
    theme = localStorage.getItem('theme');
    if (theme !== 'dark') {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'null');
        document.body.classList.remove('dark');
    }
})

if (theme === 'dark') {
    document.body.classList.add('dark');
}