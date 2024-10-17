const categories = [
  "POP CULTURE",
  "VIDEO GAMES",
  "MOVIES/TV SHOWS",
  "UB",
  "CAKE",
  "CAKE CLUB",
  "MISCELLANEOUS",
];
const values = [100, 200, 300, 400, 500];
let questions = [
  {
    category: "POP CULTURE",
    value: 100,
    question: "Question for History - $100",
    answer: "Answer for History - $100",
  },
  {
    category: "POP CULTURE",
    value: 200,
    question: "Question for History - $200",
    answer: "Answer for History - $200",
  },
  {
    category: "POP CULTURE",
    value: 300,
    question: "Question for History - $300",
    answer: "Answer for History - $300",
  },
  {
    category: "POP CULTURE",
    value: 400,
    question: "Question for History - $400",
    answer: "Answer for History - $400",
  },
  {
    category: "POP CULTURE",
    value: 500,
    question: "Question for History - $500",
    answer: "Answer for History - $500",
  },
  {
    category: "VIDEO GAMES",
    value: 100,
    question: "Question for Science - $100",
    answer: "Answer for Science - $100",
  },
  {
    category: "VIDEO GAMES",
    value: 200,
    question: "Question for Science - $200",
    answer: "Answer for Science - $200",
  },
  {
    category: "VIDEO GAMES",
    value: 300,
    question: "Question for Science - $300",
    answer: "Answer for Science - $300",
  },
  {
    category: "VIDEO GAMES",
    value: 400,
    question: "Question for Science - $400",
    answer: "Answer for Science - $400",
  },
  {
    category: "VIDEO GAMES",
    value: 500,
    question: "Question for Science - $500",
    answer: "Answer for Science - $500",
  },
  {
    category: "MOVIES/TV SHOWS",
    value: 100,
    question: "Question for Geography - $100",
    answer: "Answer for Geography - $100",
  },
  {
    category: "MOVIES/TV SHOWS",
    value: 200,
    question: "Question for Geography - $200",
    answer: "Answer for Geography - $200",
  },
  {
    category: "MOVIES/TV SHOWS",
    value: 300,
    question: "Question for Geography - $300",
    answer: "Answer for Geography - $300",
  },
  {
    category: "MOVIES/TV SHOWS",
    value: 400,
    question: "Question for Geography - $400",
    answer: "Answer for Geography - $400",
  },
  {
    category: "MOVIES/TV SHOWS",
    value: 500,
    question: "Question for Geography - $500",
    answer: "Answer for Geography - $500",
  },
  {
    category: "UB",
    value: 100,
    question: "Question for Movies - $100",
    answer: "Answer for Movies - $100",
  },
  {
    category: "UB",
    value: 200,
    question: "Question for Movies - $200",
    answer: "Answer for Movies - $200",
  },
  {
    category: "UB",
    value: 300,
    question: "Question for Movies - $300",
    answer: "Answer for Movies - $300",
  },
  {
    category: "UB",
    value: 400,
    question: "Question for Movies - $400",
    answer: "Answer for Movies - $400",
  },
  {
    category: "UB",
    value: 500,
    question: "Question for Movies - $500",
    answer: "Answer for Movies - $500",
  },
  {
    category: "CAKE",
    value: 100,
    question: "Question for Music - $100",
    answer: "Answer for Music - $100",
  },
  {
    category: "CAKE",
    value: 200,
    question: "Question for Music - $200",
    answer: "Answer for Music - $200",
  },
  {
    category: "CAKE",
    value: 300,
    question: "Question for Music - $300",
    answer: "Answer for Music - $300",
  },
  {
    category: "CAKE",
    value: 400,
    question: "Question for Music - $400",
    answer: "Answer for Music - $400",
  },
  {
    category: "CAKE",
    value: 500,
    question: "Question for Music - $500",
    answer: "Answer for Music - $500",
  },
  {
    category: "CAKE CLUB",
    value: 100,
    question: "Question for Music - $100",
    answer: "Answer for Music - $100",
  },
  {
    category: "CAKE CLUB",
    value: 200,
    question: "Question for Music - $200",
    answer: "Answer for Music - $200",
  },
  {
    category: "CAKE CLUB",
    value: 300,
    question: "Question for Music - $300",
    answer: "Answer for Music - $300",
  },
  {
    category: "CAKE CLUB",
    value: 400,
    question: "Question for Music - $400",
    answer: "Answer for Music - $400",
  },
  {
    category: "CAKE CLUB",
    value: 500,
    question: "Question for Music - $500",
    answer: "Answer for Music - $500",
  },
  {
    category: "MISCELLANEOUS",
    value: 100,
    question: "Question for Music - $100",
    answer: "Answer for Music - $100",
  },
  {
    category: "MISCELLANEOUS",
    value: 200,
    question: "Question for Music - $200",
    answer: "Answer for Music - $200",
  },
  {
    category: "MISCELLANEOUS",
    value: 300,
    question: "Question for Music - $300",
    answer: "Answer for Music - $300",
  },
  {
    category: "MISCELLANEOUS",
    value: 400,
    question: "Question for Music - $400",
    answer: "Answer for Music - $400",
  },
  {
    category: "MISCELLANEOUS",
    value: 500,
    question: "Question for Music - $500",
    answer: "Answer for Music - $500",
  }
];

function startGame() {
  const board = document.getElementById("board");
  board.innerHTML = "";

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("id", "colums");

    const value = values[i];
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("id", "Catagory");
    cell.textContent = `${category}`;
    row.appendChild(cell);

    for (let j = 0; j < values.length; j++) {
      const value = values[j];
      const cell = document.createElement("div");
      cell.setAttribute("id", "Value");
      cell.setAttribute("onclick", "toggleMean()");
      cell.setAttribute("class", "Cell#" + i + "-" + j);
      cell.classList.add("cell");
      cell.innerText = `${value}`;
      cell.addEventListener("click", () =>
        selectQuestion(category, value, cell.className),
      );
      row.appendChild(cell);
    }

    board.appendChild(row);
  }
}

function toggleMean() {
  document.getElementById("popup-1").classList.toggle("active");
}

function showAnswer(answer) {
  const board = document.getElementById("question");
  board.innerHTML += "<br>" + answer + "<br>";
  document.getElementById("showAnswerButton").remove();
}

function selectQuestion(category, value, cellClass) {
  console.log(cellClass);
  const question = questions.find(
    (q) => q.category === category && q.value === value,
  );
  if (question) {
    const board = document.getElementById("question");
    board.innerHTML = question.question + "<br>";
    board.innerHTML +=
      "<button id='showAnswerButton' onclick='showAnswer(\"" +
      question.answer +
      "\")'>Show Answer</button>";
    console.log(question.question);
    const divs = document.getElementsByClassName(cellClass);
    const div = divs[0];
    const x = document.createElement("img");
    x.src = "images/Red_Cross.png";
    x.style.position = "absolute";
    x.style.pointerEvents = "none";
    x.style.width = div.clientWidth + "px";
    x.style.height = div.clientHeight + "px";
    x.style.top = div.clientTop;
    x.style.left = div.clientLeft;
    div.style.position = "relative";
    div.appendChild(x);
  } else {
    alert("Question not found!");
  }
}
