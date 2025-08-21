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
// Code js cho phần edit task
const taskTitle = document.querySelector(".project-title-input");
const taskType = document.querySelector(".project-type-input");
const taskStart = document.querySelector(".projectt-times-start-input");
const taskEnd = document.querySelector(".projectt-times-end-input");
const taskDes = document.querySelector(".content-bottom-Description-input");
const taskAss = document.querySelector(".rules-list-item-assign");
const taskPrioty = document.querySelector(".item-priority-text");
const saveButt = document.querySelector(".rules-butt-create");
//
let taskEdit = JSON.parse(localStorage.getItem("taskEdit")) || [];
let allProject = JSON.parse(localStorage.getItem("allProject")) || [];
console.log(taskEdit);
console.log(allProject);
allProject.forEach((item) => {
  if (item.id.trim() === taskEdit.id.trim()) {
    item.task.forEach((icon) => {
      if (icon.taskDes.trim() === taskEdit.taskDes.trim()) {
        console.log(icon);
        taskTitle.value = icon.taskTitle;
        taskType.value = icon.taskType;
        taskStart.value = icon.taskStart;
        taskEnd.value = icon.taskEnd;
        taskDes.value = icon.taskDes;
        taskAss.textContent = icon.nameAss;
        taskPrioty.textContent = icon.prioty;
      }
    });
  }
});

// Hàm edit task
function updateTask(e) {
  //   e.preventDefault();
  if (
    taskTitle.value &&
    taskType.value &&
    taskStart.value &&
    taskEnd.value &&
    taskDes.value &&
    taskAss.textContent &&
    taskPrioty.textContent
  ) {
    allProject.forEach((item) => {
      if (item.id.trim() === taskEdit.id.trim()) {
        item.task.forEach((icon) => {
          if (icon.taskDes.trim() === taskEdit.taskDes.trim()) {
            console.log(icon);
            icon.taskTitle = taskTitle.value;
            icon.taskType = taskType.value;
            icon.taskStart = taskStart.value;
            taskEnd.value = icon.taskEnd = taskEnd.value;
            taskDes.value = icon.taskDes = taskDes.value;
            icon.nameAss = taskAss.textContent;
            icon.prioty = taskPrioty.textContent;
          }
        });
      }
    });
    alert("Cập nhật task thành công");
    //   console.log(allProject);
    localStorage.setItem("allProject", JSON.stringify(allProject));
  } else {
    e.preventDefault();
    alert("Bạn chưa điền đủ thông tin");
  }
}

saveButt.addEventListener("click", updateTask);
