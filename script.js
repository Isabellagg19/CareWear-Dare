let score = 0;

const questions = [
  {
    question: "How often do you buy clothes?",
    answers: [
    {text: "Every week", points: 2}, 
    {text: "Once a month", points: 1}, 
    {text: "Only when necessary", points: 0}
    ]
  },
  {
    question: "If you look at your closet right now, what kind of pieces dominate it?",
    answers: [
      {text: "Mostly big brands like H&M or Zara", points: 2},
      {text: "Mostly local boutiques or artisan brands", points: 1},
      {text: "Mostly thrifted clothing", points: 0}
    ]
  },
  {
    question: "Be honest… do you read clothing labels before buying? (materials + country of production)",
    answers: [
      {text: "Always, I care about that", points: 0},
      {text: "Sometimes, depends on the price", points: 1}, 
      {text: "Never, I don’t really think about it", points: 2}
      ]
  }
];

let currentQuestion = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
  const q = questions[currentQuestion];
  questionElement.innerText = q.question;
  answersElement.innerHTML = "";

 q.answers.forEach(answer => {
  const button = document.createElement("button");
  button.innerText = answer.text;

  button.addEventListener("click", () => {
    score += answer.points;
    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  answersElement.appendChild(button);
});
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    questionElement.innerText = "Quiz completed";
    answersElement.innerHTML = "";
    nextBtn.style.display = "none";
  }
});

showQuestion();

function showResult() {
  questionElement.innerText = "Your Result:";
  answersElement.innerHTML = "";
  let resultText = "";

  if (score <= 2) {
    resultText = "You’re a Conscious Shopper! You really think before buying.";
  } else if (score <= 4) {
    resultText = " You’re in the Middle! You care, but there’s room to grow.";
  } else {
    resultText = "Fast Fashion Fan! Time to rethink some habits";
  }

  const result = document.createElement("p");
  result.innerText = resultText;
  answersElement.appendChild(result);
}