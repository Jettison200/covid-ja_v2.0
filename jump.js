import jump from "/node_modules/jump.js/dist/jump.module.js";
//*Jump Js
let cta = document.getElementById("cta");

cta.addEventListener("click", () => {
  jump(".history", {
    duration: 550,
    offset: -70
  });
});

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

