
var navbar = document.getElementById("mynav");
var btn =document.getElementById("btn");
var link =document.querySelectorAll ("#mynav a")
window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
      link.classList.add("black")
    } else {
      navbar.classList.remove("scrolled");
      link.classList.remove("black")

    }
  });
  btn.addEventListener ('mousemove', function (){

  })
  