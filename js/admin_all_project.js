const projects = document.querySelector(".content-bottom");

let listProject = JSON.parse(localStorage.getItem("listProject")) || [];
// console.log(listProject[listProject.length - 1].title);
listProject.forEach((item) => {
  function ymdToDmy(dateStr) {
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  }
  projects.innerHTML += `
        <div class="content-bottom-list">
            <div class="list-title">
              <div class="list-title-left">
                <span class="list-title-left-name">${item.title}</span>
                <a href="../pages/admin_edit_Project.html">
                  <img
                    class="list-title-left-butt"
                    src="../picture/admin-all-project/Group 1000004288.png"
                    alt="Group"
                  />
                </a>
              </div>
              <div class="list-title-right">
                <span>Ontrack</span>
              </div>
            </div>
            <!--  -->
            <div class="status-chart">
              <div class="status-chart-box">
                <span class="status-project">${item.status}</span>
                <span class="butt-icon" id="arrow-black">&#9650;</span>
                <div class="status-chart-choice">
                  <span class="choice status-chart-choice-complete"
                    >Completed</span
                  >
                  <span class="choice status-chart-choice-progress"
                    >On progress</span
                  >
                  <span class="choice status-chart-choice-hold">On hold</span>
                  <span class="choice status-chart-choice-peding">Pending</span>
                </div>
              </div>
              <div class="status-chart-icon">
                <img
                  class="status-icon"
                  src="../picture/favicon/on-progress.gif"
                  alt=""
                />
              </div>
            </div>
            <a href="../pages/admin_Task.html" class="list-title-box">
              <div class="list-paragraph">
                <p>
                  ${item.desProject}
                </p>
              </div>
              <div class="list-title-box-item">
                <div class="list-time">
                  <img
                    src="../picture/admin-all-project/🦆 icon _Hourglass End_.png"
                    alt="Hourglass"
                  />
                  <span class="list-time-start">${ymdToDmy(item.start)}</span>
                </div>
                <div class="list-issues">
                  <img
                    src="../picture/admin-all-project/Group 642.png"
                    alt="Group"
                  />
                  <div class="list-issues-item">
                    <img
                      src="../picture/admin-all-project/Group 628.png"
                      alt="Group"
                    />
                    <span>14 issues</span>
                  </div>
                </div>
              </div>

            </a>
          </div>
    `;
});

// const editButt = document.querySelector(".list-title-left-butt");
// function findProjectEdit() {}
// editButt.addEventListener("click", findProjectEdit);
// console.log(listProject);
document.querySelectorAll(".list-title-left-butt").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // e.preventDefault(); // nếu không muốn click làm gì khác
    // Tìm phần cha chứa thông tin
    const parent = btn.closest(".content-bottom-list");

    // Lấy tên project
    const projectName = parent
      .querySelector(".list-title-left span:first-child")
      .textContent.trim(); //chỗ này có thể phát sinh lỗi
    console.log("Project được click:", projectName);
    let projectItem = listProject.find(
      (item) => item.title.trim() === projectName //chỗ này có thể phát sinh lỗi
    );
    console.log(projectItem);
    localStorage.setItem("projectEdit", JSON.stringify(projectItem));
  });
});
//////////////
const projectItem = document.querySelectorAll(".list-title-box");
let allProject = JSON.parse(localStorage.getItem("allProject")) || []; // lan dau chua co gi tao moi

console.log(allProject);
if (listProject.length > allProject.length) {
  //
  const existingKeys = allProject
    .map((p) => (typeof p.key === "number" ? p.key : NaN))
    .filter((k) => !Number.isNaN(k));
  let nextKey = (existingKeys.length ? Math.max(...existingKeys) : 402230) + 1;
  //
  let ids = allProject.map((item) => item.id);
  listProject.forEach((item) => {
    if (!ids.includes(item.title)) {
      allProject.push({ id: item.title, key: nextKey++, task: [] });
      ids.push(item.title);
    }
  });
  console.log(allProject);
} else if (listProject.length < allProject.length) {
  let titles = listProject.map((item) => item.title);
  // console.log(titles);
  allProject = allProject.filter((item) => titles.includes(item.id));
  console.log(allProject);
} else if (listProject.length === allProject.length) {
  allProject.forEach((item, index) => {
    if (item.id !== listProject[index].title) {
      item.id = listProject[index].title;
    }
  });
}
///
console.log(listProject.length);
console.log(allProject.length);
///

localStorage.setItem("allProject", JSON.stringify(allProject));
///
function ymdToDmy(dateStr) {
  const [year, month, day] = dateStr.split("-");
  return `${day}-${month}-${year}`;
}

projectItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    // e.preventDefault();
    // console.log(item);
    const text = item.closest(".content-bottom-list");
    const nameProject = text.querySelector(".list-title-left-name").textContent; // tim name project
    console.log(nameProject);
    const timeStartProject = item.querySelector(".list-time-start").textContent;
    console.log(timeStartProject);
    let projectAssign = listProject.find((item) => {
      return (
        item.title == nameProject && ymdToDmy(item.start) == timeStartProject
      );
    });
    console.log(projectAssign);
    localStorage.setItem("projectAssign", JSON.stringify(projectAssign));
  });
});
// trạng thái status

const listProjectItem = document.querySelectorAll(".content-bottom-list");
console.log(listProjectItem);
listProjectItem.forEach((item) => {
  const buttArrow = item.querySelector(".butt-icon");
  const listChoice = item.querySelector(".status-chart-choice");
  const statusProject = item.querySelector(".status-project");
  const backgroundStatus = item.querySelector(".status-chart-box");
  const iconLoading = item.querySelector(".status-icon");
  const choices = item.querySelectorAll(".choice"); // 👈 lấy choice trong từng item thôi
  let statusNow = item.querySelector(".status-project").textContent.trim();
  // console.log(statusNow);

  if (statusNow === "Completed") {
    statusProject.style.color = "#238799";
    backgroundStatus.style.backgroundColor = "#d2eef2";
    iconLoading.src = "../picture/favicon/completed.gif";
  } else if (statusNow === "On progress") {
    statusProject.style.color = "#38b4f2";
    backgroundStatus.style.backgroundColor = "#d6effc";
    iconLoading.src = "../picture/favicon/on-progress.gif";
  } else if (statusNow === "On hold") {
    statusProject.style.color = "#625ed6";
    backgroundStatus.style.backgroundColor = "#e4e3fa";
    iconLoading.src = "../picture/favicon/on-hold.gif";
  } else {
    statusProject.style.color = "#d42c20";
    backgroundStatus.style.backgroundColor = "#f9dbd9";
    iconLoading.src = "../picture/favicon/pending.gif";
  }
  // Toggle list riêng cho item này
  buttArrow.addEventListener("click", () => {
    listChoice.classList.toggle("show");
  });

  // Xử lý click choice riêng cho item này
  choices.forEach((icon) => {
    icon.addEventListener("click", () => {
      const text = icon.textContent.trim();
      statusProject.textContent = text;
      listChoice.classList.remove("show");
      // Cập nhật localStorage ngay tại đây
      let titleProject = item
        .querySelector(".list-title-left-name")
        .textContent.trim();
      let project = listProject.find((p) => p.title.trim() === titleProject);
      if (project) {
        project.status = text;
        localStorage.setItem("listProject", JSON.stringify(listProject));
      }

      if (text === "Completed") {
        statusProject.style.color = "#238799";
        backgroundStatus.style.backgroundColor = "#d2eef2";
        iconLoading.src = "../picture/favicon/completed.gif";
      } else if (text === "On progress") {
        statusProject.style.color = "#38b4f2";
        backgroundStatus.style.backgroundColor = "#d6effc";
        iconLoading.src = "../picture/favicon/on-progress.gif";
      } else if (text === "On hold") {
        statusProject.style.color = "#625ed6";
        backgroundStatus.style.backgroundColor = "#e4e3fa";
        iconLoading.src = "../picture/favicon/on-hold.gif";
      } else {
        statusProject.style.color = "#d42c20";
        backgroundStatus.style.backgroundColor = "#f9dbd9";
        iconLoading.src = "../picture/favicon/pending.gif";
      }
    });
  });
});
//
// const buttText = document.querySelector(".two-fc");
// buttText.addEventListener("click", () => {
//   console.log("hello");
//   listProject.forEach((icon) => {
//     listProjectItem.forEach((item) => {
//       let titleProject = item
//         .querySelector(".list-title-left-name")
//         .textContent.trim();
//       let statusProject = item
//         .querySelector(".status-project")
//         .textContent.trim();

//       if (icon.title.trim() === titleProject) {
//         icon.status = statusProject;
//       }
//     });
//   });
//   console.log(listProject);
// });
//
// listProject.forEach((icon) => {
//   listProjectItem.forEach((item) => {
//     let titleProject = item
//       .querySelector(".list-title-left-name")
//       .textContent.trim();
//     let statusProject = item
//       .querySelector(".status-project")
//       .textContent.trim();
//     // console.log(statusProject);
//     // let status = item.querySelector(".status-project");
//     // console.log(status.textContent);
//     if (icon.title.trim() === titleProject) {
//       icon.status = statusProject;
//       // console.log(statusProject);
//       // console.log(icon.status);
//     }
//   });
// });
// localStorage.setItem("listProject", JSON.stringify(listProject));
