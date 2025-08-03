document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
  
    document.querySelectorAll(".hidden").forEach(section => {
      observer.observe(section);
    });
  });
  
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navRight = document.getElementById('nav-right');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    navRight.classList.toggle('show');
  });

