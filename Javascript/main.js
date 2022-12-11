function myFunction(x) {
  x.classList.toggle("change");

  let nav = document.querySelector("#collapsibleNavbar");
  let navbn = document.querySelector("#navbutton");
  
  if ( navbn.classList == "menu") {
    nav.classList.add("collapse");
  } else {
    nav.classList.remove("collapse");
  }
}

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("topbar").style.backgroundColor = "rgb(189,200,242)";
    document.getElementById("topbar").style.transition = "1s";
  } else {
    document.getElementById("topbar").style.backgroundColor = "rgb(189,200,242,0)";
  };
};