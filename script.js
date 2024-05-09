"use strict";

// ensure that dom is fully loaded and then load js
document.addEventListener("DOMContentLoaded", function () {
  const mapBtn = document.querySelector(".map-btn");
  window.addEventListener("scroll", stickyApplied);
  mapBtn.addEventListener("click", changeColorMode);
});

function stickyApplied() {
  //when selecting with get class name need to be [0]
  const nav = document.getElementsByClassName("navigation_container")[0];
  if (window.scrollY > 0) nav.classList.add("sticky");
}

function changeColorMode() {
  const map = document.querySelector(".map");
  if (map.classList.contains("filter")) {
    map.classList.remove("filter");
  } else {
    map.classList.add("filter");
  }
}

// tab changer

const tabs = document.querySelectorAll(".operation-btn");
const tabsContainer = document.querySelector(".operation_tab_container");
const tabsContent = document.querySelectorAll(".operation_content");

tabsContainer.addEventListener("click", function (e) {
  // selecting right element from tab container
  const clicked = e.target.closest(".operation-btn");
  // disable clicking on anything else
  if (!clicked) return;
  // console.log(clicked);
  // for each tab remove active state
  tabs.forEach((t) => t.classList.remove("operation_tab--active"));
  // add active state to clicked tab
  clicked.classList.add("operation_tab--active");
  tabsContent.forEach((tab) =>
    tab.classList.remove("operations__content--active")
  );
  //activate content area
  const dataTab = clicked.getAttribute("data-tab");
  document
    .querySelector(`.operations_content--${dataTab}`)
    .classList.add("operations__content--active");
});
