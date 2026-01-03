document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});
