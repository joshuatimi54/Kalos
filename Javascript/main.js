function myFunction(x) {
  x.classList.toggle("change");
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "rgb(189,200,242)";
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgb(189,200,242)";
  }
};