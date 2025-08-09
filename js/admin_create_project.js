const arrow = document.getElementById("arrow-black");
const list = document.getElementById("lists");
// console.log(list);
function displayDropdown() {
  list.style.display = list.style.display === "block" ? "none" : "block";
  arrow.classList.toggle("arrow");
}
arrow.addEventListener("click", displayDropdown);
s;
