const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionE1 = document.getElementById("question");
const formE1 = document.getElementById("form");
const inputE1 = document.getElementById("input");
const scoreE1 = document.getElementById("score");

questionE1.innerText = `What is ${num1} multiplied by ${num2}?`;

function handleRefresh() {
  setTimeout(function () {
    location.reload();
  }, 5000); // 5000 milliseconds = 5 seconds
}

handleRefresh();

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
scoreE1.innerText = `Score: ${score}`;

const correctAns = num1 * num2;

formE1.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission and page reload

  const userAns = +inputE1.value;

  if (userAns === correctAns) {
    score++;
    updateScore();
  } else {
    score--;
    updateScore();
  }
  console.log(score);
});

function updateScore() {
  localStorage.setItem("score", JSON.stringify(score));
  scoreE1.innerText = `Score: ${score}`;
}
