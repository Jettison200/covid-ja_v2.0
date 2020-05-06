
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}


//*Functions


//*Remove Animation from html



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
