function myFunction(x) {
  x.classList.toggle("change");
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.backgroundColor = "rgb(189,200,242)";
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgb(189,200,242,0)";
  };
};