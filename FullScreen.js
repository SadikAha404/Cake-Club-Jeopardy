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
    question: "This is the number of members in BTS. - 100",
    answer: "Seven Members - 100",
  },
  {
    category: "POP CULTURE",
    value: 200,
    question: "This person is famous for doing the moonwalk. - 200",
    answer: "Michael Jackson - 200",
  },
  {
    category: "POP CULTURE",
    value: 300,
    question: "This person celebrates by saying SUI. - 300",
    answer: "Christiano Ronaldo - 300",
  },
  {
    category: "POP CULTURE",
    value: 400,
    question: "This person is the most followed TikToker. - 400",
    answer: "Khaby Lame - 400",
  },
  {
    category: "POP CULTURE",
    value: 500,
    question: "Name all of Kim Kardashian's kids. - 500",
    answer: "North, Saint, Chicago, Psalm - 500",
  },
  {
    category: "VIDEO GAMES",
    value: 100,
    question: "This is the color of Pacman. - 100",
    answer: "Yellow - 100",
  },
  {
    category: "VIDEO GAMES",
    value: 200,
    question: "This is the highest rank in Valorant. - 200",
    answer: "Radiant - 200",
  },
  {
    category: "VIDEO GAMES",
    value: 300,
    question: "This is the name of the league girl band. - 300",
    answer: "KDA - 300",
  },
  {
    category: "VIDEO GAMES",
    value: 400,
    question: "This eboard member peaked the highest valorant rank. - 400",
    answer: "Sahil - 400",
  },
  {
    category: "VIDEO GAMES",
    value: 500,
    question: "This was the first video game ever created. - 500",
    answer: "Pong - 500",
  },
  {
    category: "MOVIES/TV SHOWS",
    value: 100,
    question: "This TV network is famous for airing SpongeBob. - 100",
    answer: "Nickelodeon - 100",
  },
  {
    category: "MOVIES/TV SHOWS",
    value: 200,
    question: "Name the three spiderman actors. - 200",
    answer: "Toby Maguire, Andrew Garfield, Tom Holland - 200",
  },
  {
    category: "MOVIES/TV SHOWS",
    value: 300,
    question: "This anime has the most episodes out of any anime. - 300",
    answer: "Sazae-San - 300",
  },
  {
    category: "MOVIES/TV SHOWS",
    value: 400,
    question: "This popular K-drama has to do with North Korea. - 400",
    answer: "Crash Landing On You - 400",
  },
  {
    category: "MOVIES/TV SHOWS",
    value: 500,
    question: "This TV show is Sahil's favorite. - 500",
    answer: "The Vampire Diaries - 500",
  },
  {
    category: "UB",
    value: 100,
    question: "This is the biggest lecture hall on north campus. - 100",
    answer: "Knox 20 - 100",
  },
  {
    category: "UB",
    value: 200,
    question: "This is the tallest building on campus. - 200",
    answer: "Clemens - 200",
  },
  {
    category: "UB",
    value: 300,
    question: "Locations of the two Tim Hortons on North Campus. - 300",
    answer: "Student Union and Alfiero (business building) - 300",
  },
  {
    category: "UB",
    value: 400,
    question: "This is the most popular major at UB. - 400",
    answer: "Business Administration - 400",
  },
  {
    category: "UB",
    value: 500,
    question: "This was the original name for Evans. - 500",
    answer: "Porter - 500",
  },
  {
    category: "CAKE",
    value: 100,
    question: "Main ingredient used in cake. - 100",
    answer: "Flour - 100",
  },
  {
    category: "CAKE",
    value: 200,
    question: "This is where the moon cake comes from. - 200",
    answer: "China - 200",
  },
  {
    category: "CAKE",
    value: 300,
    question: "This is the number of milks in a tres leches cake. - 300",
    answer: "Three - 300",
  },
  {
    category: "CAKE",
    value: 400,
    question: "This person is famous for the saying 'Let them eat cake.' - 400",
    answer: "Marie Antoinette - 400",
  },
  {
    category: "CAKE",
    value: 500,
    question: "This is the most popular type of cake in America. - 500",
    answer: "Chocolate Cake - 500",
  },
  {
    category: "CAKE CLUB",
    value: 100,
    question: "This is cake club's Instagram handle. - 100",
    answer: "@ubcakeclub - 100",
  },
  {
    category: "CAKE CLUB",
    value: 200,
    question: "This is the event cake club held their last meeting. - 200",
    answer: "Phone charm making!!! - 200",
  },
  {
    category: "CAKE CLUB",
    value: 300,
    question: "Point at the three siblings part of the eboard. - 300",
    answer: "Did you point right? - 300",
  },
  {
    category: "CAKE CLUB",
    value: 400,
    question: "This Eboard member is from Woodbury, NY (You can point). - 400",
    answer: "Laila - 400",
  },
  {
    category: "CAKE CLUB",
    value: 500,
    question: "This was the year which Cake Club was founded. - 500",
    answer: "2021 - 500",
  },
  {
    category: "MISCELLANEOUS",
    value: 100,
    question: "Choose an eboard member to rock paper scissors with, if you win best 2/3 you get the points. - 100",
    answer: "Did you win? - 100",
  },
  {
    category: "MISCELLANEOUS",
    value: 200,
    question: "Finish the song lyric: Kiki do you love me?, _________ - 200",
    answer: "Are you riding? Say youll never ever leave from beside me. - 200",
  },
  {
    category: "MISCELLANEOUS",
    value: 300,
    question: "Win an arm wrestle against an eboard member (we choose which eboard member) - 300",
    answer: "Did you win? - 300",
  },
  {
    category: "MISCELLANEOUS",
    value: 400,
    question: "Flip a water bottle in 2 tries. - 400",
    answer: "Did you win? - 400",
  },
  {
    category: "MISCELLANEOUS",
    value: 500,
    question: "Whole team posts 'I love cake club' on their stories and tag us!! Everyone has to do it - 500",
    answer: "Did you post? - 500",
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

function incrementScore(teamId, increment) {
    var scoreInput = document.getElementById('team' + teamId + '-score');
    var currentScore = parseInt(scoreInput.value) || 0;
    var newScore = currentScore + increment;
    scoreInput.value = newScore;
    localStorage.setItem('team' + teamId + 'Score', newScore);
}

function decrementScore(teamId, increment) {
    var scoreInput = document.getElementById('team' + teamId + '-score');
    var currentScore = parseInt(scoreInput.value) || 0;
    var newScore = Math.max(0, currentScore - increment);
    scoreInput.value = newScore;
    localStorage.setItem('team' + teamId + 'Score', newScore);
}
