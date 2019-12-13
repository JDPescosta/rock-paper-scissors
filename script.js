function computerPlay() {
  let x = Math.floor(Math.random() * 3);

  if (x == 0) {
    return "rock";
  } else if (x == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection = computerPlay()) {
  let pc = playerSelection.toLowerCase();
  let npc = computerSelection;

  if (pc !== "rock" && pc !== "paper" && pc !== "scissors") {
    console.log("Thats not how you play this game :/");
    return "invalid";
  }
  if (pc === npc) {
    console.log("Its a tie this round! Try again.");
    return "draw";
  } else if (
    (pc === "rock" && npc === "paper") ||
    (pc === "paper" && npc === "scissors") ||
    (pc === "scissors" && npc === "rock")
  ) {
    console.log(`You lose this round! :*( ${npc} beats ${npc}`);
    return "lose";
  } else {
    console.log(`You win this round! :D ${pc} beats ${npc}`);
    return "win";
  }
}

function game() {
  let rounds = 0;
  let npcWins = 0;
  let pcWins = 0;
  let draws = 0;

  while (rounds < 5) {
    let result = playRound(
      prompt("Scissors, paper, rock?", "Scissors/paper/rock")
    );
    if (result === "draw") {
      draws++;
    } else if (result === "lose") {
      npcWins++;
    } else if (result === "win") {
      pcWins++;
    } else {
      console.log("Try entering scissors, paper or rock next time");
    }
    rounds = draws + npcWins + pcWins;
  }

  if (npcWins > pcWins) {
    console.log(`You lose the game ${pcWins} to ${npcWins} with ${draws} draws :*(`);
  } else if (pcWins > npcWins) {
    console.log(`You win the game ${pcWins} to ${npcWins} with ${draws} draws, congratulations!`)
  } else if (draws === 5) {
    console.log(`Its a ${draws} to ${draws} draw. That was pretty unlikely!`);
  } else {
    console.log("Something seems to have gone very wrong :S");
  }
}


