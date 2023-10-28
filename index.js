let form = document.querySelector("form");
let fName = document.querySelector(".Fname");
let lName = document.querySelector(".Lname");
let email = document.querySelector(".Email");
let password = document.querySelector(".password");
let all = document.querySelectorAll("form label");
all.forEach((e) => {
  let span = document.createElement("span");
  span.style.cssText = `position: absolute;bottom: -20px;
    right: 3px;
    font-size: 13px;`;
  e.appendChild(span);
});
form.onsubmit = function (e) {
  e.preventDefault();

  all.forEach((el) => {
    if (el.firstElementChild.value === "") {
      el.classList.add("err");
      el.children[1].innerHTML = `${el.firstElementChild.placeholder} cannot be empty`;
    } else if (el.firstElementChild.value.length < 8) {
      el.classList.add("err");
      el.children[1].innerHTML = `${el.firstElementChild.placeholder} cannot be under 8 chars`;
    } else {
      el.classList.remove("err");
      el.children[1].innerHTML = ``;
    }
  });
  if (!/\w+@\w+.\w+/.test(email.value)) {
    email.classList.add("err");
    email.nextElementSibling.innerHTML = "please provide valid email address";
  }
  if (Array.from(all).every((e) => !e.classList.contains("err"))) {
    let check = document.querySelector(".submitted");
    check.style.transform = "translate(-50%, 100%)";
    setTimeout(function () {
      check.style.transform = "translate(-50%, -100%)";
    }, 1500);
  }
};
