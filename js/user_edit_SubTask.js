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

// Phan code logic cho edit SubTask
let subTaskEdit = JSON.parse(localStorage.getItem("subTaskEdit")) || [];
let listTaskToAdd = JSON.parse(localStorage.getItem("listTaskToAdd")) || [];
console.log(listTaskToAdd);
console.log(subTaskEdit);
const subTaskTitle = document.querySelector(".project-title-input");
const subTaskType = document.querySelector(".project-type-input");
const subTaskStart = document.querySelector(".projectt-times-start-input");
const subTaskEnd = document.querySelector(".projectt-times-end-input");
const subTaskDes = document.querySelector(".projectt-times-area-input");
const subTaskReporter = document.querySelector(".reporter-list-item-name");
const subTaskAssign = document.querySelector(".assignee-list-item-name");
listTaskToAdd.forEach((item) => {
  if (item.id.trim() === subTaskEdit.id.trim()) {
    item.subTask.forEach((icon) => {
      if (icon.subDes.trim() === subTaskEdit.taskDes.trim()) {
        console.log(icon);
        subTaskTitle.value = icon.subTitle;
        subTaskType.value = icon.subType;
        subTaskStart.value = icon.subStart;
        subTaskEnd.value = icon.subEnd;
        subTaskDes.value = icon.subDes;
        subTaskReporter.textContent = icon.subReporter;
        subTaskAssign.textContent = icon.subAssigne;
      }
    });
  }
});
const saveButt = document.querySelector(".object-button-initialize-create");
saveButt.addEventListener("click", (e) => {
  if (
    subTaskTitle.value &&
    subTaskType.value &&
    subTaskStart.value &&
    subTaskEnd.value &&
    subTaskDes.value &&
    subTaskReporter.textContent &&
    subTaskAssign.textContent
  ) {
    listTaskToAdd.forEach((item) => {
      if (item.id.trim() === subTaskEdit.id.trim()) {
        item.subTask.forEach((icon) => {
          if (icon.subDes.trim() === subTaskEdit.taskDes.trim()) {
            console.log(icon);
            icon.subTitle = subTaskTitle.value;
            icon.subType = subTaskType.value;
            icon.subStart = subTaskStart.value;
            icon.subEnd = subTaskEnd.value;
            icon.subDes = subTaskDes.value;
            icon.subReporter = subTaskReporter.textContent;
            icon.subAssigne = subTaskAssign.textContent;
          }
        });
      }
    });
    console.log(listTaskToAdd);
    alert("Cập nhật SubTask thành công");
    localStorage.setItem("listTaskToAdd", JSON.stringify(listTaskToAdd));
  } else {
    e.preventDefault();
    alert("Bạn chưa điền đủ thông tin");
  }
  //   e.preventDefault();
});
