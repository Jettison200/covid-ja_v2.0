
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
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



//*Remove loader


let tl = gsap.timeline();

 
window.addEventListener("load", () => {
  // Removes an element from the document
  tl.to(".loading-screen", {
    duration: 0.5,
    opacity: 0,
    display: 'none',  
    onComplete: function () {
      tl.kill();
    },
  });
});
