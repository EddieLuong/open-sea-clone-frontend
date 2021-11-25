const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Select Element
const dropdowns = $$(".dropdown");
const subtitle = $$(".subtitle");

dropdowns.forEach((dropdown, index) => {
  dropdown.onmouseover = function () {
    if (subtitle[index]) {
      subtitle[index].classList.toggle("display");
    }
  };
  dropdown.onmouseout = function () {
    if (subtitle[index]) {
      subtitle[index].classList.toggle("display");
    }
  };
});
