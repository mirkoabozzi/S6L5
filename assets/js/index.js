const svgImg = document.getElementById("svg1");
console.log(svgImg);
const div = document.getElementById("box1");
console.log(div);

const svgImg2 = document.getElementById("svg2");
console.log(svgImg2);
const div2 = document.getElementById("box2");
console.log(div2);

div.addEventListener("click", (event) => {
  svgImg.classList.toggle("invisible");
});
div2.addEventListener("click", (event) => {
  svgImg2.classList.toggle("invisible");
});
