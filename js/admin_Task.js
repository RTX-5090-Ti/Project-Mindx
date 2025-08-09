const contentListItem = document.querySelector(".content-lists");
const numOfList = 5;
for (let i = 1; i <= numOfList; i++) {
  contentListItem.innerHTML += `
        <div class="content-lists-item">
            <div class="content-lists-item-left">
              <div class="item-img">
                <img src="../picture/admin-task/Idea.png" alt="Idea" />
              </div>
              <div class="item-title">
                <p class="item-title-p">
                  Make an Automatic Payment System that enable the design
                </p>
                <div class="item-title-load">
                  <p class="item-title-load-p">
                    #402235 Opened 10 days ago by
                    <span class="p-solid">Yash Ghori</span>
                  </p>
                  <div class="item-title-load-status">
                    <span class="status-cancel">Canceled</span>
                    <span class="status-complete">Completed</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-lists-item-right">
              <div class="item-time">
                <img
                  src="../picture/admin-task/Group 1000004213.png"
                  alt="Group"
                />
                <span class="item-time-load">00 : 30 : 00</span>
              </div>
              <img src="../picture/admin-task/Group 15.png" alt="Group" />
              <img src="../picture/admin-task/Comments.png" alt="components" />
            </div>
          </div>
    `;
}
