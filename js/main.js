const links = document.querySelectorAll('nav a');

//Smooth Scroll
links.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Back to Top Button
document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

//Gallery
const wrapper = document.querySelector('.requirements-gallery-2');
const slides = document.querySelectorAll('.requirements-gallery-slide');
const leftBtn = document.querySelector('.requirements-gallery-left-button');
const rightBtn = document.querySelector('.requirements-gallery-right-button');

let currentSlide = 0;

rightBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  wrapper.style.transform = `translateX(-${currentSlide * 80}%)`;
});

leftBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  wrapper.style.transform = `translateX(-${currentSlide * 80}%)`;
});
