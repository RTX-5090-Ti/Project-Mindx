const listTask = document.querySelector(".list-body");
let staff = JSON.parse(localStorage.getItem("staff")) || [];
const addButt = document.querySelector(".content-top-butt");
const layoutAddstaff = document.querySelector(".create");
const exitButt = document.querySelector(".create-exit-icon");
const header = document.getElementById("header");
const content = document.querySelector(".content");
const siderbar = document.getElementById("sidebar");
const saveButt = document.querySelector(".create-butt-save");

// const cancleButt = document.querySelector(".create-butt-cancel");
addButt.addEventListener("click", () => {
  layoutAddstaff.style.display = "block";
  header.style.opacity = "0.5";
  content.style.opacity = "0.5";
  siderbar.style.opacity = "0.5";
});
exitButt.addEventListener("click", () => {
  layoutAddstaff.style.display = "none";
  header.style.opacity = "1";
  content.style.opacity = "1";
  siderbar.style.opacity = "1";
});
// cancleButt.addEventListener("click", () => {
//   layoutAddstaff.style.display = "none";
//   header.style.opacity = "1";
//   content.style.opacity = "1";
//   siderbar.style.opacity = "1";
// });

console.log(staff);
let newStaff = {};
function addStaff(e) {
  //   e.preventDefault();
  const nameInput = document.querySelector(".create-form-name-input").value;
  const emailInput = document.querySelector(".create-form-email-input").value;
  const jobInput = document.querySelector(".create-form-job-input").value;
  //   console.log(nameInput);
  //   console.log(emailInput);
  //   console.log(jobInput);
  let result = staff.find((item) => item.email === emailInput);
  //   console.log(result);
  if (nameInput && emailInput && jobInput) {
    if (!result) {
      newStaff = {
        name: nameInput,
        email: emailInput,
        job: jobInput,
        password: "1",
        phone: "",
      };
      //   console.log(newStaff);
      alert("New staff được thêm thành công");
      staff.push(newStaff);
      console.log(staff);
    } else {
      e.preventDefault();
      alert("Email đã tồn tại");
    }
  } else {
    e.preventDefault();
    alert("Bạn chưa điền đủ thông tin");
  }
  localStorage.setItem("staff", JSON.stringify(staff));
}

saveButt.addEventListener("click", addStaff);

// console.log(staff);
staff.forEach((item) => {
  if (item.phone === "" && item.job === "") {
    listTask.innerHTML += `
        <tr class="task-item">
              <td class="task-item-name">${item.name}</td>
              <td>${item.email}</td>
              <td><img
                        class="item-nodate"
                        src="../picture/favicon/no-data.gif"
                        alt=""
                    /></td>
              <td>
                <div class="item-phone">
                  <span><img
                        class="item-nodate"
                        src="../picture/favicon/no-data.gif"
                        alt=""
                    /></span>
                  <a href="">
                      <img
                        class="cancle-icon"
                        src="../picture/favicon/letter-x.gif"
                        alt="letter-x"
                      />
                    </a>
                </div>
              </td>
        </tr>
    `;
  } else if (item.phone !== "" && item.job !== "") {
    listTask.innerHTML += `
        <tr class="task-item">
              <td class="task-item-name">${item.name}</td>
              <td>${item.email}</td>
              <td>${item.job}</td>
              <td>
                <div class="item-phone">
                  <span>+91 ${item.phone}</span>
                  <a href="">
                      <img
                        class="cancle-icon"
                        src="../picture/favicon/letter-x.gif"
                        alt="letter-x"
                      />
                    </a>
                </div>
              </td>
        </tr>
    `;
  } else if (item.phone === "" && item.job !== "") {
    listTask.innerHTML += `
        <tr class="task-item">
              <td class="task-item-name">${item.name}</td>
              <td>${item.email}</td>
              <td>${item.job}</td>
              <td>
                <div class="item-phone">
                  <span><img
                        class="item-nodate"
                        src="../picture/favicon/no-data.gif"
                        alt=""
                    /></span>
                  <a href="">
                      <img
                        class="cancle-icon"
                        src="../picture/favicon/letter-x.gif"
                        alt="letter-x"
                      />
                    </a>
                </div>
              </td>
        </tr>
    `;
  } else {
    listTask.innerHTML += `
        <tr class="task-item">
              <td class="task-item-name">${item.name}</td>
              <td>${item.email}</td>
              <td><img
                        class="item-nodate"
                        src="../picture/favicon/no-data.gif"
                        alt=""
                    /></td>
              <td>
                <div class="item-phone">
                  <span>+91 ${item.phone}</span>
                  <a href="">
                      <img
                        class="cancle-icon"
                        src="../picture/favicon/letter-x.gif"
                        alt="letter-x"
                      />
                    </a>
                </div>
              </td>
        </tr>
    `;
  }
});
// delette task
// const deleteTask = document.querySelector(".cancle-icon");
let taskItem = document.querySelectorAll(".task-item");
const deleteButt = document.querySelectorAll(".cancle-icon");
// console.log(deleteTask);
deleteButt.forEach((item) => {
  let parent = item.closest(".task-item");
  let name = parent.querySelector(".task-item-name").textContent;
  item.addEventListener("click", () => {
    let newStaff = staff.filter((icon) => {
      return icon.name !== name;
    });
    localStorage.setItem("staff", JSON.stringify(newStaff));
  });
});
