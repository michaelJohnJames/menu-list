console.log("hello world")

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
