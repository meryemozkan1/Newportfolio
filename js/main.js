var menuBar = document.querySelector("#menu-bar");
var navLinks = document.querySelector(".nav-links");

navLinks.Style.top = "-450px";

menuBar.onclick = function () {
  if (navLinks.Style.top == "-450px") {
    navLinks.Style.top = "50px";
    console.log(navLinks);
  } else {
    navLinks.Style.top = "-450px";
  }
};
