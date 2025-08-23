// Phan code  js cho trang

let projectAssign = JSON.parse(localStorage.getItem("projectAssign")) || [];
console.log(projectAssign);
const titleProject1 = document.querySelector(".content-title");
const titleProject2 = document.querySelector(".duration-left-title");
titleProject1.textContent = `Projects / ${projectAssign.title}`;
titleProject2.textContent = projectAssign.title;
// hien ngay
function changeDate(day) {
  let parts = day.split("-"); // ["2025", "08", "12"]
  let newFormat = `${parts[0]}-${parts[1]}-${parts[2]}`;
  // "12-08-2025"
  return newFormat;
}

const today = new Date();
const formattedDate = today.toISOString().split("T")[0];
const parts = formattedDate.split("-"); // ["2025", "08", "15"]
const newFormat = `${parts[2]}-${parts[1]}-${parts[0]}`; // "15-08-2025"
// console.log(newFormat);
// console.log(projectAssign.start);
const timeCreate = document.querySelector(".spent-time-spent");
const timeDeadline = document.querySelector(".deadline-time-dead");
function ymdToDmy(dateStr) {
  const [year, month, day] = dateStr.split("-");
  return `${day}-${month}-${year}`;
}
timeDeadline.textContent = ymdToDmy(projectAssign.end);

