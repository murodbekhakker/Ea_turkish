$(".owl-carousel-1").owlCarousel({
  loop: true,
  margin: 40,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1.2,
    },
    600: {
      items: 1.8,
    },
    1000: {
      items: 4,
    },
  },
});

$(".owl-carousel-2").owlCarousel({
  loop: true,
  margin: 40,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1.5,
    },
    1000: {
      items: 3,
    },
  },
});

$(".owl-carousel-3").owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1.1,
    },
    400: {
      items: 1.2,
    },
    600: {
      items: 2.1,
    },
    1000: {
      items: 2.4,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const buttonCard = document.getElementById("button");
  const buttonCards = document.getElementById("buttons");

  buttonCard.addEventListener("click", () => {
    buttonCards.classList.toggle("cards");
  });
});
