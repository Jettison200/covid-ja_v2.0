
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
document.getElementById("hamburger").onclick = reveal;

let toggle = 0;

//*Functions

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


function remove() {
  var myobj = document.getElementById("a-1");
  var myobj2 = document.getElementById("a-2");
  myobj.remove();
  myobj2.remove();
}

function myFunction(x) {
  if (x.matches) { // If media query matches
    remove()
  } else {

  }
}
var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

