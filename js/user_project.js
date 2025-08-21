const projects = document.querySelector(".content-bottom");

let listProject = JSON.parse(localStorage.getItem("listProject")) || [];
// console.log(listProject[listProject.length - 1].title);
listProject.forEach((item) => {
  function ymdToDmy(dateStr) {
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  }
  projects.innerHTML += `
        <div class="content-bottom-listt">
            <div class="list-title">
              <div class="list-title-left">
                <span class="list-title-left-name">${item.title}</span>
                
              </div>
              <div class="list-title-right">
                <span>Offtrack</span>
              </div>
            </div>
            <!--  -->
            <a href="#" class="list-title-box">
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
