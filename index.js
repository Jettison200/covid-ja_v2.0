
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
import jump from "/node_modules/jump.js/dist/jump.module.js";

document.getElementById("hamburger").onclick = reveal;




let toggle = 0;

//*Functions

//*Reveal Nav
function reveal() {
  let hamburger = document.getElementById("hamburger");
  let sideNav = document.getElementById("sidenav");
  if (toggle == 0) {
    hamburger.classList.add("is-active");
    toggle++;
  } else {
    hamburger.classList.remove("is-active");
    toggle--;
  }
}

//*Remove Animation from html

function remove() {
  var myobj = document.getElementById("a-1");
  var myobj2 = document.getElementById("a-2");
  myobj.remove();
  myobj2.remove();
}

function myFunction(x) {
  if (x.matches) {
    remove()
  } else {

  }
}
var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


//*Jump Js
let cta = document.getElementById("cta");

cta.addEventListener("click", () => {
  jump(".history", {
    duration: 550,
    offset: -70
  });
});

//*Remove loader

//*Loading animation

let tl = gsap.timeline();

 
window.addEventListener("load", () => {
  // Removes an element from the document
  tl.to(".loading-screen", {
    duration: 0.5,
    opacity: 0,
  });
  tl.to(".loading-screen", {
   display: 'none',
    onComplete: function () {
      tl.kill();
    },
  });
});
