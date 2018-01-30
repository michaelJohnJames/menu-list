console.log("hello world")

const navBar = document.getElementById('main-nav')

function menu() {
  navBar.style.height = "200px";
  navBar.style.width = "150px";
  navBar.classList.add('hidden')
}



navBar.addEventListener('click', menu);
