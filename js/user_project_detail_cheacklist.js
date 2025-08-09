const num = 5;
// const listItem = document.querySelector(".content-list");
const listItem = document.querySelector(".box");
for (let i = 1; i <= num; i++) {
  listItem.innerHTML += `
        <div class="content-list-item">
            <!--  -->
            <label for="check-${i + 1}" class="item-checkbox">
              <input type="checkbox" class="item-checkbox-input" id="check-${
                i + 1
              }" />
              <div class="item-checkcl">
                <img
                  class="item-checkcl-img"
                  src="../picture/user-project-detail-checklist/Vector 1.png"
                  alt="Vector"
                />
              </div>
            </label>
            <div class="item-content">
              <!-- Phan ben trai -->
              <div class="item-content-left">
                <div class="item-content-left-if">
                  <img
                    src="../picture/user-project-detail-checklist/Idea.png"
                    alt="Idea"
                  />
                  <div class="if-content">
                    <p class="if-content-title">
                      Make an Automatic Payment System that enable the design
                    </p>
                    <div class="if-content-times">
                      <p class="if-content-times-text">
                        #402235 Opened 10 days ago by
                        <span class="if-content-times-text-name"
                          >Yash Ghori</span
                        >
                      </p>
                      <span class="if-content-times-cancel">Canceled</span>
                      <span class="if-content-times-complete">Completed</span>
                    </div>
                  </div>
                </div>
                <!--  -->
                <div class="item-content-left-times">
                  <div class="times-date">
                    <span class="times-date-start">Start Date</span>
                    <div class="times-date-days">
                      <img
                        src="../picture/user-project-detail-checklist/Group 1000004314.png"
                        alt="Group"
                      />
                      <span class="times-date-day">25/3/2023</span>
                    </div>
                  </div>
                  <!--  -->
                  <div class="times-date">
                    <span class="times-date-end">End Date</span>
                    <div class="times-date-days">
                      <img
                        src="../picture/user-project-detail-checklist/Group 1000004314.png"
                        alt="Group"
                      />
                      <span class="times-date-day">25/3/2023</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Phan ben  phai -->
              <div class="item-content-right">
                <div class="right-box">
                  <img
                    src="../picture/user-project-detail-checklist/Group 1000004213.png"
                    alt="Group"
                  />
                  <span class="right-box-span">00 : 30 : 00</span>
                </div>
                <img
                  src="../picture/admin-performance/Group 15.png"
                  alt="Group"
                />
                <img
                  src="../picture/user-project-detail-checklist/Comments.png"
                  alt="components"
                />
                 <div class="box-img">
                  <img
                    src="../picture/user-project-detail-checklist/Group 1000004325.png"
                    alt="Group"
                  />
                  <div class="box-img-hover">
                      <span class="box-img-hover-title">title (x-axis)</span>
                      <div class="box-img-hover-row">
                        <img
                          src="../picture/user-project-detail-checklist/color.png"
                          alt="color"
                        />
                        <span>Data-point name:</span>
                      </div>
                      <div class="box-img-hover-row">
                        <img
                          src="../picture/user-project-detail-checklist/color (1).png"
                          alt="color"
                        />
                        <span>Data-point name:</span>
                      </div>
                      <div class="box-img-hover-row">
                        <img
                          src="../picture/user-project-detail-checklist/color (2).png"
                          alt="color"
                        />
                        <span>Data-point name:</span>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
    `;
}
