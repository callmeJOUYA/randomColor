function randColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}

function changeColor() {
  color = randColor()
  showColor = document.querySelector("#color")
  showColor.textContent = color;
  document.getElementById("color").style.color = color;
  document.querySelector("body").style.backgroundColor = color;
  
}
