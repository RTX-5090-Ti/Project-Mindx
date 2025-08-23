const listPicture = document.querySelector(".mid-imgs");
// Taoj lists gồm đường dẫn vào name ddawtj vào <spann>
const items = [
  {
    src: "../picture/project-admin-profile/list-imgs-mid/Imagem.png",
    name: "Addodle",
  },
  {
    src: "../picture/project-admin-profile/list-imgs-mid/Imagem (1).png",
    name: "Marketplace",
  },
  {
    src: "../picture/project-admin-profile/list-imgs-mid/Imagem (2).png",
    name: "Von Dracula",
  },
  {
    src: "../picture/project-admin-profile/list-imgs-mid/Imagem (3).png",
    name: "Von Dracula",
  },
  {
    src: "../picture/project-admin-profile/list-imgs-mid/Imagem (4).png",
    name: "John Joestar",
  },
  {
    src: "../picture/project-admin-profile/list-imgs-mid/Imagem (5).png",
    name: "Akali Jin",
  },
  {
    src: "../picture/project-admin-profile/list-imgs-mid/Imagem (6).png",
    name: "Kayn Vampyr",
  },
  {
    src: "../picture/project-admin-profile/list-imgs-mid/Imagem (7).png",
    name: "Kayn Vampyr",
  },
];
// Rander ra cách list
listPicture.innerHTML = items
  .map(
    (item) =>
      `
    <div class="mid-imgs-item">
        <img
            src="${item.src}"
            alt="Imagem"/>
        <span>${item.name}</span>
    </div>
    `
  )
  .join("");

//   Render cho phần list bên trái 6 ảnh
const listPicture2 = document.querySelector(".right-views-lists");
const items2 = [
  {
    src: "../picture/project-admin-profile/list-img-right/Imagem.png",
    name: "Emo stuff",
  },
  {
    src: "../picture/project-admin-profile/list-img-right/Imagem (1).png",
    name: "Tim Burton",
  },
  {
    src: "../picture/project-admin-profile/list-img-right/Imagem (2).png",
    name: "Halloween!",
  },
  {
    src: "../picture/project-admin-profile/list-img-right/Imagem (3).png",
    name: "Spooky Art",
  },
  {
    src: "../picture/project-admin-profile/list-img-right/Imagem (4).png",
    name: "Dark Art",
  },
  {
    src: "../picture/project-admin-profile/list-img-right/Imagem (5).png",
    name: "Gothic art",
  },
];
// Render ra list 6 piicture

listPicture2.innerHTML = items2
  .map(
    (item) =>
      `
    <div class="right-views-item">
        <img
            src="${item.src}"
            alt="Imagem"/>
        <span>${item.name}</span>
    </div>
    `
  )
  .join("");
// Js logic trang
// Click button log-out
const loadItem = document.querySelector(".load");
const backGround = document.querySelector(".container");
const buttLogOut = document.querySelector(".log-out");
buttLogOut.addEventListener("click", () => {
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 2000);
  loadItem.style.display = "block";
  backGround.style.opacity = "20%";
});
// Edit profile admin
const editButt = document.querySelector(".left-butt-edit");
const exitButt = document.querySelector(".create-exit-icon");
const layoutEdit = document.querySelector(".create");
const saveButt = document.querySelector(".create-butt-save");
const nameUser = document.querySelector(".left-if-name");
const emailUser = document.querySelector(".left-email-text");
const phoneUser = document.querySelector(".left-number-text");
const jobUser = document.querySelector(".left-position-text");
const header = document.getElementById("header-user");
const siderbar = document.getElementById("siderbar");
const content = document.querySelector(".content");
//value the Input
let nameInput = document.querySelector(".create-form-name-input");
let emailInput = document.querySelector(".create-form-email-input");
let jobInput = document.querySelector(".create-form-job-input");
let phoneInput = document.querySelector(".create-form-phone-input");
//
let staff = JSON.parse(localStorage.getItem("staff")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];

console.log(staff);
console.log(currentUser);
staff.forEach((item) => {
  if (item.name.trim() === currentUser.name.trim()) {
    console.log(item);
    nameUser.textContent = item.name;
    emailUser.textContent = item.email;
    jobUser.textContent = item.job;
    phoneUser.textContent = `+91 ${item.phone}`;
    nameInput.value = item.name;
    emailInput.value = item.email;
    jobInput.value = item.job ? item.job : "Enter your job...";
    phoneInput.value = item.phone ? item.phone : "Enter your phone...";
  }
});
function editProfile() {
  nameUser.textContent = nameInput.value;
  emailUser.textContent = emailInput.value;
  jobUser.textContent = jobInput.value;
  phoneUser.textContent = `+91 ${phoneInput.value}`;
  layoutEdit.style.display = "none";
  header.style.opacity = "1";
  siderbar.style.opacity = "1";
  content.style.opacity = "1";
  staff.forEach((item) => {
    if (item.name.trim() === currentUser.name.trim()) {
      console.log(item);
      item.name = nameInput.value;
      item.email = emailInput.value;
      item.job = jobInput.value;
      item.phone = phoneInput.value;
      currentUser.name = nameInput.value;
      currentUser.email = emailInput.value;
      currentUser.job = jobInput.value;
      currentUser.phone = phoneInput.value;
    }
  });
  console.log(staff);
  console.log(currentUser);
  localStorage.setItem("staff", JSON.stringify(staff));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
}

// Phan nut bam
editButt.addEventListener("click", () => {
  layoutEdit.style.display = "block";
  header.style.opacity = "0.5";
  siderbar.style.opacity = "0.5";
  content.style.opacity = "0.5";
});
exitButt.addEventListener("click", () => {
  layoutEdit.style.display = "none";
  header.style.opacity = "1";
  siderbar.style.opacity = "1";
  content.style.opacity = "1";
});
saveButt.addEventListener("click", editProfile);
