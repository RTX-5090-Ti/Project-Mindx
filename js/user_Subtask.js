const desTask = document.querySelector(".des-task");
const keyAndDay = document.querySelector(".status-task");
const priotyTask = document.querySelector(".status-prioty");
const deadlineTask = document.querySelector(".main-right-time-deadline");
const titleTask = document.querySelector(".content-title-task");
// Lôi task assign về để render ra thông tin
let taskItemAss = JSON.parse(localStorage.getItem("taskItemAss")) || [];
console.log(taskItemAss);
desTask.textContent = taskItemAss.taskDes;
titleTask.textContent = `Task / ${taskItemAss.taskTitle}`;
keyAndDay.innerHTML = `#${taskItemAss.key} Opened ${taskItemAss.dayRemaining} days ago by <span class="main-left-status-text-solid">Yash Ghori</span>`;
priotyTask.textContent = taskItemAss.prioty;
deadlineTask.textContent = taskItemAss.timeRemaining;
if (priotyTask.textContent === "High") {
  priotyTask.classList.add("loading-high");
} else if (priotyTask.textContent === "Medium") {
  priotyTask.classList.add("loading-medium");
} else {
  priotyTask.classList.add("loading-low");
}
// console.log(priotyTask.textContent);\
// Phần côde js cho trang
let listTaskToAdd = JSON.parse(localStorage.getItem("listTaskToAdd")) || [];
console.log(listTaskToAdd);
let listSubTask = listTaskToAdd.filter(
  (item) =>
    item.id === taskItemAss.taskTitle && item.taskDes === taskItemAss.taskDes
);
console.log(listSubTask);

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
// render subTask
const listSubTaskRender = document.querySelector(".content-list-sub");
listSubTask[0].subTask.forEach((item) => {
  listSubTaskRender.innerHTML += `
    <div class="content-list-main list-sub-item">
              <div class="main-left">
                <div class="main-leftf-img">
                  <img src="../picture/admin-subtask/Idea.png" alt="Idea" />
                </div>
                <div class="main-left-content">
                  <p class="main-left-content-text">
                    ${item.subDes}
                  </p>
                  <div class="main-left-status">
                    <p class="main-left-status-text">
                      #${listSubTask[0].key} Opened ${daysDiffFromNow(
    item.subStart
  )} days ago by
                      <span class="main-left-status-text-solid"
                        >${listSubTask[0].nameAss}</span
                      >
                    </p>
                    <div class="status-load">
                      <span class="status-load-complete">In-progress</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="main-right">
                <div class="main-right-time">
                  <img
                    src="../picture/admin-subtask/material-symbols_clock-loader-10.png"
                    alt="material-symbols_clock-loader-10"
                  />
                  <span>${diffFromNow(item.subEnd)}</span>
                </div>
                <div class="main-right-img">
                  <img
                    src="../picture/admin-subtask/Group 15.png"
                    alt="Group"
                  />
                </div>
                <div class="main-right-comment">
                  <img
                    src="../picture/admin-subtask/Comments.png"
                    alt="complete"
                  />
                </div>
              </div>
            </div>
  `;
});
