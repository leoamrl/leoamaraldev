const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  setTimeout(function(){
    preloader.classList.add("hide-preloader");
  }, 2000);
});