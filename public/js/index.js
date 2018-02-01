
const navBar = document.getElementById('top-nav')
const topX = document.getElementById('top-x')
const sideX = document.getElementById('side-x')
const sideMenu = document.getElementById('side-nav')

function hideTopNav() {
  navBar.classList.add('hidden')
  sideMenu.classList.remove('hidden')
  
}

function hideSideNav() {
  sideMenu.classList.add('hidden')
  navBar.classList.remove('hidden')
}


sideX.addEventListener('click', hideSideNav);
topX.addEventListener('click', hideTopNav);


var i = 0;
var images = [];
var nextArrow = document.getElementById('next')
var prevArrow = document.getElementById('prev')
images[0] = "img/beach1.jpeg"
images[1] = "img/beach2.jpg"
images[2] = "img/beach3.jpeg"

function changeImgForward() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
}

function changeImgBackward() {
  document.slide.src = images[i];
  if (i > 0) {
    i--;
  } else {
    i = images.length - 1;
  }
}

document.slide.src = images[0]
prevArrow.addEventListener('click', changeImgBackward);
nextArrow.addEventListener('click', changeImgForward);
