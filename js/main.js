//* HTML Elements
var captchaTextEl = document.getElementById("captchaText");
var tryAgainBtn = document.getElementById("try");
var input = document.getElementById("input")
var checkBtn = document.getElementById("check");

//* App variables
var correctAnswer = "";
var tryCounter = 0;

//* Functions
function generateCAPTCHA() {
  var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var result = "";
  for (var i = 1; i <= 6; i++) {
    result += chars[Math.trunc(Math.random() * chars.length)]
  }
  correctAnswer = result
  captchaTextEl.innerHTML = result;
}

generateCAPTCHA();

function checkAnswer() {
  if (input.value === correctAnswer) {
    alert("successfully done")
  } else {
    tryCounter +=1;
    if(tryCounter <= 5){
      alert("sorry");
    }else{
      alert("You have exceeded the maximum limit");
      generateCAPTCHA();
    }
    
  }
}

//* Events
tryAgainBtn.onclick = generateCAPTCHA
checkBtn.onclick = checkAnswer