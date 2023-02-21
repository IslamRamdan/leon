let icon = document.querySelector(".header span.icon");
let ulList = document.querySelector(".header ul.menu");
// console.log(icon);

icon.onclick = function () {
  ulList.classList.toggle("show");
};
