/* 왼쪽 사이드바 화살표 표시 */
// active 화살표
const active = document.querySelector(".active");
const arrow = document.createElement("span");
arrow.classList.add("material-icons");
arrow.innerText = "navigate_next";

active.appendChild(arrow);
