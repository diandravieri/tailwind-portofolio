import "./style.css";
const ELE = document.documentElement;


// Funcition untuk ganti tema
document.querySelectorAll(".theme-switch").forEach((item) =>
    item.addEventListener("click", () => {
      ELE.classList.toggle("dark");
      ELE.classList.contains("dark")
        ? localStorage.setItem("theme", "dark")
        : localStorage.setItem("theme", "light");
    })
  );


  ELE.classList.add(localStorage.getItem("theme"));