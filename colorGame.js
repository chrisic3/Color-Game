var numSquares = 6;
var colors; 
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setResetBtn();
  setModeBtns();
  setSquares();
  reset();
}

function setResetBtn() {
  // reset button
  resetButton.addEventListener("click", function() {
    reset();
  });
}

function setModeBtns() {
  // mode buttons
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      for (var j = 0; j < modeButtons.length; j++) {
        modeButtons[j].classList.remove("selected");
      }

      this.classList.add("selected");
      
      // turnary (if)
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

function setSquares() {
  // squares set up
  for (var i = 0; i < squares.length; i++) {
    // add click event to squares
    squares[i].addEventListener("click", function() {
      // get color of clicked square
      var clickedColor = this.style.backgroundColor;

      // compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      }
      else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  };
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

function changeColor(color) {
  // change each square to the passed in color
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
 
  // get random color and push into arr num times
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  return arr;
}

function randomColor() {
  // pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
