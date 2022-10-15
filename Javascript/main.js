function myFunction(x) {
  x.classList.toggle("change");
};

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.bdy.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("topbar").style.backgroundColor = "rgb(189,200,242)";
    document.getElementById("topbar").style.transition = "1s";
  } else {
    document.getElementById("topbar").style.backgroundColor = "rgb(189,200,242,0)";
  };
};