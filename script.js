const box = document.getElementById("box");
const code = document.getElementById("code");

function resetBox() {
  box.style = "";
  box.className = "";
}

function showPadding() {
  resetBox();
  box.style.padding = "30px";
  code.textContent = `
#box {
  padding: 30px;
}
Padding adds space INSIDE the element.
`;
}

function showMargin() {
  resetBox();
  box.style.margin = "40px";
  code.textContent = `
#box {
  margin: 40px;
}
Margin adds space OUTSIDE the element.
`;
}

function showHover() {
  resetBox();
  box.classList.add("hover-example");
  code.textContent = `
#box:hover {
  background: red;
  transform: scale(1.2);
}
Hover applies when the mouse is over the element.
`;
}
function setPadding(value) {
  resetBox();
  box.style.padding = value + "px";
  document.getElementById("padValue").innerText = value + "px";
}
let displayOff = false;
let hidden = false;

function toggleDisplay() {
  displayOff = !displayOff;
  box.style.display = displayOff ? "none" : "block";
}

function toggleVisibility() {
  hidden = !hidden;
  box.style.visibility = hidden ? "hidden" : "visible";
}
function rotateBox() {
  resetBox();
  box.style.transform = "rotate(45deg)";
}

function scaleBox() {
  resetBox();
  box.style.transform = "scale(1.5)";
}

function skewBox() {
  resetBox();
  box.style.transform = "skew(20deg)";
}
function showCSS(code) {
  document.getElementById("cssCode").innerText = code;
}
function showAnimation() {
  resetBox();
  box.classList.add("animate");
  code.textContent = `
@keyframes move {
  from { transform: translateX(0); }
  to { transform: translateX(200px); }
}

#box {
  animation: move 1s infinite alternate;
}
Animations change styles over time.
`;
}
