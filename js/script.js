"use strict";

let burgerIcon = document.querySelector(".menu__icon");
let burgerExit = document.querySelector(".header-over-top-exit");
let menuOver = document.querySelector(".header-over");

if (burgerIcon) {
  burgerIcon.addEventListener("click", (e) => {
    if (!menuOver.classList.contains("._active")) {
      menuOver.classList.add("_active");
      document.body.classList.add("_lock");
    }
  });
}

if (burgerExit) {
  burgerExit.addEventListener("click", (e) => {
    menuOver.classList.remove("_active");
    document.body.classList.remove("_lock");
  });
}

if (!document.querySelector(".header-anim").classList.contains("_active")) {
  let lastScrollValue = 0;
  const defaultOffset = 200;
  const header = document.querySelector(".header-hide");

  const getScrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop;
  const containsHideClass = () => header.classList.contains("hide");

  window.addEventListener("scroll", () => {
    if (
      getScrollPosition() > lastScrollValue &&
      !containsHideClass() &&
      getScrollPosition() > defaultOffset
    ) {
      header.classList.add("hide");
    } else if (getScrollPosition() < lastScrollValue && containsHideClass()) {
      header.classList.remove("hide");
    }

    lastScrollValue = getScrollPosition();
  });
}
