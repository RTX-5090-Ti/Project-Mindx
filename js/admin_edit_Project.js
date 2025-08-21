const arrow = document.getElementById("arrow-black");
const list = document.getElementById("lists");
// console.log(list);
function displayDropdown() {
  list.style.display = list.style.display === "block" ? "none" : "block";
  arrow.classList.toggle("arrow");
}
arrow.addEventListener("click", displayDropdown);
//Loi staff ve
// const staff = JSON.parse(localStorage.getItem("staff")) || [];
// console.log(staff[0].name);

const listCheck = document.querySelector(".rules-list-box");
// let i = 1;

// staff.forEach((item) => {
//   listCheck.innerHTML += `
//     <div class="rules-list-check">
//                     <div class="rules-list-item-left">
//                       <span class="item-left-name">${item.name}</span>
//                       <span class="item-left-position">Team lead</span>
//                     </div>
//                     <label for="checkbox${i}" class="checkbox-label">
//                       <input
//                         type="radio"
//                         name="teamLead"
//                         id="checkbox${i}"
//                         class="check-input"
//                       />
//                       <div class="checkbox">
//                         <img
//                           src="../picture/admin-create-project/Vector3.png"
//                           alt="Vector2"
//                         />
//                       </div>
//                     </label>
//                   </div>
//   `;
//   i++;
// });
let num = 5;
for (let i = 1; i <= num; i++) {
  listCheck.innerHTML += `
      <div class="rules-list-check">
                    <div class="rules-list-item-left">
                      <span class="item-left-name">Yash ${i}</span>
                      <span class="item-left-position">Team lead</span>
                    </div>
                    <label for="checkbox${i}" class="checkbox-label">
                      <input
                        type="radio"
                        name="teamLead"
                        id="checkbox${i}"
                        class="check-input"
                      />
                      <div class="checkbox">
                        <img
                          src="../picture/admin-create-project/Vector3.png"
                          alt="Vector2"
                        />
                      </div>
                    </label>
                  </div>
  `;
}
//
//
const titleEdit = document.getElementById("project-title-input");
const typeEdit = document.getElementById("project-type-input");
const startDateEdit = document.getElementById("project-times-start-input");
const endDateEdit = document.getElementById("project-times-end-input");
const descriptionEdit = document.getElementById("description-input");
// Đẩy giá trị vào input để người dùng edit
// let projectEdit = JSON.parse(localStorage.getItem("projectEdit")) || [];
let raw = localStorage.getItem("projectEdit");
let projectEdit = [];

if (raw && raw !== "undefined") {
  projectEdit = JSON.parse(raw);
}
let listProject = JSON.parse(localStorage.getItem("listProject")) || [];
// console.log(projectEdit);
function vnToISO(vnDate) {
  if (!vnDate) return ""; // null/undefined/""
  const v = String(vnDate).trim();

  // Nếu đã ở dạng ISO thì trả về luôn
  if (/^\d{4}-\d{2}-\d{2}$/.test(v)) return v;

  // Bắt DD/MM/YYYY hoặc D/M/YYYY (cũng chấp dấu -)
  const m = v.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/);
  if (!m) {
    console.warn("vnToISO: Sai định dạng ngày:", v);
    return "";
  }

  const day = m[1].padStart(2, "0");
  const month = m[2].padStart(2, "0");
  const year = m[3];

  return `${year}-${month}-${day}`;
}

titleEdit.value = projectEdit.title;
typeEdit.value = projectEdit.type;
startDateEdit.value = vnToISO(projectEdit.start);
endDateEdit.value = vnToISO(projectEdit.end);
descriptionEdit.value = projectEdit.desProject;

const listLeader = document.querySelectorAll(".rules-list-check");

listLeader.forEach((item) => {
  let name = item.querySelector(".item-left-name").textContent;
  if (name === projectEdit.lead) {
    const radio = item.querySelector(".check-input");
    if (radio) {
      radio.checked = true;
    }
  }
});
// Js edit thông tin project
// console.log(listProject);
// const selectedRadio = document.querySelector('input[name="teamLead"]:checked');
// let nameLead;
// if (selectedRadio) {
//   // Tìm phần tử cha chứa thông tin
//   const parent = selectedRadio.closest(".rules-list-check");

//   // Lấy tên & chức vụ
//   nameLead = parent.querySelector(".item-left-name").textContent.trim();
// // }
// let listProjectedit = listProject.find((item) => {
//   item.title === projectEdit.title;
//   return item;
// });
// console.log(listProjectedit);
const saveButt = document.querySelector(".rules-butt-create");
function editProject() {
  //   console.log(projectEdit);
  listProject.forEach((item) => {
    if (projectEdit.title === item.title && projectEdit.type === item.type) {
      const selectedRadio = document.querySelector(
        'input[name="teamLead"]:checked'
      );
      let nameLead;
      if (selectedRadio) {
        // Tìm phần tử cha chứa thông tin
        const parent = selectedRadio.closest(".rules-list-check");
        // Lấy tên & chức vụ
        nameLead = parent.querySelector(".item-left-name").textContent.trim();
      }
      console.log(nameLead);
      item.title = titleEdit.value;
      item.type = typeEdit.value;
      item.start = startDateEdit.value;
      item.end = endDateEdit.value;
      item.desProject = descriptionEdit.value;
      item.lead = nameLead;
      localStorage.setItem("listProject", JSON.stringify(listProject));
    }
  });
  alert("Cập nhật thành công");
  //   setTimeout(() => {}, 2000);
}

saveButt.addEventListener("click", editProject);
// Xoá project
const deleteButt = document.querySelector(".rules-butt-delete");
console.log(projectEdit);
console.log(listProject);
function deleteProject(event) {
  // event.preventDefault();
  let newListProject = listProject.filter((item) => {
    return !(
      item.title === projectEdit.title &&
      item.type === projectEdit.type &&
      item.start === projectEdit.start
    );
  });
  console.log(newListProject);
  localStorage.setItem("listProject", JSON.stringify(newListProject));
  alert("Đã xoá project thành công");
}
deleteButt.addEventListener("click", deleteProject);
