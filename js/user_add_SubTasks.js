// Render phần Reporter
const listIitemReporter = document.querySelector(".reporter-list");
const numberReporter = 5;
let numx = 1;
const itemsReporter = [{ name: "checkbox-reporter" }];
// console.log(items[0].name);
for (let i = 1; i <= numberReporter; i++) {
  listIitemReporter.innerHTML += `
    <div class="reporter-list-check">
                      <span class="check-name reporter-name">YashShin ${numx++}</span>
                      <span class="check-position">Team lead</span>
                    </div>
    `;
}
const reporterListNames = document.querySelectorAll(".reporter-list-check");
const reporterName = document.querySelector(".reporter-list-item-name");
// console.log(reporterListNames);
reporterListNames.forEach((item) => {
  item.addEventListener("click", () => {
    let name = item.querySelector(".reporter-name").textContent;
    reporterName.textContent = name;
  });
});
// Render phần Assignee

const listIitemAssignee = document.querySelector(".assignee-list");
const numberAssignee = 5;
let numy = 1;
const itemsAssignee = [{ name: "checkbox-assignee" }];
// console.log(items[0].name);
for (let i = 1; i <= numberAssignee; i++) {
  listIitemAssignee.innerHTML += `
   <div class="assignee-list-check">
                      <span class="check-name assigne-name">VinCen ${numy++}</span>
                      <span class="check-position">Team lead</span>
                    </div>
    `;
}
const assigneListNames = document.querySelectorAll(".assignee-list-check");
const assigneName = document.querySelector(".assignee-list-item-name");
// console.log(assigneListNames);
assigneListNames.forEach((item) => {
  item.addEventListener("click", () => {
    let name = item.querySelector(".assigne-name").textContent;
    assigneName.textContent = name;
  });
});

// Phần  code js cho list
const arrowReporter = document.getElementById("arrow-reporter");
const arrowAssignee = document.getElementById("arrow-assignee");
const listReporter = document.querySelectorAll(".reporter-list-check");
const listAssignee = document.querySelectorAll(".assignee-list-check");

function displayListReporter() {
  listReporter.forEach((item) => {
    item.style.display = item.style.display === "flex" ? "none" : "flex";
  });
  //   listReporter.style.display =
  // listReporter.style.display === "flex" ? "none" : "flex";
  arrowReporter.classList.toggle("arrow-reporter-icon");
}
arrowReporter.addEventListener("click", displayListReporter);

function displayListAssiggnee() {
  listAssignee.forEach((item) => {
    item.style.display = item.style.display === "flex" ? "none" : "flex";
  });
  //   listReporter.style.display =
  // listReporter.style.display === "flex" ? "none" : "flex";
  arrowAssignee.classList.toggle("arrow-assignee-icon");
}
arrowAssignee.addEventListener("click", displayListAssiggnee);
//
// Phần code js cho trang
// reporterName - assigneName
const createButt = document.querySelector(".object-button-initialize-create");
let taskItemAss = JSON.parse(localStorage.getItem("taskItemAss")) || [];
let listTaskToAdd = JSON.parse(localStorage.getItem("listTaskToAdd")) || [];

// console.log(taskItemAss);
// console.log(listTaskToAdd);

function createSubTask(e) {
  const SubTaskTitle = document.querySelector(".project-title-input").value;
  const SubTaskType = document.querySelector(".project-type-input").value;
  const SubTaskStart = document.querySelector(
    ".projectt-times-start-input"
  ).value;
  const SubTaskEnd = document.querySelector(".projectt-times-end-input").value;
  const SubTaskDes = document.querySelector(
    ".content-bottom-Description-input"
  ).value;
  const assigneName = document.querySelector(
    ".assignee-list-item-name"
  ).textContent;
  const reporterName = document.querySelector(
    ".reporter-list-item-name"
  ).textContent;
  let subTaskObject = {
    subTitle: SubTaskTitle,
    subType: SubTaskType,
    subStart: SubTaskStart,
    subEnd: SubTaskEnd,
    subDes: SubTaskDes,
    subReporter: reporterName,
    subAssigne: assigneName,
  };
  if (
    SubTaskTitle &&
    SubTaskType &&
    SubTaskStart &&
    SubTaskEnd &&
    SubTaskDes &&
    assigneName &&
    reporterName
  ) {
    listTaskToAdd.forEach((item) => {
      if (
        item.id === taskItemAss.taskTitle &&
        item.taskDes === taskItemAss.taskDes
      ) {
        item.subTask.push(subTaskObject);
      }
    });

    console.log(listTaskToAdd);
    localStorage.setItem("listTaskToAdd", JSON.stringify(listTaskToAdd));
    alert("Bạn đã tạo SubTask thành công");
  } else {
    e.preventDefault();
    alert("Bạn chưa điền đủ thông tin");
  }
}
createButt.addEventListener("click", createSubTask);
