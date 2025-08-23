const arrow = document.getElementById("arrow-black");
const list = document.getElementById("lists");
// console.log(list);
function displayDropdown() {
  list.style.display = list.style.display === "block" ? "none" : "block";
  arrow.classList.toggle("arrow");
}
// Lôi Staff trong phần đăng nhập vêf
// const staff = JSON.parse(localStorage.getItem("staff")) || [];
// console.log(staff[0].name);

arrow.addEventListener("click", displayDropdown);
// Render list checkbox
const listCheck = document.querySelector(".rules-list-box");
let num = 5;
// let i = 1;
// staff.forEach((item) => {
//   console.log(i);
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
// Lấy radio đang được chọn trong nhóm name="yash"
// const selectedRadio = document.querySelector('input[name="teamLead"]:checked');

// if (selectedRadio) {
//   // Tìm phần tử cha chứa thông tin
//   const parent = selectedRadio.closest(".rules-list-check");

//   // Lấy tên & chức vụ
//   const name = parent.querySelector(".item-left-name").textContent.trim();
//   const position = parent
//     .querySelector(".item-left-position")
//     .textContent.trim();

//   console.log("Name:", name);
//   console.log("Position:", position);
// } else {
//   console.log("Chưa chọn ai");
// }

// Phần code logic create project
const createButt = document.querySelector(".rules-butt-create");

let listProject = JSON.parse(localStorage.getItem("listProject")) || [];
console.log(listProject);
function infInput(event) {
  // event.preventDefault();
  const titleProject = document.getElementById("project-title-input").value;
  const typeProject = document.getElementById("project-type-input").value;
  const startDate = document.getElementById("project-times-start-input").value;
  const endDate = document.getElementById("project-times-end-input").value;
  const description = document.getElementById("description-input").value;
  // console.log(titleProject);
  // console.log(typeProject);
  // const formatted = new Date(startDate).toLocaleDateString("vi-VN");
  // console.log(formatted);
  console.log(startDate);
  console.log(endDate);
  // console.log(description);
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
  // let listProject = [];
  if (
    titleProject &&
    typeProject &&
    startDate &&
    endDate &&
    description &&
    nameLead
  ) {
    let objProject = {
      title: titleProject,
      type: typeProject,
      // start: new Date(startDate).toLocaleDateString("vi-VN"),
      start: startDate,
      // end: new Date(endDate).toLocaleDateString("vi-VN"),
      end: endDate,
      desProject: description,
      lead: nameLead,
      status: "On progress",
    };
    listProject.push(objProject);
    console.log(listProject);
    localStorage.setItem("listProject", JSON.stringify(listProject));
    // Thông báo
    alert("Tạo project thành công!");

    // Reload lại trang
    // location.reload();
  } else {
    event.preventDefault();
    alert("Bạn chưa điền đủ thông  tin");
  }
}
// infInput();
createButt.addEventListener("click", infInput);
