let menuToggle = document.querySelector(".menu-toggle");
let navBar = document.querySelector(".nav");
let MenuImg = document.getElementById("MenuImg");

menuToggle.addEventListener("click", () => {
  navBar.classList.toggle("active");

  if (navBar.classList.contains("active")) {
    MenuImg.src = "images/icon-close.svg";
  } else {
    MenuImg.src = "images/icon-hamburger.svg";
  }
});

// menuToggle.addEventListener("click" , ()=>{
//     MenuImg.src.toggle="images/icon-close.svg";
// });
