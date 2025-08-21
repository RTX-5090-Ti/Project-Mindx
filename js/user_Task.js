//  Phần code js cho toLocaleString
const listTask = document.querySelector(".content-list");
let taskOfTask = [];
let tasks = JSON.parse(localStorage.getItem("allProject")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
// console.log(currentUser);
// console.log(tasks);
tasks.forEach((item, index) => {
  // console.log(item.task);
  taskOfTask.push(item.task);
  taskOfTask.push(item.key);
});
taskOfTask = taskOfTask.flat(Infinity);
// console.log(taskOfTask);
//
function assignKeys(arr) {
  const result = [];
  let buffer = [];

  for (const item of arr) {
    if (typeof item === "number") {
      // gán key cho toàn bộ object trong buffer
      buffer.forEach((obj) => result.push({ ...obj, key: String(item) }));
      buffer = []; // reset buffer
    } else if (item && typeof item === "object") {
      buffer.push(item);
    }
  }

  return result;
}
taskOfTask = assignKeys(taskOfTask);
// console.log(taskOfTask);
localStorage.setItem("allStask", JSON.stringify(taskOfTask));
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

  return `${diffDays + 1}`;
}
// Hàm tính thời gian còn lại
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

taskOfTask.forEach((item) => {
  if (item.nameAss === currentUser.name) {
    listTask.innerHTML += `
      <div class="item">
              <a href="./user_SubTask.html" class="item-left">
                <img src="../picture/user-Task/Idea.png" alt="Idea" />
                <div class="item-left-view">
                  <p class="item-left-view-p">
                    ${item.taskDes}
                  </p>
                  <div class="item-left-view-status">
                    <p class="item-left-view-status-p">
                      ${item.key} Opened ${daysDiffFromNow(
      item.taskStart
    )} days ago by
                      <span class="item-left-view-status-p-span"
                        >Yash Ghori</span
                      >
                    </p>
                    <div class="item-left-view-status-load">
                      <span class="load-conplete">In-progress</span>
                      <span class="load-low">${item.prioty}</span>
                    </div>
                  </div>
                </div>
              </a>
              <div class="item-right">
                <div class="item-right-times complete-times">
                  <img src="../picture/user-Task/Vector.png" alt="Vector" />
                  <span class="item-right-time complete-time"
                    >${diffFromNow(item.taskEnd)}</span
                  >
                </div>
                <img src="../picture/user-Task/Group 15.png" alt="Group" />
                <img
                  src="../picture/user-Task/Group 1000004222.png"
                  alt="Group"
                />
                <img
                  class="item-right-mess"
                  src="../picture/user-Task/Comments.png"
                  alt="components"
                />
              </div>
            </div>
    `;
  }
});
const prioty = document.querySelectorAll(".load-low");
// console.log(prioty);
prioty.forEach((item) => {
  // console.log(item.textContent);
  if (item.textContent === "Low") {
    item.classList.add("loading-low");
  } else if (item.textContent === "Medium") {
    item.classList.add("loading-medium");
  } else {
    item.classList.add("loading-high");
  }
});
//
const listTaskItem = document.querySelectorAll(".item-left");
console.log(listTaskItem);
listTaskItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    // e.preventDefault();
    // console.log(item);
    let taskItem = item.querySelector(".item-left-view-p").textContent.trim();
    console.log(taskItem);
    console.log(taskOfTask);
    let taskFound = taskOfTask.find((item) => item.taskDes === taskItem);
    let deadline = {
      timeRemaining: diffFromNow(taskFound.taskEnd),
      dayRemaining: daysDiffFromNow(taskFound.taskStart),
    };
    taskFound = { ...taskFound, ...deadline };
    // taskFound.push(deadline);
    // console.log(taskFound);
    console.log(taskFound);

    localStorage.setItem("taskItemAss", JSON.stringify(taskFound));
  });
});
//
//
let listTaskToAdd = JSON.parse(localStorage.getItem("listTaskToAdd")) || [];
let allStask = JSON.parse(localStorage.getItem("allStask"));
console.log(listTaskToAdd);
console.log(allStask);
if (allStask.length > listTaskToAdd.length) {
  let ids = listTaskToAdd.map((item) => item.id);
  allStask.forEach((item) => {
    if (!ids.includes(item.taskTitle)) {
      listTaskToAdd.push({
        id: item.taskTitle,
        key: item.key,
        taskDes: item.taskDes,
        nameAss: item.nameAss,
        subTask: [],
      });
      ids.push(item.taskTitle);
    }
  });
} else if (allStask.length < listTaskToAdd.length) {
  let titles = allStask.map((item) => item.taskTitle);
  // console.log(titles);
  listTaskToAdd = listTaskToAdd.filter((item) => titles.includes(item.id));
  // console.log(allProject);
} else if (allStask.length === listTaskToAdd.length) {
  listTaskToAdd.forEach((item, index) => {
    if (item.id !== allStask[index].taskTitle) {
      item.id = allStask[index].taskTitle;
    }
  });
}
console.log(listTaskToAdd);
localStorage.setItem("listTaskToAdd", JSON.stringify(listTaskToAdd));
//Phần js cho popup chưa liên quan đến js logic
const listIcon = document.querySelectorAll(".item");
const container = document.querySelector(".container");
const popUpPage = document.querySelector(".content-popup");
const cancleIcon = document.querySelector(".cancle-icon");
// const itemSiderbar = document.querySelector(".sidebar-items");
// console.log(itemSiderbar);
// console.log(listIcon);
function showPoopUp() {
  popUpPage.style.display = "block";
  container.style.opacity = "50%";
}

