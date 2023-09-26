// credit to Jagadesha NH on CodePen, used their code as a base and duplicated for text colour change

let outerDiv = document.getElementById("outer-div");
let heading = document.getElementById("heading");
let text = document.getElementById("text");

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  outerDiv.style.backgroundColor = getRandomColor();
}
function changeHeadingColor() {
  heading.style.color = getRandomColor();
}
function changeTextColor() {
  text.style.color = getRandomColor();
}

setInterval(changeColor, 1000);
setInterval(changeHeadingColor, 1000);
setInterval(changeTextColor, 1000);
