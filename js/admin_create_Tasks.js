const arrow = document.getElementById("arrow-icon");
const list = document.getElementById("list-item");
// console.log(list);
function displayDropdown() {
  list.style.display = list.style.display === "block" ? "none" : "block";
  arrow.classList.toggle("arrow");
}
arrow.addEventListener("click", displayDropdown);
//
//
const arrowPriority = document.getElementById("arrow-priority");
const listt = document.querySelector(".rules-listt-priority");
const listIcon = document.querySelectorAll(".listt-priority-item");
const areaShow = document.querySelector(".item-priority-text");
const cancleIcon = document.querySelector(".cancel-icon");
const boxPriority = document.querySelector(".listt-item-priority");
const borderPriority = document.querySelector(".rules-listt-first");

console.log(cancleIcon);
let active = false;
function displayDropdownPriority() {
  listt.style.display = listt.style.display === "block" ? "none" : "block";
  arrowPriority.classList.toggle("arrow-icon-priority");

  borderPriority.style.setProperty("border-bottom", "1px solid black");
}
listIcon.forEach((item) => {
  item.addEventListener("click", () => {
    areaShow.innerHTML = item.textContent; // In ra text khi click
    boxPriority.style.visibility = "unset";
    listt.style.display = "none";
    // listt.style.display = listt.style.display === "block" ? "none" : "block";
    borderPriority.style.setProperty("border-bottom", "unset");
    arrowPriority.classList.toggle("arrow-icon-priority");
  });
});
function deletePriority() {
  boxPriority.style.visibility = "hidden";
}

arrowPriority.addEventListener("click", displayDropdownPriority);
cancleIcon.addEventListener("click", deletePriority);
