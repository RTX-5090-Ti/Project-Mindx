const taskDesText = document.querySelector(".des-task");
const taskDesTitle = document.querySelector(".content-title-task");
const statusTask = document.querySelector(".status-task");
const priotyTask = document.querySelector(".status-prioty");
const deadlineTask = document.querySelector(".main-right-time-deadline");
const listSubTask = document.querySelector(".content-list-sub");
//
let taskDesShowAdmin =
  JSON.parse(localStorage.getItem("taskDesShowAdmin")) || [];
let allStask = JSON.parse(localStorage.getItem("allStask")) || [];
let listTaskToAdd = JSON.parse(localStorage.getItem("listTaskToAdd"));
// console.log(taskDesShowAdmin);
// console.log(listTaskToAdd);
//
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
//
allStask.forEach((item) => {
  if (item.taskDes.trim() === taskDesShowAdmin) {
    // console.log(item);
    taskDesText.textContent = item.taskDes;
    taskDesTitle.textContent = `Task / ${item.taskDes}`;
    statusTask.innerHTML = `#${item.key} Opened ${daysDiffFromNow(
      item.taskStart
    )} days ago by
                    <span class="main-left-status-text-solid">Yash Ghori</span>`;
    priotyTask.textContent = item.prioty;
    if (item.prioty.trim() === "Low") {
      priotyTask.classList.add("loading-low");
    } else if (item.prioty.trim() === "Medium") {
      priotyTask.classList.add("loading-medium");
    } else {
      priotyTask.classList.add("loading-high");
    }
    deadlineTask.textContent = diffFromNow(item.taskEnd);
  }
  //   console.log(item.prioty);
});
// rrender cac subTask
listTaskToAdd.forEach((item) => {
  if (item.taskDes.trim() === taskDesShowAdmin.trim()) {
    // console.log(item);
    item.subTask.forEach((icon) => {
      listSubTask.innerHTML += `
            <div class="content-list-main list-sub-item">
              <div class="main-left">
                <div class="main-leftf-img">
                  <img src="../picture/admin-subtask/Idea.png" alt="Idea" />
                </div>
                <div class="main-left-content">
                  <p class="main-left-content-text">
                    ${icon.subDes}
                  </p>
                  <div class="main-left-status">
                    <p class="main-left-status-text">
                      #${item.key} Opened ${daysDiffFromNow(
        icon.subStart
      )} days ago by
                      <span class="main-left-status-text-solid"
                        >${item.nameAss}</span
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
                  <span>${diffFromNow(icon.subEnd)}</span>
                </div>
                <div class="main-right-img">
                  <img
                    src="../picture/admin-subtask/Group 15.png"
                    alt="Group"
                  />
                </div>
                <!--  -->
                <div class="main-right-comment main-right-butt">
                  <div class="box-comment">
                    <img
                      class="comment-icon"
                      src="../picture/admin-subtask/Comments.png"
                      alt="complete"
                    />
                  </div>
                  <div class="edit-box">
                    <img
                      class="main-right-butt-icon"
                      src="../picture/admin-task/Group 1000004325.png"
                      alt="Group"
                    />
                    <div class="edit-layout">
                      <span class="layout-butt-edit">Edit</span>
                      <a href="" class="layout-butt-delete">Delete</a>
                    </div>
                  </div>
                </div>
                <!--  -->
              </div>
            </div>
        `;
    });
  }
});
// Phần edit vs delete

const listItemSubTask = document.querySelectorAll(".list-sub-item");
console.log(taskDesShowAdmin);
console.log(listItemSubTask);
console.log(listTaskToAdd);
listItemSubTask.forEach((item) => {
  let deleteButt = item.querySelector(".layout-butt-delete");
  let editButt = item.querySelector(".layout-butt-edit");
  // console.log(deleteButt);
  // Phần xoá subtask
  deleteButt.addEventListener("click", (e) => {
    // e.preventDefault();
    // console.log(item);
    let DesOfSubtask = item
      .querySelector(".main-left-content-text")
      .textContent.trim();

    console.log(DesOfSubtask);
    listTaskToAdd.forEach((icon) => {
      if (icon.taskDes.trim() === taskDesShowAdmin.trim()) {
        console.log(icon);
        icon.subTask = icon.subTask.filter(
          (ibon) => ibon.subDes !== DesOfSubtask
        );
      }
    });

    localStorage.setItem("listTaskToAdd", JSON.stringify(listTaskToAdd));
    console.log(listTaskToAdd);
    alert("Xoá SubTask thành công");
  });
  // Phần edit SubTask
  editButt.addEventListener("click", () => {
    let taskDesItem = item
      .querySelector(".main-left-content-text")
      .textContent.trim();
    let desSubTaskEdit = {
      desTask: taskDesShowAdmin,
      desSubTask: taskDesItem,
    };
    console.log(desSubTaskEdit);

    localStorage.setItem("desSubTaskEdit", JSON.stringify(desSubTaskEdit));
    window.location.href = "../pages/admin_edit_SubTask.html";
    // console.log(subTaskEdit);
  });
});