// Hiện time spant
function diffInMWD(date1, date2) {
  // Parse dd-mm-yyyy
  function parseDMY(str) {
    const [day, month, year] = str.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  // Parse yyyy-mm-dd
  function parseYMD(str) {
    const [year, month, day] = str.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  const d1 = parseDMY(date1);
  const d2 = parseYMD(date2);

  if (isNaN(d1) || isNaN(d2)) {
    throw new Error("Ngày không hợp lệ");
  }

  let totalDays = Math.floor(Math.abs(d1 - d2) / (1000 * 60 * 60 * 24));

  const months = Math.floor(totalDays / 30);
  totalDays %= 30;

  const weeks = Math.floor(totalDays / 7);
  const days = totalDays % 7;

  return `${days + 1}D : ${weeks}W : ${months}M`;
}
let timeSpent = diffInMWD(newFormat, projectAssign.start);
// console.log(timeSpent);
timeCreate.textContent = timeSpent;
//
// Tìm task để renđer
let allProject = JSON.parse(localStorage.getItem("allProject")) || [];
console.log(allProject);
let taskOfProject = allProject.find((item) => item.id === projectAssign.title);
console.log(taskOfProject.task);
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
// console.log(currentUser);
const nameAdmin = currentUser.name;
// console.log(nameAdmin);
// Lấy ngày chêcnh lệch
// Hàm tính task đã đuuợc tạo bao nhiêu ngày
function daysDiffFromNow(dateB) {
  // Lấy ngày hiện tại (yyyy-mm-dd)
  const today = new Date();
  const todayStr = today.toISOString().split("T")[0]; // "2025-08-17"

  // Parse về Date
  const d1 = new Date(todayStr);
  const d2 = new Date(dateB);

  if (isNaN(d1) || isNaN(d2)) {
    throw new Error("Ngày không hợp lệ, định dạng phải là yyyy-mm-dd");
  }

  // Tính chênh lệch (ms -> days)
  const diffDays = Math.abs(Math.floor((d1 - d2) / (1000 * 60 * 60 * 24)));

  return `${diffDays}`;
}
// console.log(daysDiffFromNow("2025-08-15"));
// Hàm tính còn bao nhiêu ngày kết thúc
function diffFromNow(dateInput) {
  // parse yyyy-mm-dd -> Date (local)
  const [y, m, d] = dateInput.split("-").map(Number);
  const dInput = new Date(y, m - 1, d); // local midnight

  // today at local midnight
  const now = new Date();
  const dNow = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  if (isNaN(dInput) || isNaN(dNow)) {
    throw new Error("Ngày không hợp lệ (yyyy-mm-dd)");
  }

  let totalDays = Math.abs(Math.floor((dInput - dNow) / 86400000)); // 1000*60*60*24

  const months = Math.floor(totalDays / 30);
  totalDays %= 30;

  const weeks = Math.floor(totalDays / 7);
  const days = totalDays % 7;

  return `${days}D : ${weeks}W : ${months}M`;
}
console.log(diffFromNow("2025-08-25"));

// render task ra màn hình
const contentListItem = document.querySelector(".content-lists");
taskOfProject.task.forEach((item) => {
  contentListItem.innerHTML += `
        <div class="content-lists-item">
            <a href="#" class="content-lists-item-left">
              <div class="item-img">
                <img src="../picture/admin-task/Idea.png" alt="Idea" />
              </div>
              <div class="item-title">
                <p class="item-title-p">
                  ${item.taskDes}
                </p>
                <div class="item-title-load">
                  <p class="item-title-load-p">
                    ${taskOfProject.key} Opened ${daysDiffFromNow(
    item.taskStart
  )} days ago by
                    <span class="p-solid">${nameAdmin}</span>
                  </p>
                  <div class="item-title-load-status">
                    <span class="status-cancel">Canceled</span>
                    <span class="status-complete">in-progress</span>
                    <span class="status-prioty">${item.prioty}</span>
                  </div>
                </div>
              </div>
            </a>
            <div class="content-lists-item-right right-button">
              <div class="content-lists-item-right">
                <div class="item-time">
                  <img
                    src="../picture/admin-task/Group 1000004213.png"
                    alt="Group"
                  />
                  <span class="item-time-load">${diffFromNow(
                    item.taskEnd
                  )}</span>
                </div>
                <img src="../picture/admin-task/Group 15.png" alt="Group" />
                <img
                  src="../picture/admin-task/Comments.png"
                  alt="components"
                />
              </div>
              <div class="edit-box">
                <img
                  class="edit-button"
                  src="../picture/admin-task/Group 1000004325.png"
                  alt="Group"
                />
                <div class="edit-layout">
                  <span class="layout-butt-edit">Edit</span>
                  <a href="" class="layout-butt-delete">Delete</a>
                </div>
              </div>
            </div>
    `;
});
//
let priotyListTask = document.querySelectorAll(".status-prioty");
priotyListTask.forEach((item) => {
  if (item.textContent === "Low") {
    item.classList.add("loading-low");
  } else if (item.textContent === "Medium") {
    item.classList.add("loading-medium");
  } else {
    item.classList.add("loading-high");
  }
  // console.log(item.textContent);
});
// console.log(priotyTask);
// console.log(item);

const allItem = document.querySelectorAll(".content-lists-item");
// console.log(allItem);
allItem.forEach((item) => {
  let editButton = item.querySelector(".layout-butt-edit");
  let deleteButton = item.querySelector(".layout-butt-delete");
  // console.log(editButton);
  // console.log(deleteButton);
  editButton.addEventListener("click", (e) => {
    // e.preventDefault();
    let parentItem = item.closest(".content-lists-item");
    let desOfTask = parentItem
      .querySelector(".item-title-p")
      .textContent.trim();
    console.log(desOfTask);
    let taskEdit = {
      taskDes: desOfTask,
      id: projectAssign.title,
    };
    localStorage.setItem("taskEdit", JSON.stringify(taskEdit));
    console.log(taskEdit);
    window.location.href = "../pages/admin_edit_Task.html";
  });
  deleteButton.addEventListener("click", (e) => {
    // e.preventDefault();
    let parentItem = item.closest(".content-lists-item");
    let desOfTask = parentItem
      .querySelector(".item-title-p")
      .textContent.trim();
    console.log(desOfTask);
    allProject.forEach((icon) => {
      if (icon.id.trim() === projectAssign.title.trim()) {
        console.log(icon);
        icon.task = icon.task.filter((ibon) => ibon.taskDes !== desOfTask);
      }
    });
    console.log(allProject);
    localStorage.setItem("allProject", JSON.stringify(allProject));
  });
});
