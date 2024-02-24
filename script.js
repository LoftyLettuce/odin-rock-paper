// referrences
const plrScore = document.querySelector('#plr');
const pcScore = document.querySelector('#pc');
const prChoice = document.querySelector('#plrChoice');
const pcChoice = document.querySelector('#pcChoice');
const rBoard = document.querySelector('.result');
const wBoard = document.querySelector('.winner');
// computerChoice
function computerChoice()
{
  // random a number for 1 to 3
  let rng = Math.floor(Math.random()*100);
  if (rng < 30)
  {
    return 0; // rock
  }
  else if (rng < 60)
  {
    return 1; //paper
  }
  else
  {
    return 2; //scissors
  }
}
// winOrLose
function winOrLose(ans)
{
  // Change input into number
  const strToNum = ["rock", "paper", "scissors"];
  ans = strToNum.indexOf(ans);

  // computer choice
  let comChoice = computerChoice();
  // result
  const numToStr = ["Rock", "Paper", "Scissors"];
  pcChoice.textContent = numToStr[comChoice];
  prChoice.textContent = numToStr[ans];
  let win = "You win. "+ numToStr[ans] + " beat " + numToStr[comChoice];
  let lose = "You lost. "+ numToStr[comChoice] + " beat " + numToStr[ans];
  let draw = "Draw. Both are " + numToStr[ans];
  // if com is the last and u are first
  if (Math.abs(comChoice-ans) == 2)
  {
    if (ans == 2)
    {
      return lose;
    }
  }

  // if both have the same ans
  else if (comChoice == ans)
  {
    return draw;
  }
  // if computer have better choice
  else if (comChoice > ans)
  {
    return lose;
  }
  return win;
}
// play 
let score = [0, 0, 0, ""];
function playGame(plrAns)
{
  //player index 0, com index 1, result: 2, winner: 3
  //reset
  if (score[0] == 5 || score[1] == 5)
  {
    score[0] = 0;
    score[1] = 0;
    score[3] = "";
  }
  //save the result
  const result = winOrLose(plrAns);
  score[2] = result;
  //tracking scores
  if (result.search("win") != -1)
  {
    plrScore.parentElement.style.backgroundColor = "red";
    pcScore.parentElement.style.backgroundColor = "white";
    score[0]++;
  }
  if (result.search("lost") != -1)
  {
    pcScore.parentElement.style.backgroundColor = "red";
    plrScore.parentElement.style.backgroundColor = "white";
    score[1]++;
  }
  if (score[0] == 5)
  {
    score[3] = "Winner: Player";
  }
  else if (score[1] == 5)
  {
    score[3] = ("Computer win!!!");
  }
}

document.addEventListener('click', (event) =>{
  if (event.target.id == 'rock') 
  {
    playGame("rock");
  }
  if (event.target.id == 'paper') 
  {
    playGame("paper");
  }
  if (event.target.id == 'scissors') 
  {
    playGame("scissors");
  }
  plrScore.textContent = score[0];
  pcScore.textContent = score[1];
  rBoard.textContent = score[2];
  wBoard.textContent = score[3];
})