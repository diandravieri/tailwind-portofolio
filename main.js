import "./style.css";

const ELE = document.documentElement;
const mobileNav = document.getElementById("mobile-nav");
const menuBar = document.querySelector("#menubar");
const menuBarIcon = document.querySelector("#menubar i");

// funsi untuk mengganti tema
document.querySelectorAll(".theme-switch").forEach((item) =>
  item.addEventListener("click", () => {
    ELE.classList.toggle("dark");
    ELE.classList.contains("dark")
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");
  })
);


//responsive NAVBAR
const options = [menuBar];

options.forEach((item) =>
  item.addEventListener("click", () => {
    mobileNav.classList.toggle("h-0");
    mobileNav.classList.toggle("h-96");
    menuBarIcon.classList.toggle("fa-xmark");
    menuBarIcon.classList.toggle("fa-bars");    
  })
);

ELE.classList.add(localStorage.getItem("theme"));