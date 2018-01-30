console.log("hello world")

const navBar = document.getElementById('top-nav')
const topX = document.getElementById('top-x')

function menu() {
  navBar.style.height = "200px";
  navBar.style.width = "150px";
  navBar.classList.add('hidden')
}



topX.addEventListener('click', menu);
