// let txt = document.querySelector(".text");
// let btns = document.querySelectorAll(".btn");
// let coin = document.querySelector(".coin");
// let happyMan = document.querySelector(".happyMan");
// let rope = document.querySelector(".rope");
// let head = document.querySelector(".head");

// let names = ["Rufat", "Rasul", "Omar", "Eldost", "Muraz"];

// let randomNameIndex = Math.floor(Math.random() * names.length);
// let randName = names[randomNameIndex];
// console.log(randName);

// for (let i = 0; i < btns.length; i++) {
//   let btn = btns[i];
//   btn.addEventListener("click", function () {
//     let clickedLetter = btn.value.toLowerCase();
//     let nextLetter = randName[txt.innerText.length];
//     if (clickedLetter === nextLetter.toLowerCase()) {
//       txt.innerText += nextLetter;
//     } else {
//       rope.style.display = "block";
//       head.style.display = "block";
//       console.log("Hello");
//     }
//     if (txt.innerText.toLowerCase() === randName.toLowerCase()) {
//       happyMan.style.display = "block";
//       txt.innerText = "";
//     }
//   });
// }

let firstSection = document.querySelector(".firstSection");
let btnPlayGame = document.querySelector(".btnPlayGame");
let mainSection = document.querySelector(".mainSection");
let txt = document.querySelector(".text");
let buttons = document.querySelector(".buttons");
let btns = document.querySelectorAll(".btn");
let points = document.querySelector(".points");
let countRetry = document.querySelector(".countRetry");
let happyMan = document.querySelector(".happyMan");
let cryMan = document.querySelector(".cryMan");
let rope = document.querySelector(".rope");
let head = document.querySelector(".head");
let body = document.querySelector(".body");
let arm1 = document.querySelector(".arm1");
let arm2 = document.querySelector(".arm2");
let foot1 = document.querySelector(".foot1");
let foot2 = document.querySelector(".foot2");
let wellDone = document.querySelector(".wellDone");
let gameOver = document.querySelector(".gameOver");
let nextStep = document.querySelector(".nextStep");
let points1 = document.querySelector(".points1");
let imgPoint = document.querySelector(".imgPoint");
let homeBtn = document.querySelector(".homeBtn");
let syncBtn = document.querySelector(".syncBtn");
let lastSection = document.querySelector(".lastSection");
let btnLast = document.querySelector(".btnLast");
let imgPoint2 = document.querySelector(".imgPoint2");
let points2 = document.querySelector(".points2");

let names = ["Rufat", "Rasul", "Omar", "Eldost", "Muraz"];
let point = 0;
let numberRetry = 5;

let winSound = new Audio("./music/success-fanfare-trumpets-6185.mp3");
let loseSound = new Audio("./music/wahwahwahwaaaahahahahahaha-94669.mp3");
let wrongBtn = new Audio("./music/buzzer-or-wrong-answer-20582.mp3");
let trueSound = new Audio("./music/correct-choice-43861.mp3");

btnPlayGame.addEventListener("click", function () {
  firstSection.style.display = "none";
  mainSection.style.display = "block";
  gameOver.style.display = "none";
  buttons.style.display = "block";
  cryMan.style.display = "none";
  // imgPoint.style.display = "block";
  point = 0;
  points.innerText = point;
  numberRetry = 5;
  countRetry.innerText = numberRetry;
  wrongClickCount = 0;
});

function getRandomName(namesArray) {
  let randomNameIndex = Math.floor(Math.random() * namesArray.length);
  return namesArray[randomNameIndex];
}
let randName = getRandomName(names);

let wrongClickCount = 0;

for (let i = 0; i < btns.length; i++) {
  let btn = btns[i];
  btn.addEventListener("click", function () {
    let clickedLetter = btn.value.toLowerCase();
    let nextLetter = randName[txt.innerText.length];
    if (clickedLetter === nextLetter.toLowerCase()) {
      txt.innerText += nextLetter;
      trueSound.play();
    } else {
      rope.style.display = "block";
      wrongClickCount++;
      if (wrongClickCount === 1) {
        wrongBtn.play();
      } else if (wrongClickCount === 2) {
        wrongBtn.play();
        head.style.display = "block";
      } else if (wrongClickCount === 3) {
        wrongBtn.play();
        body.style.display = "block";
      } else if (wrongClickCount === 4) {
        wrongBtn.play();
        arm1.style.display = "block";
      } else if (wrongClickCount === 5) {
        wrongBtn.play();
        arm2.style.display = "block";
      } else if (wrongClickCount === 6) {
        wrongBtn.play();
        foot1.style.display = "block";
      } else if (wrongClickCount === 7) {
        rope.style.display = "none";
        head.style.display = "none";
        body.style.display = "none";
        arm1.style.display = "none";
        arm2.style.display = "none";
        foot1.style.display = "none";
        cryMan.style.display = "block";
        buttons.style.display = "none";
        imgPoint.style.display = "none";
        gameOver.style.display = "block";
        imgPoint2.style.display = "center";
        txt.innerText = "";

        points2.innerText = point;
        loseSound.play();
      }

      console.log("Hello");
    }
    if (txt.innerText.toLowerCase() === randName.toLowerCase()) {
      point += 1;
      points.innerText = point;
      points1.innerText = point;
      happyMan.style.display = "block";
      rope.style.display = "none";
      head.style.display = "none";
      body.style.display = "none";
      arm1.style.display = "none";
      arm2.style.display = "none";
      foot1.style.display = "none";
      foot2.style.display = "none";
      txt.innerText = "";
      wrongClickCount = 0;
      buttons.style.display = "none";
      wellDone.style.display = "block";
      imgPoint.style.display = "none";
      winSound.play();
    }
  });
}

nextStep.addEventListener("click", function () {
  randName = getRandomName(names);
  wellDone.style.display = "none";
  buttons.style.display = "block";
  imgPoint.style.display = "flex";
  happyMan.style.display = "none";
});

homeBtn.addEventListener("click", function () {
  mainSection.style.display = "none";
  firstSection.style.display = "block";
});

syncBtn.addEventListener("click", function () {
  randName = getRandomName(names);
  wellDone.style.display = "none";
  buttons.style.display = "block";
  imgPoint.style.display = "flex";
  happyMan.style.display = "none";
  gameOver.style.display = "none";
  cryMan.style.display = "none";
  numberRetry -= 1;
  countRetry.innerText = numberRetry;
  wrongClickCount = 0;

  if (numberRetry < 0) {
    mainSection.style.display = "none";
    lastSection.style.display = "block";
  }
});

btnLast.addEventListener("click", function () {
  lastSection.style.display = "none";
  firstSection.style.display = "block";
});
