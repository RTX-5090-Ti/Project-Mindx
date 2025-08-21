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

// console.log(cancleIcon);
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

// Lôi Staff trong phần đăng nhập vêf
const staff = JSON.parse(localStorage.getItem("staff")) || [];
// console.log(staff);
const listStaff = document.querySelector(".rules-list-box");
const nameStaffAssign = document.querySelector(".rules-list-item-assign");

staff.forEach((item) => {
  listStaff.innerHTML += `
    <div class="rules-list-check">
      <span class="item-left-name">${item.name}</span>
    </div>
  `;
});
let nameStaff = listStaff.querySelectorAll(".item-left-name");
// console.log(nameStaff[0].textContent);
nameStaff.forEach((item) => {
  item.addEventListener("click", () => {
    nameStaffAssign.textContent = item.textContent;
    list.style.display = list.style.display === "block" ? "none" : "block";
    arrow.classList.toggle("arrow");
  });
});

// Tạo task
let projectAssign = JSON.parse(localStorage.getItem("projectAssign")) || [];
// console.log(projectAssign.title);
// let listProject = JSON.parse(localStorage.getItem("listProject")) || [];
let allProject = JSON.parse(localStorage.getItem("allProject")) || [];
// allProject.forEach((item) => console.log(item.task));
// console.log(allProject);

function createTask(e) {
  // e.preventDefault();
  const taskTitle = document.querySelector(".project-title-input").value;
  const taskType = document.querySelector(".project-type-input").value;
  const taskStartDate = document.querySelector(
    ".projectt-times-start-input"
  ).value;
  const taskEndDate = document.querySelector(".projectt-times-end-input").value;
  const taskDescription = document.querySelector(
    ".content-bottom-Description-input"
  ).value;
  const nameAssign = document.querySelector(
    ".rules-list-item-assign"
  ).textContent;
  const prioty = document.querySelector(".item-priority-text").textContent;
  if (
    taskTitle &&
    taskType &&
    taskStartDate &&
    taskEndDate &&
    taskDescription &&
    nameAssign
  ) {
    let inf4 = {
      taskTitle: taskTitle,
      taskType: taskType,
      taskStart: taskStartDate,
      taskEnd: taskEndDate,
      taskDes: taskDescription,
      nameAss: nameAssign,
      prioty: prioty,
    };
    // console.log(inf4);
    // console.log(taskTitle);
    // console.log(taskType);
    // console.log(taskStartDate);
    // console.log(taskEndDate);
    // console.log(taskDescription);
    // console.log(nameAssign);
    // console.log(prioty);
    allProject.forEach((item) => {
      if (item.id === projectAssign.title) {
        item.task.push(inf4);
      }
    });
    // console.log(projectAddTask);
    console.log(allProject);
    localStorage.setItem("allProject", JSON.stringify(allProject));
    alert("Task được tạo thành công");
    // e.preventDefault();
  } else {
    e.preventDefault();
    alert("Bạn chưa điền đủ thông tin");
  }
}

const createButt = document.querySelector(".rules-butt-create");
createButt.addEventListener("click", createTask);
