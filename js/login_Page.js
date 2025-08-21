const inIcon = document.querySelector(".content-text-in");
const upIcon = document.querySelector(".content-text-up");
const formSignup = document.querySelector(".form-signup");
const formSignin = document.querySelector(".form-signin");
const loadIcon = document.querySelector(".load");
const background = document.querySelector(".main");
// console.log(changeFormIcon);
function changeForm() {
  formSignin.classList.toggle("hidden");
  formSignup.classList.toggle("show");
}
inIcon.addEventListener("click", changeForm);
upIcon.addEventListener("click", changeForm);
// Form đăng kí
const signInButt = document.getElementById("signin-butt");
let staff = JSON.parse(localStorage.getItem("staff")) || [];
console.log(staff);
function signUp(event) {
  event.preventDefault();

  const nameUp = document.getElementById("name-up").value;
  const emailUp = document.getElementById("email-up").value;
  const passWordUp = document.getElementById("password-up").value;
  let upIf = {
    name: nameUp,
    email: emailUp,
    password: passWordUp,
    job: "",
    phone: "",
  };
  if (nameUp && emailUp && passWordUp) {
    if (!nameUp && !emailUp && !passWordUp) {
      alert("Bạn chưa điền đủ thông tin");
    } else {
      // localStorage.setItem("staff", JSON.stringify(userAcount));
      // let staff = JSON.parse(localStorage.getItem("staff")) || [];
      const result = staff.some((item) => item.email === emailUp);
      if (!result) {
        staff.push(upIf);
        localStorage.setItem("staff", JSON.stringify(staff));
        alert("Đăng  kí  tài khoản thành công");
        formSignin.classList.toggle("hidden");
        formSignup.classList.toggle("show");
      } else {
        alert("Email đã tồn tại");
      }
      console.log(staff);
    }
  } else {
    alert("Bạn chưa nhập đủ thông tin");
  }
}
signInButt.addEventListener("click", signUp);

// console.log(userAcount);

//  Code logic cho Form đăng nhập
const loginButton = document.getElementById("login-butt");

const adminAcount = [
  {
    name: "Yash Ghori",
    email: "YashGhori@gmail.com",
    password: "123456",
    role: "admin",
    phone: "7048144030",
    job: "UI - Intern",
  },
  {
    name: "Ven KenShin",
    email: "vuong@gmail.com",
    password: "123",
    role: "admin",
    phone: "7047129842",
    job: "UX - Intern",
  },
];

//Upload lên  localStorage
localStorage.setItem("admin", JSON.stringify(adminAcount));
let admin = JSON.parse(localStorage.getItem("admin")) || [];

// localStorage.setItem("admin", JSON.stringify(userAcount));
// admin.push(userAcount);
// localStorage.setItem("admin", JSON.stringify(admin));

const checkAdmin = () => {
  const emailInput = document.getElementById("email-in").value.trim();
  const passInput = document.getElementById("password").value.trim();
  let admin = JSON.parse(localStorage.getItem("admin"));
  let num = admin.find((item) => {
    return item.email === emailInput && item.password === passInput;
  });
  if (num) {
    // lưu người đăng nhập
    localStorage.setItem("currentUser", JSON.stringify(num));
    setTimeout(() => {
      window.location.href = "./pages/admin_dashboard.html"; //Thay đổi link tại đây
    }, 2000);
    loadIcon.style.display = "block";
    background.style.opacity = "80%";
    return true;
  }
  return false;
};
const checkStaff = () => {
  const emailInput = document.getElementById("email-in").value.trim();
  const passInput = document.getElementById("password").value.trim();
  let staff = JSON.parse(localStorage.getItem("staff")) || [];
  let num = staff.find((item) => {
    return item.email === emailInput && item.password === passInput;
  });
  if (num) {
    // lưu người đăng nhập
    localStorage.setItem("currentUser", JSON.stringify(num));
    setTimeout(() => {
      window.location.href = "./pages/user_dashboard.html"; //Thay đổi link tại đây
    }, 2000);
    loadIcon.style.display = "block";
    background.style.opacity = "80%";
    return true;
  }
  return false;
};

function checkLogIn(event) {
  event.preventDefault();

  checkAdmin();
  checkStaff();
  if (!checkAdmin() && !checkStaff()) {
    alert("Bạn chưa nhâp thông tin, hoặc thông tin bị sai");
  }
  // console.log(num?.email);
}

loginButton.addEventListener("click", checkLogIn);
// Js cho forgot--password
const forgotButt = document.querySelector(".content-find-forgot");
const formFogot = document.querySelector(".forgot-pass");
const loginButtHere = document.querySelector(".content-form-span");
//
const resetButt = document.querySelector(".reset-butt");
const passResetInput = document.querySelector(".pass-reset");

function forgotLayout() {
  formSignin.classList.toggle("hidden");
  formFogot.classList.toggle("show");
  resetInput();
}
function loginLayout() {
  formSignin.classList.toggle("hidden");
  formFogot.classList.toggle("show");
  resetInput();
}
forgotButt.addEventListener("click", forgotLayout);
loginButtHere.addEventListener("click", loginLayout);

function checkEmail(event) {
  event.preventDefault();

  const emailForgot = document.getElementById("email-forgot").value; //value email forgot

  const adminList = JSON.parse(localStorage.getItem("admin")) || [];
  const staffList = JSON.parse(localStorage.getItem("staff")) || [];
  // console.log(adminList, staffList);
  if (emailForgot && document.getElementById("pass-reset-input").value) {
    let found = adminList.find((item) => item.email === emailForgot);
    console.log(found);
    if (found) {
      found.password = document.getElementById("pass-reset-input").value;
      localStorage.setItem("admin", JSON.stringify(adminList));
      console.log(found);
      formSignin.classList.toggle("hidden");
      formFogot.classList.toggle("show");
      alert("Bạn đã đổi mật khẩu thành công");
    } else {
      found = staffList.find((item) => item.email === emailForgot);
      if (found) {
        found.password = document.getElementById("pass-reset-input").value;
        localStorage.setItem("staff", JSON.stringify(staffList));
        console.log(found);
        formSignin.classList.toggle("hidden");
        formFogot.classList.toggle("show");
        alert("Bạn đã đổi mật khẩu thành công");
      }
    }
    if (!found) {
      alert("Bãn đã nhập sai email");
    }
  } else {
    alert("Bạn chưa nhập đủ thông  tin");
  }
}

resetButt.addEventListener("click", checkEmail);

let emailIn = document.getElementById("email-in").value;
function resetInput() {
  emailIn = "";
}
