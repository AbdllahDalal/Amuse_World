// start menu

let menu = document.querySelector(".header .main-nav .other");

menu.addEventListener("click", () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  } else {
    menu.classList.add("open");
  }
});

let element = document.querySelectorAll("*");
if (menu.classList.contains("open")) {
  element.forEach((e) => {
    e.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });
}
// end menu

// start skills selector

let ourSkills = document.querySelector(".our-skills");
let interSkills = document.querySelectorAll(
  ".our-skills .skills .the-progress span"
);

window.onscroll = function () {
  let skillTop = ourSkills.offsetTop;
  // console.log(skillTop);
  let skillHeight = ourSkills.offsetHeight;
  // console.log(skillHeight);
  let pageHeight = window.innerHeight;
  // console.log(pageHeight);
  let pageTop = this.pageYOffset;
  // console.log(pageTop);
  // console.log(skillTop + skillHeight - pageHeight);

  if (pageTop >= skillTop + skillHeight - pageHeight) {
    interSkills.forEach((e) => {
      e.style.width = e.dataset.width;
    });
  }
  if (pageTop < skillTop - pageHeight) {
    interSkills.forEach((e) => {
      e.style.width = "0px";
    });
  }
};
