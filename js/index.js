// accordion

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".accordion-button");
  const panels = document.querySelectorAll(".accordion-panel");

  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const panel = panels[index];
      const arrow = this.querySelector(".arrow");

      if (panel.style.display === "block") {
        panel.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
      } else {
        panels.forEach((p, i) => {
          if (i !== index) {
            p.style.display = "none";
            buttons[i].querySelector(".arrow").style.transform = "rotate(0deg)";
          }
        });

        panel.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
      }
    });
  });
});

// swiper main page

const swiperMain = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  effect: "fade",
  speed: 300,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// burger

const burgerButton = document.querySelector(".burger");
const navList = document.querySelector(".header__nav-list");

burgerButton.addEventListener("click", () => {
  navList.classList.toggle("header__nav-list--active");
  burgerButton.classList.toggle("burger--active");
});

// swiper blog davos

const swiperDavos = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  effect: "fade",
  speed: 300,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
