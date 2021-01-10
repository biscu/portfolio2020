//Get the button
var mybutton = document.getElementById('top-button');

window.addEventListener("scroll", function(e){
	scrollFunction()
});

function scrollFunction() {
  if (document.body.scrollTop >1500 || document.documentElement.scrollTop > 1500) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
}

var dropdownTeam = document.getElementById('dropdownTeam');

function showTeam() {
  document.getElementById('overlayTeam').classList.toggle('show-dropdown');
  document.getElementById('dropdown-icon').classList.toggle('rotate');
  console.log('overlay toggled');
}

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 700,
	speedAsDuration: true
	});