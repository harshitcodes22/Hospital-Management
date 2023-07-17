"use strict";

let toggle_btn = document.querySelector(".toggle");
let body = document.querySelector("body");
let hotel_name = document.querySelector(".hotel-name");
let containerName = document.querySelector(".left-container-2__hospital");
let containerName2 = document.querySelector(".left-container-2__management");
let leftContainerPara = document.querySelector(".left-para");
let toggle_ball = document.querySelector(".toggle-ball");
let links = document.querySelectorAll(".link");
const element = document.querySelector(".cards");
const featureEl = document.querySelector(".feature");
const contactEl = document.querySelector(".contactMe");
const contact = document.querySelector(".contact");
const close = document.querySelector(".close");
const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");
const frontSection = document.querySelector(".front");
const mainSection = document.querySelector(".main");
const rightDiv = document.querySelector(".right");

///------Username-Password Validation-----/////
const identity = [
  { username: "harshit", password: "Harshit22" },
  { username: "harsh", password: "Harsh04" },
];
const username = document.querySelector(".username");
const usernameLabel = document.querySelector(".formLabel1");
const password = document.querySelector(".password");
const passwordLabel = document.querySelector(".formLabel2");
const modalForm = document.querySelector(".form");
const submitBtn = document.querySelector(".form-btn");

console.log(submitBtn.value);
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  identity.map((element) => {
    if (
      element.username === username.value &&
      element.password === password.value
    ) {
      window.open("./bookings.html", "_blank");
    } else {
      submitBtn.style.backgroundColor = "Red";
      submitBtn.value = "Wrong credentials";
      usernameLabel.style.color = "red";
      passwordLabel.style.color = "red";
    }
  });
});

///////////Event-Listener///////////////////

let count = 0;
toggle_btn.addEventListener("click", (event) => {
  count++;

  if (count % 2 != 0) {
    body.style.transition = "all .2s ease-in";
    body.style.backgroundColor = "#16161a";
    hotel_name.style.color = "#fffffe";
    containerName.style.color = "#fffffe";
    containerName2.style.color = "#fffffe";
    leftContainerPara.style.color = "#94a1b2";
    toggle_ball.classList.toggle("utility");

    for (let i = 0; i < 4; i++) {
      links[i].style.color = "#fffffe";
    }
  } else {
    body.style.transition = "all .2s ease-in";
    body.style.backgroundColor = "#fffffe";
    hotel_name.style.color = "#2b2c34";
    containerName.style.color = "#2b2c34";
    containerName2.style.color = "#2b2c34";
    leftContainerPara.style.color = "#2b2c34";
    toggle_ball.classList.toggle("utility");

    for (let i = 0; i < 4; i++) {
      links[i].style.color = "#2b2c34";
    }
  }
});

//Opening modal window

btn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
  frontSection.style.filter = "blur(2px)";
  rightDiv.style.filter = "blur(2px)";
  // body.style.overflow = "hidden";
});

//Closing modal window

close.addEventListener("click", (e) => {
  console.log("Clicke");
  modal.classList.toggle("hidden");
  frontSection.style.filter = "blur(0px)";
  rightDiv.style.filter = "blur(0px)";
  body.style.overflow = "auto";
});

//////////////smooth scrolling//////////
featureEl.addEventListener("click", (e) => {
  e.preventDefault();
  element.scrollIntoView({
    behavior: "smooth",
  });
});
contactEl.addEventListener("click", (e) => {
  e.preventDefault();
  contact.scrollIntoView({
    behavior: "smooth",
  });
});