listIcon.forEach((item) => {
  // item.addEventListener("click", showPoopUp);
  let messButt = item.querySelector(".item-right-mess");
  messButt.addEventListener("click", showPoopUp);
  // console.log(messButt);
});
// console.log(listIcon);

cancleIcon.addEventListener("click", () => {
  popUpPage.style.display = "none";
  container.style.opacity = "";
});

//  Tuy chinh text area gian ra  theo nội dung

const textarea = document.querySelector(".add-text");

textarea.addEventListener("input", function () {
  this.style.height = "auto"; // Reset chiều cao
  this.style.height = this.scrollHeight + "px"; // Set chiều cao bằng nội dung
});

//  Js khi nhấn nút để chuyển  đổi

const addButt = document.querySelector(".popup-butt-text-span");
const addControl = document.querySelector(".add-control");
const buttSaveCannel = document.querySelector(".add-butt");
const cancle = document.querySelector(".add-butt-cannel");
// console.log(addControl);
function showAttchament() {
  addButt.style.display = "none";
  addControl.style.display = "flex";
  textarea.style.display = "block";
  buttSaveCannel.style.display = "inline-flex";
}
addButt.addEventListener("click", showAttchament);
cancle.addEventListener("click", () => {
  addButt.style.display = "block";
  addControl.style.display = "none";
  textarea.style.display = "none";
  buttSaveCannel.style.display = "none";
});

// Js cho phần cmt khi nhập vào nó sẽ  hiện lên bên cmmt
const saveButt = document.querySelector(".add-butt-save");
let editingComment = null;

function renderList() {
  const input = textarea.value;
  const lines = input.split("\n").filter((line) => line.trim() !== "");
  if (lines.length === 0) return;

  const commentDiv = document.createElement("div"); // ← Tạo từ đầu

  const box = document.createElement("div");
  box.classList.add("add-cmt-box");

  const ul = document.createElement("ul");
  ul.classList.add("add-cmt-head-ul");

  lines.forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line.trim();
    li.classList.add("add-cmt-head-li");
    ul.appendChild(li);
  });

  const now = new Date();
  const day = now.getDate();
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();
  const hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");

  const head = document.createElement("div");
  head.classList.add("add-cmt-head");
  head.innerHTML = `
    <img class="add-cmt-head-img" src="../picture/admin-performance/Group 15.png" alt="Group" />
    <p class="add-cmt-head-text">
      <span class="add-cmt-head-text-name">Yash Ghori</span> commented
      <span class="add-cmt-head-text-day">1d ${day} ${month} ${year}</span> at
      <span class="add-cmt-head-text-time">${hour}:${minute}</span>
    </p>
  `;

  const ops = document.createElement("div");
  ops.classList.add("add-cmt-ops");
  ops.innerHTML = `
    <span class="add-cmt-ops-edit">Edit</span>
    <span class="add-cmt-ops-delete">Delete</span>
  `;

  ops.querySelector(".add-cmt-ops-edit").addEventListener("click", () => {
    const oldLines = Array.from(ul.querySelectorAll("li")).map(
      (li) => li.textContent
    );
    textarea.value = oldLines.join("\n");
    textarea.style.display = "block";
    addControl.style.display = "flex";
    addButt.style.display = "none";
    buttSaveCannel.style.display = "inline-flex";
    editingComment = commentDiv;
  });

  ops.querySelector(".add-cmt-ops-delete").addEventListener("click", () => {
    commentDiv.remove(); //  giờ thì xóa được vì commentDiv đã được tạo
  });

  box.appendChild(ul);
  box.appendChild(ops);
  commentDiv.appendChild(head);
  commentDiv.appendChild(box);
  document.querySelector(".add-cmt").appendChild(commentDiv);

  textarea.value = "";
  textarea.style.display = "none";
  addControl.style.display = "none";
  addButt.style.display = "block";
  buttSaveCannel.style.display = "none";
}

// saveButt.addEventListener("click", renderList);
saveButt.addEventListener("click", () => {
  const lines = textarea.value.split("\n").filter((line) => line.trim() !== "");

  if (lines.length === 0) return;

  if (editingComment) {
    // Nếu đang chỉnh sửa comment cũ
    const ul = editingComment.querySelector(".add-cmt-head-ul");
    ul.innerHTML = ""; // Xoá hết nội dung cũ

    lines.forEach((line) => {
      const li = document.createElement("li");
      li.textContent = line.trim();
      li.classList.add("add-cmt-head-li");
      ul.appendChild(li);
    });

    editingComment = null; // Reset lại
  } else {
    // Nếu không phải sửa thì tạo comment mới
    renderList();
  }

  // Reset lại textarea và giao diện
  textarea.value = "";
  textarea.style.display = "none";
  addControl.style.display = "none";
  addButt.style.display = "block";
  buttSaveCannel.style.display = "none";
});
