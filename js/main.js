"use strict";
(function () {
  const BREAKPOINTS = {
    tablet: "600px",
  };

  const toggle = document.querySelector(".main-nav__toggle");
  const menu = document.querySelector(".page-header__nav");
  const form = document.querySelector(".page-header__search-form");
  const searchBtn = document.querySelector(".page-header__search-btn");

  const handleBreackpointChange = (event) => {
    if (event.matches) {
      menu.classList.add("visually-hidden");
      toggle.classList.remove("visually-hidden");
      form.classList.add("modal");
      var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },

        // Navigation arrows
        navigation: {
          nextEl: ".news__btn-next",
          prevEl: ".news__btn-prev",
        },
      });
    } else {
      menu.classList.remove("visually-hidden");
      toggle.classList.add("visually-hidden");
      form.classList.remove("modal");
    }
  };

  const mediaQueryList = window.matchMedia(
    "(max-width:" + BREAKPOINTS.tablet.toString() + ""
  );
  mediaQueryList.addListener(handleBreackpointChange);
  handleBreackpointChange(mediaQueryList);

  toggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    this.classList.toggle("main-nav__toggle-close");
    menu.classList.toggle("visually-hidden");
  });

  searchBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("modal-show");
  });
})();
