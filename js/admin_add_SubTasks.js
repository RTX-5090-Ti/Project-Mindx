// Render phần Reporter
const listIitemReporter = document.querySelector(".reporter-list");
const numberReporter = 6;
const itemsReporter = [{ name: "checkbox-reporter" }];
// console.log(items[0].name);
for (let i = 1; i <= numberReporter; i++) {
  listIitemReporter.innerHTML += `
    <div class="reporter-list-check">
        <div class="reporter-list-check-span">
            <span class="check-name">Yash</span>
            <span class="check-position">Team lead</span>
        </div>
        <label for="${itemsReporter[0].name}-${i}" class="checkbox-label">
            <input
                type="checkbox"
                id="${itemsReporter[0].name}-${i}"
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

// Render phần Assignee

const listIitemAssignee = document.querySelector(".assignee-list");
const numberAssignee = 6;
const itemsAssignee = [{ name: "checkbox-assignee" }];
// console.log(items[0].name);
for (let i = 1; i <= numberAssignee; i++) {
  listIitemAssignee.innerHTML += `
    <div class="assignee-list-check">
        <div class="assignee-list-check-span">
            <span class="check-name">Yash</span>
            <span class="check-position">Team lead</span>
        </div>
        <label for="${itemsAssignee[0].name}-${i}" class="checkbox-label">
            <input
                type="checkbox"
                id="${itemsAssignee[0].name}-${i}"
                class="check-input-assignee"
                />
            <div class="checkbox-assignee">
                <img
                src="../picture/admin-create-project/Vector3.png"
                alt="Vector2"
                />
            </div>
        </label>
    </div>
    `;
}

// Phần  code js cho list
const arrowReporter = document.getElementById("arrow-reporter");
const arrowAssignee = document.getElementById("arrow-assignee");
const listReporter = document.querySelectorAll(".reporter-list-check");
const listAssignee = document.querySelectorAll(".assignee-list-check");

function displayListReporter() {
  listReporter.forEach((item) => {
    item.style.display = item.style.display === "flex" ? "none" : "flex";
  });
  //   listReporter.style.display =
  // listReporter.style.display === "flex" ? "none" : "flex";
  arrowReporter.classList.toggle("arrow-reporter-icon");
}
arrowReporter.addEventListener("click", displayListReporter);

function displayListAssiggnee() {
  listAssignee.forEach((item) => {
    item.style.display = item.style.display === "flex" ? "none" : "flex";
  });
  //   listReporter.style.display =
  // listReporter.style.display === "flex" ? "none" : "flex";
  arrowAssignee.classList.toggle("arrow-assignee-icon");
}
arrowAssignee.addEventListener("click", displayListAssiggnee);
