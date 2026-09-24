const progress = document.querySelector('.progress');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (window.scrollY / max * 100) + '%';
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
