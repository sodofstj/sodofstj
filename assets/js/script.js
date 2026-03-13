(function () {
  var menuToggle = document.querySelector('.menu-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      reveals.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      reveals.forEach(function (el) {
        el.classList.add('visible');
      });
    }
  }

  function initAutoCarousels() {
    var carousels = document.querySelectorAll('.auto-carousel');

    carousels.forEach(function (carousel) {
      var slides = carousel.querySelectorAll('.carousel-slide');
      if (slides.length === 0) return;

      var current = 0;
      var interval = parseInt(carousel.getAttribute('data-autoslide'), 10) || 5000;

      function show(index) {
        slides.forEach(function (slide, i) {
          slide.classList.toggle('active', i === index);
        });
      }

      function next() {
        current = (current + 1) % slides.length;
        show(current);
      }

      show(current);
      var timer = setInterval(next, interval);

      carousel.addEventListener('mouseenter', function () {
        clearInterval(timer);
      });

      carousel.addEventListener('mouseleave', function () {
        timer = setInterval(next, interval);
      });

      carousel.addEventListener('focusin', function () {
        clearInterval(timer);
      });

      carousel.addEventListener('focusout', function () {
        timer = setInterval(next, interval);
      });
    });
  }

  initAutoCarousels();

})();