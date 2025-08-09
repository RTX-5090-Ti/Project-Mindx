const girdCase = document.querySelector(".content-view-box");
const numCase = 2;

const girdCaseItem = [
  {
    class: "status-two",
    status: "In progress",
    position_1: "User interface",
    review_1: "Design new user interface design for food delivery app",
    linkNum_1: 2,
    cmtNum_1: 4,
    src_1: "../picture/user-task-kanban-board/Frame 1000003292 (3).png",
    //
    position_2: "Usability Testing",
    review_2: "Perform the usability testing for the newly develop app",
    linkNum_2: 3,
    cmtNum_2: 5,
    src_2: "../picture/user-task-kanban-board/Frame 1000003292 (4).png",
    //
    position_3: "Food Research",
    review_3:
      "Food design is required for our new project let’s research the best practices.",
    linkNum_3: 5,
    cmtNum_3: 9,
    src_3: "../picture/user-task-kanban-board/Frame 1000003292 (5).png",
  },
  {
    class: "status-three",
    status: "Completed",
    position_1: "Mind Mapping",
    review_1:
      "Mind mapping for the food delivery app for by targeting young users",
    linkNum_1: 7,
    cmtNum_1: 2,
    src_1: "../picture/user-task-kanban-board/Frame 1000003292 (6).png",
    //
    position_2: "Food Research",
    review_2:
      "Food design is required for our new project let’s research the best practices.",
    linkNum_2: 5,
    cmtNum_2: 5,
    src_2: "../picture/user-task-kanban-board/Frame 1000003292 (7).png",
    //
    position_3: "User Feedback",
    review_3:
      "Perform the user survey and take necessary steps to solve their problem with existing one",
    linkNum_3: 5,
    cmtNum_3: 8,
    src_3: "../picture/user-task-kanban-board/Frame 1000003292 (8).png",
  },
];

girdCaseItem.forEach((item) => {
  girdCase.innerHTML += `
        <div class="content-view-status ${item.class}">
              <div class="status-load">
                <span class="status-load-span">${item.status}</span>
                <img
                  src="../picture/user-task-kanban-board/menu.png"
                  alt="menu"
                />
              </div>
              <!-- Ngay Day -->
              <div class="status-list">
                <div class="status-list-plus">
                  <img
                    src="../picture/user-task-kanban-board/plus1.png"
                    alt="plus1"
                  />
                </div>
                <div class="status-list-item">
                  <div class="item-times">
                    <span class="item-times-position">${item.position_1}</span>
                    <div class="item-times-day">
                      <img
                        src="../picture/user-task-kanban-board/clock unfill.png"
                        alt="clock"
                      />
                      <span>12 Days</span>
                    </div>
                  </div>
                  <p class="item-review">
                    ${item.review_1}
                  </p>
                  <div class="item-if">
                    <div class="item-if-left">
                      <div class="item-if-left-link">
                        <img
                          src="../picture/user-task-kanban-board/attachment.png"
                          alt="attachment"
                        />
                        <span class="item-if-left-link-num">${item.linkNum_1}</span>
                      </div>
                      <div class="item-if-left-cmt">
                        <img
                          src="../picture/user-task-kanban-board/message 3.png"
                          alt="message"
                        />
                        <span class="item-if-left-link-num">${item.cmtNum_1}</span>
                      </div>
                    </div>

                    <div class="item-if-right">
                      <div class="item-if-right-circle">
                        <img
                          src="../picture/user-task-kanban-board/plus.png"
                          alt="plus"
                        />
                      </div>
                      <img
                        src="${item.src_1}"
                        alt="Frame"
                      />
                    </div>
                  </div>
                </div>
                <div class="status-list-item">
                  <div class="item-times">
                    <span class="item-times-position">${item.position_2}</span>
                    <div class="item-times-day">
                      <img
                        src="../picture/user-task-kanban-board/clock unfill.png"
                        alt="clock"
                      />
                      <span>12 Days</span>
                    </div>
                  </div>
                  <p class="item-review">
                    ${item.review_2}
                  </p>
                  <div class="item-if">
                    <div class="item-if-left">
                      <div class="item-if-left-link">
                        <img
                          src="../picture/user-task-kanban-board/attachment.png"
                          alt="attachment"
                        />
                        <span class="item-if-left-link-num">${item.linkNum_2}</span>
                      </div>
                      <div class="item-if-left-cmt">
                        <img
                          src="../picture/user-task-kanban-board/message 3.png"
                          alt="message"
                        />
                        <span class="item-if-left-link-num">${item.cmtNum_2}</span>
                      </div>
                    </div>

                    <div class="item-if-right">
                      <div class="item-if-right-circle">
                        <img
                          src="../picture/user-task-kanban-board/plus.png"
                          alt="plus"
                        />
                      </div>
                      <img
                        src="${item.src_2}"
                        alt="Frame"
                      />
                    </div>
                  </div>
                </div>
                <div class="status-list-item">
                  <div class="item-times">
                    <span class="item-times-position">${item.position_3}</span>
                    <div class="item-times-day">
                      <img
                        src="../picture/user-task-kanban-board/clock unfill.png"
                        alt="clock"
                      />
                      <span>12 Days</span>
                    </div>
                  </div>
                  <p class="item-review">
                    ${item.review_3}
                  </p>
                  <div class="item-if">
                    <div class="item-if-left">
                      <div class="item-if-left-link">
                        <img
                          src="../picture/user-task-kanban-board/attachment.png"
                          alt="attachment"
                        />
                        <span class="item-if-left-link-num">${item.linkNum_3}</span>
                      </div>
                      <div class="item-if-left-cmt">
                        <img
                          src="../picture/user-task-kanban-board/message 3.png"
                          alt="message"
                        />
                        <span class="item-if-left-link-num">${item.cmtNum_3}</span>
                      </div>
                    </div>

                    <div class="item-if-right">
                      <div class="item-if-right-circle">
                        <img
                          src="../picture/user-task-kanban-board/plus.png"
                          alt="plus"
                        />
                      </div>
                      <img
                        src="${item.src_3}"
                        alt="Frame"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
    `;
});
