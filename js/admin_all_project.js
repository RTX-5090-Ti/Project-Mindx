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
                <span>Offtrack</span>
              </div>
            </div>
            <!--  -->
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
