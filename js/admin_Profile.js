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
