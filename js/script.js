document.querySelectorAll('.side-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu-toggle').checked = false;
  });
});

  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.arrow.left');
  const nextButton = document.querySelector('.arrow.right');

  let index = 0;
  const totalSlides = slides.length;
  let autoplayInterval;

  function showSlide(i) {
    carousel.style.transform = `translateX(-${i * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide(index);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 4000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  nextButton.addEventListener('click', () => {
    nextSlide();
    stopAutoplay();
    startAutoplay();
  });

  prevButton.addEventListener('click', () => {
    prevSlide();
    stopAutoplay();
    startAutoplay();
  });

  // Start autoplay on load
  startAutoplay();