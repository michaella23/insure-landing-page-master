const navMenu = document.getElementById("nav-menu")

function toggleNav(x) {
    x.classList.toggle("fa-xmark")
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
        navMenu.classList.remove("overlay") 
      } else {
        navMenu.style.display = "block";
        navMenu.classList.add("overlay")
      }
}