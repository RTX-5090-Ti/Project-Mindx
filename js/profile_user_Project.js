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
