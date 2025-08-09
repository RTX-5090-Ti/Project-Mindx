const listIcon = document.querySelectorAll(".item");
const container = document.querySelector(".container");
const popUpPage = document.querySelector(".content-popup");
const cancleIcon = document.querySelector(".cancle-icon");
// const itemSiderbar = document.querySelector(".sidebar-items");
// console.log(itemSiderbar);

function showPoopUp() {
  popUpPage.style.display = "block";
  container.style.opacity = "50%";
}

listIcon.forEach((item) => {
  item.addEventListener("click", showPoopUp);
});

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
console.log(addControl);
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
