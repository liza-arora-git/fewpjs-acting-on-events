// Your code here
let dodger = document.getElementById("dodger");

// console.log(dodger.style.left); // "180px"
// console.log(dodger.style.bottom); // "0px"

// dodger.style.bottom = "100px";

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  }

  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    // console.log(leftNumbers);
    if (left < 360) {
      dodger.style.left = `${left + 10}px`;
    }
  }