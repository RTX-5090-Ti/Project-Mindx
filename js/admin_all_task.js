const listTask = document.querySelector(".content-lists");
let allTask = JSON.parse(localStorage.getItem("allProject")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
console.log(allTask);
let tasks = [];
//  Lấy tất cả các task  trong Project
allTask.forEach((item) => {
  if (item.task.length !== 0) {
    tasks.push(item.key);
    tasks.push(item.task);
    tasks = tasks.flat(Infinity);
  }
});
function attachKeys(stream) {
  let currentKey = null;
  const out = [];

  for (const item of stream) {
    if (typeof item === "number") {
      currentKey = item;
      continue; // số chỉ là mốc, không render
    }
    if (item && typeof item === "object" && !Array.isArray(item)) {
      out.push({ ...item, key: currentKey });
    }
  }
  return out;
}
// Hàm tính ngày đã tạo đc bao  lâu
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
// Hàm  tính còn bao nhiều ngày kêtts thúc
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
let allTaskOfProject = attachKeys(tasks);
console.log(allTaskOfProject);
allTaskOfProject.forEach((item) => {
  listTask.innerHTML += `
         <a href="#" class="content-lists-item">
            <div class="content-lists-item-left">
              <div class="item-img">
                <img src="../picture/admin-task/Idea.png" alt="Idea" />
              </div>
              <div class="item-title">
                <p class="item-title-p">
                  ${item.taskDes}
                </p>
                <div class="item-title-load">
                  <p class="item-title-load-p">
                    #${item.key} Opened ${daysDiffFromNow(
    item.taskStart
  )} days ago by
                    <span class="p-solid">${currentUser.name}</span>
                  </p>
                  <div class="item-title-load-status">
                    <span class="status-cancel">Canceled</span>
                    <span class="status-complete">in-progress</span>
                    <span class="status-pending">Pending</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-lists-item-right">
              <div class="item-time">
                <img
                  src="../picture/admin-task/Group 1000004213.png"
                  alt="Group"
                />
                <span class="item-time-load">${diffFromNow(item.taskEnd)}</span>
              </div>
              <img src="../picture/admin-task/Group 15.png" alt="Group" />
              <img src="../picture/admin-task/Comments.png" alt="components" />
            </div>
          </a>
    `;
});
