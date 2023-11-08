const hamburger = document.querySelector(".hamburger");
const navbarV = document.querySelector(".navbar-v");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
  if (navbarV.classList.contains("show")) {
    navbarV.classList.remove("show");
    navbarV.classList.add("hide");
    // dim.style.display = "none";
  } else if (navbarV.classList.contains("hide")) {
    navbarV.classList.remove("hide");
    navbarV.classList.add("show");
    // dim.style.display = "block";
  } else {
    navbarV.classList.add("show");
    // dim.style.display = "block";
  }
});

document.addEventListener("click", (ev) => {
  if (navbarV.classList.contains("show")) {
    if (!hamburger.contains(ev.target) && !navbarV.contains(ev.target)) {
      navbarV.classList.remove("show");
      navbarV.classList.add("hide");
      hamburger.classList.toggle("change");
    }
  }
});

const close = document.querySelector(".close");
const modal = document.querySelector(".modal");

window.addEventListener("load", () => {
  setTimeout(() => {
    modal.classList.add("slideIn");
  }, 800);
});

close.addEventListener("click", () => {
  modal.classList.remove("slideIn");
  modal.classList.add("slideOut");
});

document.addEventListener("click", (ev) => {
  if (!close.contains(ev.target) && !modal.contains(ev.target)) {
    modal.classList.remove("slideIn");
    modal.classList.add("slideOut");
  }
});
