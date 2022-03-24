//팀과제 js
//재빈
const mainModal1 = document.getElementById("jae");
const mainContent1 = document.getElementById("01");
mainContent1.addEventListener("click", () => {
  mainModal1.classList.toggle("show");
  if (mainModal1.classList.contains("show")) {
    body.style.overflow = "hidden";
  }
});
mainModal1.addEventListener("click", (event) => {
  if (event.target === mainModal1) {
    mainModal1.classList.toggle("show");

    if (!mainModal1.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});
//상윤
const mainModal2 = document.getElementById("sang");
const mainContent2 = document.getElementById("02");
mainContent2.addEventListener("click", () => {
  mainModal2.classList.toggle("show");
  if (mainModal2.classList.contains("show")) {
    body.style.overflow = "hidden";
  }
});
mainModal2.addEventListener("click", (event) => {
  if (event.target === mainModal2) {
    mainModal2.classList.toggle("show");

    if (!mainModal2.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});
//우형pro
const mainModel3 = document.getElementById("wooPro");
const mainContent3 = document.getElementById("03");
mainContent3.addEventListener("click", () => {
  mainModel3.classList.toggle("show");
  if (mainModel3.classList.contains("show")) {
    body.style.overflow = "hidden";
  }
});
mainModel3.addEventListener("click", (event) => {
  if (event.target === mainModel3) {
    mainModel3.classList.toggle("show");

    if (!mainModel3.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});
//희수
const mainModel4 = document.getElementById("hi");
const mainContent4 = document.getElementById("04");
mainContent4.addEventListener("click", () => {
  mainModel4.classList.toggle("show");
  if (mainModel4.classList.contains("show")) {
    body.style.overflow = "hidden";
  }
});
mainModel4.addEventListener("click", (event) => {
  if (event.target === mainModel4) {
    mainModel4.classList.toggle("show");

    if (!mainModel4.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});
//우형Re
const mainModel5 = document.getElementById("wooRe");
const mainContent5 = document.getElementById("05");
mainContent5.addEventListener("click", () => {
  mainModel5.classList.toggle("show");
  if (mainModel5.classList.contains("show")) {
    body.style.overflow = "hidden";
  }
});
mainModel5.addEventListener("click", (event) => {
  if (event.target === mainModel5) {
    mainModel5.classList.toggle("show");

    if (!mainModal1.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});
