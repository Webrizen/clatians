document.querySelectorAll('.language-switcher button').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.language-switcher button').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});