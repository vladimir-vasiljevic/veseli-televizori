var date = new Date(); 
document.getElementById("year").innerHTML = date.getFullYear();

function toggleNav() {
  const outerGrid = document.querySelector(".outer-grid");
  outerGrid.classList.toggle("outer-grid-expanded");

  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");
}
