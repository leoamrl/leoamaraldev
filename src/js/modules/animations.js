import { gsap, Power3 } from "gsap";

let tl = gsap.timeline();
const preloader = document.querySelector(".preloader");

tl.from(".preloader-line", {
  duration: 0.75,
  scaleX: 0,
  ease: Power3.out,
  transformOrigin: "right center"
}).from(".preloader-name", {
  duration: 0.5,
  y: 90,
  ease: Power3.out,
}, "text");

window.addEventListener("load", () => {
  setTimeout(function(){
    preloader.classList.add("hide-preloader");

    tl.from(".hero-title span>span", {
      duration: 0.75,
      y: 150,
      autoAlpha: 0,
      ease: Power3.out,
      stagger: 0.2
    }).from(".header-logo svg", {
      duration: 0.30,
      y: -40,
      autoAlpha: 0,
    }).from(".header-trigger", {
      duration: 0.30,
      y: -40,
      autoAlpha: 0,
    }).from(".footer-contact", {
      duration: 0.30,
      y: 40,
      autoAlpha: 0,
    }).from(".footer-scroll", {
      duration: 0.30,
      y: 40,
      autoAlpha: 0,
    });
  }, 2000);
});