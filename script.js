
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modebutton = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquares();  
    reset();
}

function setUpModeButtons() {
    for (var i = 0; i < modebutton.length; i++){
        modebutton[i].addEventListener("click", function () {
            modebutton[0].classList.remove("selected");
            modebutton[1].classList.remove("selected");
            this.classList.add("selected");     
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "CORRECT!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "TRY AGAIN";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    for (var i = 0; i < squares.length; i++){
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function () {
    reset();
});

function changeColors(color) {
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }   
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());      
    }
    return arr;
}

function randomColor() {
    //pick a red from 0 -255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
