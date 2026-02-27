let score = 0;

function selectAnswer(points) {
  score += points;
}

function showResult() {
  let resultText = "";

  if (score <= 3) {
    resultText = " You are a Fast Fashion Fan, But don't worry awareness is the first step!";
  } else if (score <= 5) {
    resultText = " Trend Explorer, Keep up You're getting there!";
  } else {
    resultText = "Conscious Consumer, Continue like that the planet thanks you!";
  }

  document.getElementById("result").innerText = resultText;
}