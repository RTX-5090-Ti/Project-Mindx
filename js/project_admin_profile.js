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

// items2.forEach((item) => {
//   listPicture2.innerHTML += `
//     <div class="right-views-list">
//       <img src="${item.src}" alt="${item.name}">
//       <span>${item.name}</span>
//     </div>
//   `;
// });

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
const header = document.getElementById("header");
const siderbar = document.getElementById("sidebar");
const content = document.querySelector(".content");
//value the Input
let nameInput = document.querySelector(".create-form-name-input");
let emailInput = document.querySelector(".create-form-email-input");
let jobInput = document.querySelector(".create-form-job-input");
let phoneInput = document.querySelector(".create-form-phone-input");
//
const admin = JSON.parse(localStorage.getItem("admin")) || [];
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
nameUser.textContent = currentUser.name;
emailUser.textContent = currentUser.email;
jobUser.textContent = currentUser.job;
phoneUser.textContent = currentUser.phone;

console.log(admin);
console.log(currentUser);
// console.log(currentUser);
let accountUser = admin.find((item) => item.name === currentUser.name);
console.log(accountUser);
nameInput.value = accountUser.name;
emailInput.value = accountUser.email;
jobInput.value = accountUser.job;
phoneInput.value = accountUser.phone;
function editProfile() {
  let nameInput = document.querySelector(".create-form-name-input").value;
  let emailInput = document.querySelector(".create-form-email-input").value;
  let jobInput = document.querySelector(".create-form-job-input").value;
  let phoneInput = document.querySelector(".create-form-phone-input").value;
  nameUser.textContent = nameInput;
  emailUser.textContent = emailInput;
  jobUser.textContent = jobInput;
  phoneUser.textContent = phoneInput;
  layoutEdit.style.display = "none";
  header.style.opacity = "1";
  siderbar.style.opacity = "1";
  content.style.opacity = "1";
  admin.forEach((item) => {
    if (item.name === currentUser.name) {
      item.name = nameInput;
      item.email = emailInput;
      item.job = jobInput;
      item.phone = phoneInput;
    }
  });
  // localStorage.setItem("admin", JSON.stringify(admin));
  console.log(admin);
}

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
