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

// Phần vẽ chart
const ctx = document.getElementById("progressChart").getContext("2d");

const progressChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [60, 40], // 40% tiến độ, 60% còn lại
        backgroundColor: ["#757575", "#03A9F4"], // xám + xanh
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: false, // giữ cố định 195px
    cutout: "80%", // lỗ rỗng to hơn (80% radius)
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  },
  plugins: [
    {
      id: "centerText",
      afterDraw(chart) {
        const {
          ctx,
          chartArea: { width, height },
        } = chart;
        ctx.save();
        ctx.font = "bold 20px sans-serif";
        ctx.fillStyle = "#263238";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("5w: 2d", width / 2, height / 2);
        ctx.restore();
      },
    },
  ],
});
