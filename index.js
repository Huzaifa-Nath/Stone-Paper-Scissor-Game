let Player = 0;
let Bot = 0;

const rpss = document.querySelectorAll('.rps');

const PlayerScore = document.querySelector("#Player");
const BotScore = document.querySelector("#Bot");



// COMPUTER CHOICE GENERATOR
const computerchoice = () => {
    const arr = ["rock", "paper", "scissor"];
    const Rand = Math.floor(Math.random() * 3);
    return arr[Rand];
}

// DRAW CASE
const drawGame = () => {
   
}

// SHOW WINNER FUNCTION
const showWinner = (userWin) => {
    if (userWin) {
    
        throwsconfetti();
        sound();
        Player++;
        PlayerScore.innerText = `Player - ${Player}`;

    } else {
    
        playSound();
        Bot++;
        BotScore.innerText = `Bot - ${Bot}`;
    }
}

// GAME FUNCTION
const playGame = (userChoices) => {
    const compchoice = computerchoice();


    if (userChoices === compchoice) {
        drawGame();
        showDrawMessage();
        return;
    }

    let userWin = false;

    if (userChoices === "rock") {
        userWin = compchoice === "scissor";
    } else if (userChoices === "paper") {
        userWin = compchoice === "rock";
    } else if (userChoices === "scissor") {
        userWin = compchoice === "paper";
    }

    showWinner(userWin);
}

// ADD EVENT LISTENERS
rpss.forEach((rps) => {
    rps.addEventListener("click", () => {
        const userChoices = rps.getAttribute("id");
        playGame(userChoices);
    });
});

function showDrawMessage() {
  const msg = document.getElementById("draw-message");
  msg.classList.add("show");
  setTimeout(() => {
    msg.classList.remove("show");
  }, 2000);
}

const NewGame = () =>{
    location.reload();
}

const playSound = () =>{
    document.getElementById("losesound").play();
}
const sound = () =>{
    document.getElementById("clap").play();
}

const throwsconfetti = () =>{
    const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}


fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}