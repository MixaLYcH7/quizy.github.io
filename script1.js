var boxshadow = "";

for (var i = 0; i <= 2000; i++) {
  px = Math.random() < 0.5 ? "-" : "";
  py = Math.random() < 0.5 ? "-" : "";
  x = Math.floor(Math.random() * window.innerWidth + 1);
  y = Math.floor(Math.random() * window.innerHeight + 1);
  s = Math.floor(Math.random() * 2 - 1);
  boxshadow += px + x + "px " + py + y + "px 0 " + s + "px #fff,";
}

boxshadow = boxshadow.slice(0, -1);

stars.style.boxShadow = boxshadow;

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green",
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD,
  },
};

const TIME_LIMIT = 30;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    console.log(TIME_LIMIT);
    document.getElementById("base-timer-label").innerHTML =
      formatTime(timeLeft);
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

// function returnTimeLIMIT() {
//   console.log(TIME_LIMIT);
// }

// ----------------------------------------------------------
const question = [
  {
    question:
      "С помощью какого метода осуществляется удаление элементов массива?",
    answer: ["del", "false", "splice", "cancel"],
    correct: 1,
  },
  {
    question: "С помощью каких команд можно создать массив?",
    answer: [
      "const array = []",
      "const array = new Array{}",
      "int new Array()",
      "new bool arr[}",
    ],
    correct: 1,
  },
  {
    question: "Какой из указанных методов добавляет элемент в конец массива?",
    answer: ["shift()", "push()", "unshift()", "pop()"],
    correct: 1,
  },
  {
    question: "Как выглядит литерал массива ?",
    answer: [
      "список элементов, окруженный кавычками",
      "список элементов, окруженный квадратными скобками",
      "список элементов, окруженный фигурными скобками",
      "список элементов, окруженный круглыми скобками",
    ],
    correct: 1,
  },
  {
    question: "Из чего состоит элемент массива ?",
    answer: [
      "значения",
      "операнда и значения",
      "индекса",
      "индекса и значения",
    ],
    correct: 1,
  },
  {
    question:
      "С помощью какого свойства можно узнать количество элементов в массиве?",
    answer: ["numbers", "quantity", "howmany", "length"],
    correct: 1,
  },
  {
    question:
      "Как называется массив, значениями которого являются другие массивы ?",
    answer: [
      "многоуровневый массив",
      "многомерный массив",
      "большой массив",
      "многоярусный массив",
    ],
    correct: 1,
  },
  {
    question: "Что делает метод Array.reverse() ?",
    answer: [
      "сортирует элементы массива и возвращает отсортированный массив",
      "меняет порядок следования элементов в массиве на противоположный, и возвращает массив с переставленными элементами",
      "cоздает и возвращает новый массив, содержащий элементы исходного массива, для которого был вызван метод concat()",
      "используется для копирования указанного участка из массива и возвращает новый массив, содержащий скопированные элементы",
    ],
    correct: 1,
  },
  {
    question: "Какой метод добавляет значния в начало массива?",
    answer: ["Array.join()", "unshift()", "Array.reverse()", "push()"],
    correct: 1,
  },
  {
    question:
      "Этот метод проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.",
    answer: ["reduce()", "some()", "every()", "shift()"],
    correct: 1,
  },
];

const line = document.querySelector(".progress__line");
console.log(line);
const headerContainer = document.querySelector("#header");
const listContainer = document.querySelector("#list");
const submitButton = document.querySelector("#submit");

let score = 0;
let questionIndex = 0;
let q110 = document.getElementById("q110");
let a = 1;

const clearPage = () => {
  headerContainer.innerHTML = "";
  listContainer.innerHTML = "";
};

clearPage();

const showQuestion = () => {
  const headerTemplate = `<h2 class="title">%title%</h2>`;
  const title = headerTemplate.replace(
    "%title%",
    question[questionIndex]["question"]
  );
  headerContainer.innerHTML = title;
  question[questionIndex]["answer"].forEach((item, index) => {
    const questionTemplate = `<li>
      <label>
      <input value="%number%" type="radio" class="answer" name="answer" />
      <span>%answer%</span>
      </label>
			</li>`;
    let answerHTML = questionTemplate.replace("%answer%", item);

    answerHTML = answerHTML.replace("%number%", index + 1);

    listContainer.innerHTML += answerHTML;
  });
};

showQuestion();

const showResults = () => {
  console.log("showResults started!");
  console.log(score);

  const resultsTemplate = `
  <h2 class="title">%title%</h2>
  <h3 class="summary">%message%</h3>
  <p class="result">%result%</p>
  `;

  let title, message;

  if (score === question.length) {
    title = "Поздравляем!";
    message = "Вы ответили верно на все вопросы!";
  } else if ((score * 100) / question.length >= 50) {
    title = "Неплохой результат";
    message = "Вы дали более половины правильных ответов";
  } else {
    title = "Стоит постараться";
    message = "Пока у вас меньше половины правильных ответов";
  }

  let result = `${score} из ${question.length}`;

  const finalMessage = resultsTemplate
    .replace("%title%", title)
    .replace("%message%", message)
    .replace("%result%", result);

  headerContainer.innerHTML = finalMessage;

  submitButton.blur();
  submitButton.innerText = "Начать заново";
  submitButton.onclick = () => history.go();
};

const checkAnswer = () => {
  console.log("checkAnswer started");

  const checkedRadio = document.querySelector('input[type="radio"]:checked');

  if (!checkedRadio) {
    submitButton.blur();
    return;
  }

  const userAnswer = parseInt(checkedRadio.value);

  if (userAnswer === question[questionIndex]["correct"]) {
    score++;
  }

  console.log("score", score);

  if (questionIndex !== question.length - 1) {
    console.log("Это не последний вопрос");
    questionIndex++;
    clearPage();
    showQuestion();
    return;
  } else {
    console.log("Это последний вопрос");
    clearPage();
    showResults();
  }
};
const submitButton1 = document.querySelector("#submit1");

submitButton.onclick = checkAnswer;
submitButton.addEventListener("click", progressBar);
submitButton.addEventListener("click", startTimer);
// submitButton.addEventListener("click", returnTimeLIMIT);
submitButton.addEventListener("click", function123);
submitButton1.addEventListener("click", indexHTML);

function progressBar(e) {
  let progressWidth = 10;
  let percent = (questionIndex / question.length) * 100;

  line.style.width = percent + "%";
}
let questions = document.getElementById("quetions");

function function123() {
  a += 1;
  if (a === 11) {
    q110.innerHTML = ``;
  } else {
    q110.innerHTML = `${a}/10`;
  }
}
let ocen = 0;
function indexHTML() {
  let ocenka = document.getElementById("ocenka");
  if (score <= 4) {
    ocen = 2;
  } else if (score === 5) {
    ocen = 3;
  } else if (score === 6) {
    ocen = 3;
  } else if (score === 7) {
    ocen = 4;
  } else if (score === 8) {
    ocen = 4;
  } else if (score >= 9) {
    ocen = 5;
  }
  window.location.href = `index.html?ocen=${ocen}`;
  console.log(ocen);
  ocenka.innerHTML(ocen);
}
